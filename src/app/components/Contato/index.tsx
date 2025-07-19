import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { enviarEmail } from "@/lib/emailjs";
import { enviarViaWhatsApp } from "@/lib/contato-alternativo";
import Notificacao from "../Notificacao";

const Contato = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [estaEnviando, setEstaEnviando] = useState(false);
  const [notificacao, setNotificacao] = useState<{
    visivel: boolean;
    tipo: "sucesso" | "erro";
    mensagem: string;
  }>({
    visivel: false,
    tipo: "sucesso",
    mensagem: "",
  });

  const lidarComEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstaEnviando(true);

    // Adicionar validação específica para mobile
    if (
      !dadosFormulario.nome.trim() ||
      !dadosFormulario.email.trim() ||
      !dadosFormulario.mensagem.trim()
    ) {
      setNotificacao({
        visivel: true,
        tipo: "erro",
        mensagem: "Por favor, preencha todos os campos obrigatórios.",
      });
      setEstaEnviando(false);
      return;
    }

    // Verificar se está em dispositivo móvel
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    try {
      const resultado = await enviarEmail(dadosFormulario);

      if (resultado.success) {
        setNotificacao({
          visivel: true,
          tipo: "sucesso",
          mensagem:
            "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        });
        setDadosFormulario({ nome: "", email: "", assunto: "", mensagem: "" });
      } else {
        // Em mobile, oferecer alternativas se o email falhar
        if (isMobile) {
          setNotificacao({
            visivel: true,
            tipo: "erro",
            mensagem:
              "Erro no envio por email. Tente via WhatsApp ou copie os dados abaixo.",
          });
          // Auto-scroll para os botões alternativos
          setTimeout(() => {
            const whatsappBtn = document.querySelector("[data-whatsapp-btn]");
            whatsappBtn?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 1000);
        } else {
          setNotificacao({
            visivel: true,
            tipo: "erro",
            mensagem:
              "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.",
          });
        }
      }
    } catch {
      // Para mobile, sempre oferecer alternativa do WhatsApp
      if (isMobile) {
        setNotificacao({
          visivel: true,
          tipo: "erro",
          mensagem:
            "Problema no envio de email. Redirecionando para WhatsApp...",
        });

        // Auto-redirect para WhatsApp após 3 segundos
        setTimeout(() => {
          enviarViaWhatsApp(dadosFormulario);
        }, 3000);
      } else {
        setNotificacao({
          visivel: true,
          tipo: "erro",
          mensagem:
            "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.",
        });
      }
    } finally {
      setEstaEnviando(false);
    }
  };

  const lidarComMudanca = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const linksSociais = [
    {
      nome: "GitHub",
      url: "https://github.com/vinimx",
      icone: Github,
    },
    {
      nome: "LinkedIn",
      url: "https://www.linkedin.com/in/marcos-vin%C3%ADcius-m-75934a110/",
      icone: Linkedin,
    },
    {
      nome: "Email",
      url: "mailto:marcosvc817@gmail.com",
      icone: Mail,
    },
    {
      nome: "WhatsApp",
      url: "https://wa.me/5514997264421",
      icone: Phone,
    },
  ];

  return (
    <section
      data-section="contato"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold texto-neon-ciano mb-8">
            CONTATO
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vamos criar algo incrível juntos? Entre em contato comigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Formulário de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold texto-neon mb-6">
                📩 ENVIE UMA MENSAGEM
              </h3>

              <form onSubmit={lidarComEnvio} className="space-y-6">
                {/* Campo Nome */}
                <div className="group">
                  <label
                    htmlFor="nome"
                    className="block text-sm md:text-base font-orbitron font-bold texto-neon mb-2"
                  >
                    NOME
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={dadosFormulario.nome}
                    onChange={lidarComMudanca}
                    required
                    className="w-full px-4 py-3 bg-cartao borda-neon rounded-lg focus:sombra-neon-destaque outline-none transition-all duration-300 font-orbitron text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Campo Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base font-orbitron font-bold texto-neon mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={dadosFormulario.email}
                    onChange={lidarComMudanca}
                    required
                    className="w-full px-4 py-3 bg-cartao borda-neon rounded-lg focus:sombra-neon-destaque outline-none transition-all duration-300 font-orbitron text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Campo Assunto */}
                <div className="group">
                  <label
                    htmlFor="assunto"
                    className="block text-sm md:text-base font-orbitron font-bold texto-neon mb-2"
                  >
                    ASSUNTO
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={dadosFormulario.assunto}
                    onChange={lidarComMudanca}
                    required
                    className="w-full px-4 py-3 bg-cartao borda-neon rounded-lg focus:sombra-neon-destaque outline-none transition-all duration-300 font-orbitron text-white placeholder-gray-400"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>

                {/* Campo Mensagem */}
                <div className="group">
                  <label
                    htmlFor="mensagem"
                    className="block text-sm md:text-base font-orbitron font-bold texto-neon mb-2"
                  >
                    MENSAGEM
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={dadosFormulario.mensagem}
                    onChange={lidarComMudanca}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cartao borda-neon rounded-lg focus:sombra-neon-destaque outline-none transition-all duration-300 font-orbitron text-white placeholder-gray-400 resize-none"
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  />
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  disabled={estaEnviando}
                  className={`w-full py-4 px-6 font-orbitron font-bold uppercase tracking-wider transition-all duration-300 rounded-lg flex items-center justify-center gap-3 ${
                    estaEnviando
                      ? "bg-[#8338ec]/50 border-[#8338ec]/50 text-white/50 cursor-not-allowed"
                      : "bg-transparent border-2 border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-white hover:sombra-neon-primaria transform hover:scale-105"
                  }`}
                >
                  {estaEnviando ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      ENVIAR VIA EMAIL
                    </>
                  )}
                </button>

                {/* Botões Alternativos - Melhorar para mobile */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    data-whatsapp-btn
                    onClick={() => enviarViaWhatsApp(dadosFormulario)}
                    className="flex-1 py-3 px-4 font-orbitron font-bold uppercase tracking-wider transition-all duration-300 rounded-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone size={16} />
                    VIA WHATSAPP
                  </button>

                  {/* Novo botão para copiar dados em mobile */}
                  <button
                    type="button"
                    onClick={() => {
                      const dados = `Nome: ${dadosFormulario.nome}\nEmail: ${dadosFormulario.email}\nAssunto: ${dadosFormulario.assunto}\nMensagem: ${dadosFormulario.mensagem}`;
                      navigator.clipboard
                        .writeText(dados)
                        .then(() => {
                          setNotificacao({
                            visivel: true,
                            tipo: "sucesso",
                            mensagem:
                              "Dados copiados! Cole no seu app de email favorito.",
                          });
                        })
                        .catch(() => {
                          // Fallback para dispositivos que não suportam clipboard
                          const textArea = document.createElement("textarea");
                          textArea.value = dados;
                          document.body.appendChild(textArea);
                          textArea.select();
                          document.execCommand("copy");
                          document.body.removeChild(textArea);

                          setNotificacao({
                            visivel: true,
                            tipo: "sucesso",
                            mensagem:
                              "Dados copiados! Cole no seu app de email favorito.",
                          });
                        });
                    }}
                    className="flex-1 py-3 px-4 font-orbitron font-bold uppercase tracking-wider transition-all duration-300 rounded-lg border-2 border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black flex items-center justify-center gap-2 text-sm"
                  >
                    <Mail size={16} />
                    COPIAR DADOS
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Informações de Contato e Redes Sociais */}
          <div className="space-y-8">
            {/* Contato Direto */}
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold texto-neon-ciano mb-6">
                📞 CONTATO DIRETO
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-cartao borda-neon rounded-lg hover:sombra-neon-secundaria transition-all duration-300 group">
                  <Mail
                    className="text-2xl text-[#00f5ff] group-hover:animate-pulse"
                    size={24}
                  />
                  <div>
                    <p className="font-orbitron font-bold texto-neon text-sm md:text-base">
                      EMAIL
                    </p>
                    <a
                      href="mailto:marcosvc817@gmail.com"
                      className="text-gray-300 hover:texto-neon-ciano transition-colors duration-300 text-sm md:text-base"
                    >
                      marcosvc817@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-cartao borda-neon rounded-lg hover:sombra-neon-secundaria transition-all duration-300 group">
                  <Phone
                    className="text-2xl text-[#00f5ff] group-hover:animate-pulse"
                    size={24}
                  />
                  <div>
                    <p className="font-orbitron font-bold texto-neon text-sm md:text-base">
                      TELEFONE
                    </p>
                    <a
                      href="tel:+5514997264421"
                      className="text-gray-300 hover:texto-neon-ciano transition-colors duration-300 text-sm md:text-base"
                    >
                      +55 14 99726-4421
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-cartao borda-neon rounded-lg hover:sombra-neon-secundaria transition-all duration-300 group">
                  <MapPin
                    className="text-2xl text-[#00f5ff] group-hover:animate-pulse"
                    size={24}
                  />
                  <div>
                    <p className="font-orbitron font-bold texto-neon text-sm md:text-base">
                      LOCALIZAÇÃO
                    </p>
                    <p className="text-gray-300 text-sm md:text-base">
                      Avaré - São Paulo, Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold texto-neon-ciano mb-6">
                🌐 REDES SOCIAIS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {linksSociais.map((social) => {
                  const IconeComponente = social.icone;
                  return (
                    <a
                      key={social.nome}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 bg-cartao borda-neon rounded-lg hover:sombra-neon-destaque transition-all duration-300 hover:scale-105"
                    >
                      <IconeComponente
                        className="text-[#00f5ff] group-hover:animate-pulse group-hover:text-[#ff006e] transition-colors duration-300"
                        size={24}
                      />
                      <span className="font-orbitron font-bold group-hover:texto-neon transition-colors duration-300 text-sm md:text-base">
                        {social.nome}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Status de Disponibilidade */}
            <div className="p-6 bg-gradient-to-r from-[#00f5ff]/10 to-[#8338ec]/10 border border-[#00f5ff]/50 rounded-lg text-center hover:sombra-neon-destaque transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-[#00f5ff] rounded-full animate-pulse"></div>
                <span className="font-orbitron font-bold texto-neon-ciano text-sm md:text-base">
                  DISPONÍVEL PARA FREELANCE
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Atualmente aceitando novos projetos e oportunidades de
                colaboração
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Componente de Notificação */}
      <Notificacao
        tipo={notificacao.tipo}
        mensagem={notificacao.mensagem}
        visivel={notificacao.visivel}
        onFechar={() => setNotificacao({ ...notificacao, visivel: false })}
      />
    </section>
  );
};

export default Contato;
