import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiStyledcomponents,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Tecnologias() {
  return (
    <section
      data-section="skills"
      className="min-h-screen flex items-center justify-center px-4 py-10 relative z-10"
    >
      {/* Tecnologias */}
      <div className="max-w-6xl mx-auto text-center w-full">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-bold texto-neon-ciano mb-4 md:mb-6">
          Minhas Tecnologias
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
            {
              nome: "Styled-Components",
              icone: SiStyledcomponents,
              cor: "text-cyan-400",
            },
            {
              nome: "JavaScript",
              icone: SiJavascript,
              cor: "text-yellow-400",
            },
            {
              nome: "TypeScript",
              icone: SiTypescript,
              cor: "text-blue-600",
            },
            { nome: "React", icone: SiReact, cor: "text-blue-400" },
            { nome: "Node.js", icone: SiNodedotjs, cor: "text-green-600" },
            { nome: "Express", icone: SiExpress, cor: "text-gray-800" },
            { nome: "PostgreSQL", icone: SiPostgresql, cor: "text-blue-800" },
            { nome: "MongoDB", icone: SiMongodb, cor: "text-green-500" },
            { nome: "Supabase", icone: SiSupabase, cor: "text-green-400" },
            { nome: "Next.js", icone: SiNextdotjs, cor: "text-white" },
            { nome: "Java", icone: FaJava, cor: "text-red-600" },
            { nome: "Git", icone: SiGit, cor: "text-orange-600" },
            { nome: "GitHub", icone: SiGithub, cor: "text-gray-400" },
          ].map((tecnologia) => {
            const IconeComponente = tecnologia.icone;

            return (
              <div
                key={tecnologia.nome}
                className="group p-4 md:p-6 lg:p-8 borda-neon rounded-lg hover:sombra-neon-primaria transition-all duration-300 hover:scale-105 bg-cartao flex flex-col items-center gap-3 md:gap-4 lg:gap-6 min-h-[120px] md:min-h-[160px] lg:min-h-[200px]"
              >
                <IconeComponente
                  className={`text-2xl md:text-4xl lg:text-6xl transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse ${tecnologia.cor} group-hover:texto-neon`}
                />
                <span className="font-orbitron font-bold group-hover:texto-neon transition-colors duration-300 text-center text-sm md:text-lg lg:text-xl">
                  {tecnologia.nome}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
