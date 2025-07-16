// Função para enviar via WhatsApp
export const enviarViaWhatsApp = (dadosFormulario: {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}) => {
  const numero = "5514997264421";
  const mensagem = `🌟 *CONTATO DO PORTFÓLIO* 🌟

👤 *Nome:* ${dadosFormulario.nome}
📧 *Email:* ${dadosFormulario.email}
📋 *Assunto:* ${dadosFormulario.assunto}

💬 *Mensagem:*
${dadosFormulario.mensagem}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
};
