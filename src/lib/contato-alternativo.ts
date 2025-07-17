export interface DadosContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export const enviarViaWhatsApp = (dados: DadosContato) => {
  const numero = "5514997264421"; // Seu número do WhatsApp

  // Criar mensagem formatada
  const mensagem =
    `*Nova mensagem do Portfolio*\n\n` +
    `*Nome:* ${dados.nome}\n` +
    `*Email:* ${dados.email}\n` +
    `*Assunto:* ${dados.assunto}\n\n` +
    `*Mensagem:*\n${dados.mensagem}`;

  // Codificar a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Detectar se é mobile para usar URL apropriada
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // URL para mobile (app nativo) vs desktop (web)
  const urlWhatsApp = isMobile
    ? `whatsapp://send?phone=${numero}&text=${mensagemCodificada}`
    : `https://web.whatsapp.com/send?phone=${numero}&text=${mensagemCodificada}`;

  // Tentar abrir no app, fallback para web
  if (isMobile) {
    // Primeiro tenta abrir o app
    window.location.href = urlWhatsApp;

    // Fallback para web após 2 segundos se app não abrir
    setTimeout(() => {
      const webUrl = `https://web.whatsapp.com/send?phone=${numero}&text=${mensagemCodificada}`;
      window.open(webUrl, "_blank");
    }, 2000);
  } else {
    // Desktop sempre usa web
    window.open(urlWhatsApp, "_blank");
  }
};
