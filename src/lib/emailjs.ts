import emailjs from "@emailjs/browser";

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Verificar se as variáveis estão definidas
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.warn("⚠️ Variáveis do EmailJS não configuradas:", {
    SERVICE_ID: EMAILJS_SERVICE_ID ? "✅ Configurado" : "❌ Não configurado",
    TEMPLATE_ID: EMAILJS_TEMPLATE_ID ? "✅ Configurado" : "❌ Não configurado",
    PUBLIC_KEY: EMAILJS_PUBLIC_KEY ? "✅ Configurado" : "❌ Não configurado",
  });

  if (process.env.NODE_ENV === "development") {
    console.error("🚨 Para usar o EmailJS:");
    console.error("1. Copie o arquivo .env.local.example para .env.local");
    console.error("2. Preencha com suas credenciais do EmailJS");
    console.error("3. Reinicie o servidor de desenvolvimento");
  }
}

export interface DadosEmail {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export const enviarEmail = async (
  dados: DadosEmail
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Verificar se está em ambiente do navegador
    if (typeof window === "undefined") {
      return {
        success: false,
        error: "Não é possível enviar email no servidor",
      };
    }

    // Verificar se as variáveis estão configuradas
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("❌ EmailJS não configurado corretamente");
      return {
        success: false,
        error:
          "Sistema de email não configurado. Entre em contato via WhatsApp ou telefone.",
      };
    }

    // Verificar conectividade (importante para mobile)
    if (!navigator.onLine) {
      return { success: false, error: "Sem conexão com a internet" };
    }

    // Validar dados antes do envio
    if (!dados.nome.trim() || !dados.email.trim() || !dados.mensagem.trim()) {
      return { success: false, error: "Dados obrigatórios não preenchidos" };
    }

    // Configurar timeout para mobile (conexões mais lentas)
    const timeoutPromise = new Promise(
      (_, reject) =>
        setTimeout(() => reject(new Error("Timeout na requisição")), 15000) // 15 segundos
    );

    // Enviar email com timeout
    const emailPromise = emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: dados.nome,
        from_email: dados.email,
        subject: dados.assunto,
        message: dados.mensagem,
        to_name: "Marcos Vinícius",
      },
      EMAILJS_PUBLIC_KEY
    );

    await Promise.race([emailPromise, timeoutPromise]);

    return { success: true };
  } catch (error) {
    console.error("Erro no envio do email:", error);

    // Retornar erro específico baseado no tipo
    if (error instanceof Error) {
      if (error.message.includes("Timeout")) {
        return { success: false, error: "Timeout - conexão muito lenta" };
      }
      if (error.message.includes("Failed to fetch")) {
        return { success: false, error: "Problema de conectividade" };
      }
    }

    return { success: false, error: "Erro desconhecido no envio" };
  }
};
