import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projetos = [
  // ...existing code...
  {
    id: "1",
    titulo: "Sistema de Feedback",
    descricao:
      "Um sistema de feedback elegante e interativo desenvolvido com HTML, Tailwind CSS e JavaScript.",
    imagem: "/assets/images/feedback.png",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    demo: "https://feedback-kohl-nine.vercel.app/index.html",
    github: "https://github.com/vinimx/Feedback",
    destaque: false,
  },
  {
    id: "2",
    titulo: "Lista de Compras",
    descricao:
      "Uma lista de compras feita em Javascript com funcionalidades de adicionar, remover e marcar itens como comprados.",
    imagem: "/assets/images/lista-de-compras.png",
    skills: ["HTML", "CSS", "JavaScript"],
    demo: "https://lista-de-compras-fawn-eight.vercel.app/",
    github: "https://github.com/vinimx/Lista-de-Compras",
    destaque: false,
  },
  {
    id: "3",
    titulo: "Hope - Landing Page",
    descricao:
      "Criação de uma landing page para uma instituição de caridade fictícia.",
    imagem: "/assets/images/hope.png",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    demo: "https://hope-lading-page.vercel.app/",
    github: "https://github.com/vinimx/Hope-LadingPage",
    destaque: false,
  },
  {
    id: "4",
    titulo: "Simulador de tributos Lucro Presumido",
    descricao:
      "Calculadora de impostos para lojas de veículos usados no Regime Lucro Presumido. Permite calcular impostos como PIS, COFINS, IRPJ e CSLL com base nos valores informados.",
    imagem: "/assets/images/simulador-LP.png",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://simulacao-de-tributos-lp.vercel.app/",
    github: "https://github.com/vinimx/Simulacao-de-Tributos-LP",
    destaque: false,
  },
  {
    id: "5",
    titulo: "Simulador de Apuração do Simples Nacional",
    descricao:
      "Aplicação desenvolvida com intuito de simular e calcular os tributos do Simples Nacional de acordo com a faixa, tabela e valores informados.",
    imagem: "/assets/images/simulador-SN.png",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://simulacao-apuracao-simples.vercel.app/",
    github: "https://github.com/vinimx/Simulacao-Apuracao-Simples",
    destaque: false,
  },
  {
    id: "6",
    titulo: "Holy Hype Movement",
    descricao:
      "Este projeto é um website moderno, responsivo e visualmente impactante que serve como plataforma digital oficial do movimento.",
    imagem: "/assets/images/holy-hype.png",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    demo: "https://holy-hype-site.vercel.app/index.html",
    github: "https://github.com/vinimx/Holy-Hype-Site",
    destaque: true,
  },
  {
    id: "8",
    titulo: "BibleBoost",
    descricao:
      "Leitura bíblica moderna e interativa com navegação rápida, favoritos e versões diferentes.",
    imagem: "/assets/images/bibleboost.png",
    skills: [
      "React",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "Vite",
    ],
    demo: "https://bibleboost.vercel.app/",
    github: "https://github.com/vinimx/bibleboost",
    destaque: true,
  },
  {
    id: "9",
    titulo: "Emissor de Notas Ranicont",
    descricao:
      "Layout de um emissor de notas fiscais para um escritório de contabilidade.",
    imagem: "/assets/images/emissor-ranicont.png",
    skills: [
      "React",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Shadcn UI",
      "Lucide",
      "React Router",
      "Vite",
    ],
    demo: "https://emissor-ranicont.vercel.app/",
    github: "https://github.com/vinimx/emissor-ranicont",
    destaque: true,
  },
];

export default function Projetos() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Separar projetos em destaque e outros
  const projetosDestaque = projetos.filter((projeto) => projeto.destaque);
  const outrosProjetos = projetos.filter((projeto) => !projeto.destaque);

  return (
    <section
      data-section="projetos"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold texto-neon-ciano mb-8">
            MEUS PROJETOS
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes, onde tecnologia
            encontra criatividade
          </p>
        </div>

        {/* Projetos em Destaque */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold texto-neon mb-8 text-center">
            🚀 PROJETOS EM DESTAQUE
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projetosDestaque.map((projeto) => (
              <div
                key={projeto.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 bg-cartao borda-neon rounded-lg overflow-hidden hover:sombra-neon-primaria"
                onMouseEnter={() => setHoveredProject(projeto.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Imagem do Projeto */}
                <div className="relative aspect-video bg-gradient-to-br from-[#ff006e]/20 to-[#00f5ff]/20 overflow-hidden">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay de Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#ff006e]/10 to-[#00f5ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Efeito Glitch */}
                  {hoveredProject === projeto.id && (
                    <div className="absolute inset-0 animate-pulse bg-[#ff006e]/5"></div>
                  )}
                </div>

                {/* Informações do Projeto */}
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-orbitron font-bold texto-neon-ciano mb-3">
                    {projeto.titulo}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {projeto.descricao}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projeto.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 text-xs md:text-sm font-orbitron bg-[#8338ec]/20 border border-[#8338ec]/50 rounded text-[#8338ec] hover:bg-[#8338ec]/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex gap-3 md:gap-4">
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-transparent border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black transition-all duration-300 font-orbitron font-bold text-xs md:text-sm rounded"
                    >
                      <span>DEMO</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-transparent border border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-white transition-all duration-300 font-orbitron font-bold text-xs md:text-sm rounded"
                    >
                      <span>CODE</span>
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outros Projetos */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold texto-neon mb-8 text-center">
            💎 OUTROS PROJETOS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {outrosProjetos.map((projeto) => (
              <div
                key={projeto.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 bg-cartao borda-neon rounded-lg overflow-hidden hover:sombra-neon-secundaria"
                onMouseEnter={() => setHoveredProject(projeto.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Imagem Compacta do Projeto */}
                <div className="relative aspect-video bg-gradient-to-br from-[#8338ec]/20 to-[#00f5ff]/20 overflow-hidden">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    className="object-cover"
                  />

                  {hoveredProject === projeto.id && (
                    <div className="absolute inset-0 animate-pulse bg-[#00f5ff]/5"></div>
                  )}
                </div>

                {/* Informações Compactas do Projeto */}
                <div className="p-4">
                  <h4 className="text-base md:text-lg font-orbitron font-bold texto-neon-ciano mb-2">
                    {projeto.titulo}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 leading-relaxed">
                    {projeto.descricao.length > 300
                      ? projeto.descricao.substring(0, 300) + "..."
                      : projeto.descricao}
                  </p>

                  {/* Tecnologias - Compacto */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {projeto.skills.slice(0, 10).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-orbitron bg-[#00f5ff]/20 border border-[#00f5ff]/50 rounded text-[#00f5ff]"
                      >
                        {tech}
                      </span>
                    ))}
                    {projeto.skills.length > 10 && (
                      <span className="px-2 py-1 text-xs font-orbitron text-gray-500">
                        +{projeto.skills.length - 10}
                      </span>
                    )}
                  </div>

                  {/* Botões Compactos */}
                  <div className="flex gap-2">
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-transparent border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black transition-all duration-300 font-orbitron font-bold text-xs rounded"
                    >
                      DEMO
                    </a>
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-transparent border border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-white transition-all duration-300 font-orbitron font-bold text-xs rounded"
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
