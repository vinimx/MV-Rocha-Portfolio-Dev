import emailjs from "@emailjs/browser";

// Configurações do EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
  TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key",
};

// Função para enviar email
export const enviarEmail = async (dadosFormulario: {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}) => {
  try {
    const templateParams = {
      from_name: dadosFormulario.nome,
      from_email: dadosFormulario.email,
      subject: dadosFormulario.assunto,
      message: dadosFormulario.mensagem,
      to_name: "Marcos Vinícius Rocha",
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};
