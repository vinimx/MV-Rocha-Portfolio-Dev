import FotoPerfil from "../FotoPerfil";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function SobreMim() {
  return (
    <section
      data-section="sobre"
      className="relative py-20 px-6 min-h-screen flex items-center"
    >
      {/* Elemento de teste para verificar animações */}
      <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-neon-pulse"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-orbitron texto-neon mb-8 animate-neon-pulse">
                SOBRE MIM
              </h2>

              <div className="space-y-6 text-lg font-orbitron leading-relaxed">
                <p className="text-texto-principal">
                  Olá! Sou{" "}
                  <span className="texto-neon-ciano font-bold">
                    Marcos Vinicius Rocha
                  </span>
                  , um desenvolvedor Front-End focado em criar interfaces
                  modernas, funcionais e envolventes.
                </p>

                <p className="text-texto-principal">
                  Especializado em{" "}
                  <span className="texto-neon font-bold">React</span>,
                  <span className="texto-neon font-bold"> JavaScript</span> e
                  <span className="texto-neon font-bold"> TypeScript</span>,
                </p>

                <p className="text-texto-principal">
                  Estudante de Tecnologia da Informação na UNIVESP.
                </p>
              </div>
            </div>

            {/* Tecnologias */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold texto-neon-ciano mb-6">
                Tecnologias que trabalho
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { nome: "HTML", icone: SiHtml5, cor: "text-orange-500" },
                  { nome: "CSS", icone: SiCss3, cor: "text-blue-500" },
                  {
                    nome: "Bootstrap",
                    icone: SiBootstrap,
                    cor: "text-purple-500",
                  },
                  {
                    nome: "Tailwind CSS",
                    icone: SiTailwindcss,
                    cor: "text-cyan-400",
                  },
                  { nome: "React", icone: SiReact, cor: "text-blue-400" },
                  {
                    nome: "TypeScript",
                    icone: SiTypescript,
                    cor: "text-blue-600",
                  },
                  {
                    nome: "JavaScript",
                    icone: SiJavascript,
                    cor: "text-yellow-400",
                  },
                  { nome: "Next.js", icone: SiNextdotjs, cor: "text-white" },
                  { nome: "Git", icone: SiGit, cor: "text-orange-600" },
                  { nome: "GitHub", icone: SiGithub, cor: "text-gray-400" },
                ].map((tecnologia) => {
                  const IconeComponente = tecnologia.icone;
                  return (
                    <div
                      key={tecnologia.nome}
                      className="group p-4 borda-neon rounded-lg hover:sombra-neon-primaria transition-all duration-300 hover:scale-105 bg-cartao flex flex-col items-center gap-3"
                    >
                      <IconeComponente
                        className={`text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse ${tecnologia.cor} group-hover:texto-neon`}
                      />
                      <span className="font-orbitron font-bold group-hover:texto-neon transition-colors duration-300 text-center text-sm md:text-base">
                        {tecnologia.nome}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="relative flex items-center justify-center pb-16 sm:pb-18 md:pb-20 lg:pb-24">
            <div className="relative">
              {/* Componente FotoPerfil */}
              <FotoPerfil />

              {/* Partículas flutuantes ao redor da foto */}
              <div className="absolute -top-8 -right-8 w-2 h-2 bg-primaria rounded-full animate-neon-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-2 h-2 bg-destaque rounded-full animate-neon-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/4 -left-10 w-1 h-1 bg-secundaria rounded-full animate-neon-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
