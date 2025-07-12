import { Github, Linkedin } from "lucide-react";

export default function BotoesSociais() {
  return (
    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-100 transition-all duration-500">
      {/* Botão GitHub */}
      <a
        href="https://github.com/vinimx"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group/btn"
      >
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110 border-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderColor: "var(--primaria)",
            boxShadow: `
                    0 0 10px var(--primaria),
                    inset 0 0 10px rgba(255, 0, 110, 0.1)
                  `,
          }}
        >
          <Github
            size={24}
            style={{ color: "var(--primaria)" }}
            className="transition-all duration-300 group-hover/btn:drop-shadow-[0_0_8px_var(--primaria)]"
          />

          {/* Efeito de brilho no hover */}
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, var(--primaria), transparent)`,
            }}
          ></div>

          {/* Scanner */}
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-40 transition-opacity duration-300"
            style={{
              background: `repeating-linear-gradient(90deg, transparent, transparent 2px, var(--primaria) 2px, var(--primaria) 4px)`,
              opacity: 0.1,
            }}
          ></div>
        </div>
      </a>

      {/* Botão LinkedIn */}
      <a
        href="https://www.linkedin.com/in/marcos-vin%C3%ADcius-m-75934a110/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group/btn"
      >
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110 border-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderColor: "var(--destaque)",
            boxShadow: `
                    0 0 10px var(--destaque),
                    inset 0 0 10px rgba(0, 245, 255, 0.1)
                  `,
          }}
        >
          <Linkedin
            size={24}
            style={{ color: "var(--destaque)" }}
            className="transition-all duration-300 group-hover/btn:drop-shadow-[0_0_8px_var(--destaque)]"
          />

          {/* Efeito de brilho no hover */}
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, var(--destaque), transparent)`,
            }}
          ></div>

          {/* Scanner */}
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-40 transition-opacity duration-300"
            style={{
              background: `repeating-linear-gradient(90deg, transparent, transparent 2px, var(--destaque) 2px, var(--destaque) 4px)`,
              opacity: 0.1,
            }}
          ></div>
        </div>
      </a>
    </div>
  );
}
