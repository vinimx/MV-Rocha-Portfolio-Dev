import Image from "next/image";
import fotoVinicius from "/public/assets/perfil.png";
import BotoesSociais from "../BotoesSociais";

const FotoPerfil = () => {
  return (
    <div className="relative group foto-perfil-container">
      {/* Container externo com animação float */}
      <div className="relative animate-float">
        {/* Container da imagem com forma circular garantida */}
        <div
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
          style={{
            aspectRatio: "1/1",
          }}
        >
          {/* Máscara circular */}
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{
              borderRadius: "50%",
              clipPath: "circle(50% at center)",
            }}
          >
            <Image
              src={fotoVinicius}
              alt="Foto de perfil de Marcos Vinicius Rocha"
              width={384}
              height={384}
              className="foto-perfil-image rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 w-full h-full"
              priority
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                aspectRatio: "1/1",
              }}
            />

            {/* Efeito Vaporwave - Overlay com gradiente neon */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle at center, var(--primaria) 0%, var(--secundaria) 40%, var(--destaque) 100%)",
                opacity: "0.15",
              }}
            ></div>

            {/* Efeito de glitch horizontal*/}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300">
              <div
                className="absolute inset-0 h-1 top-1/4 animate-pulse"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--destrutivo), transparent)",
                  opacity: "0.3",
                }}
              ></div>
              <div
                className="absolute inset-0 h-1 top-1/2 animate-pulse"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--destaque), transparent)",
                  opacity: "0.3",
                  animationDelay: "0.2s",
                }}
              ></div>
              <div
                className="absolute inset-0 h-1 top-3/4 animate-pulse"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--primaria), transparent)",
                  opacity: "0.3",
                  animationDelay: "0.4s",
                }}
              ></div>
            </div>

            {/* Grid vaporwave com cores do tema */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-0 grade-synthwave"></div>
            </div>

            {/* Efeito de scan lines com cor personalizada */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-500 overflow-hidden">
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: `repeating-linear-gradient(0deg, transparent, transparent 2px, var(--destaque) 2px, var(--destaque) 4px)`,
                  opacity: "0.1",
                }}
              ></div>
            </div>

            {/* Aberração cromática com cores do tema */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 mix-blend-multiply">
              <div
                className="absolute inset-0 rounded-full transform translate-x-1 opacity-30"
                style={{ backgroundColor: "var(--primaria)" }}
              ></div>
              <div
                className="absolute inset-0 rounded-full transform -translate-x-1 opacity-30"
                style={{ backgroundColor: "var(--destaque)" }}
              ></div>
            </div>

            {/* Efeito brilhante intenso */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-1000">
              <div
                className="absolute inset-0 rounded-full animate-neon-pulse"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 60%, var(--primaria) 80%, transparent 100%)",
                  boxShadow: `
                       0 0 10px var(--primaria),
                       0 0 20px var(--primaria),
                       0 0 30px var(--primaria)
                     `,
                  opacity: "0.4",
                }}
              ></div>
            </div>

            {/* Reflexo holográfico intenso */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "linear-gradient(45deg, transparent, var(--destaque), transparent)",
                  opacity: "0.15",
                }}
              ></div>
            </div>
          </div>

          {/* Partículas flutuantes */}
          <div
            className="absolute -top-2 -right-2 w-3 h-3 rounded-full animate-neon-pulse opacity-40 group-hover:opacity-70 transition-all duration-500"
            style={{
              backgroundColor: "var(--primaria)",
              boxShadow: `
                   0 0 5px var(--primaria),
                   0 0 10px var(--primaria)
                 `,
            }}
          ></div>
          <div
            className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full animate-neon-pulse opacity-40 group-hover:opacity-70 transition-all duration-500"
            style={{
              backgroundColor: "var(--destaque)",
              boxShadow: `
                   0 0 4px var(--destaque),
                   0 0 8px var(--destaque)
                 `,
              animationDelay: "0.3s",
            }}
          ></div>
          <div
            className="absolute top-1/4 -left-3 w-1 h-1 rounded-full animate-neon-pulse opacity-40 group-hover:opacity-70 transition-all duration-500"
            style={{
              backgroundColor: "var(--secundaria)",
              boxShadow: `
                   0 0 3px var(--secundaria),
                   0 0 6px var(--secundaria)
                 `,
              animationDelay: "0.6s",
            }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-3 w-1 h-1 rounded-full animate-neon-pulse opacity-40 group-hover:opacity-70 transition-all duration-500"
            style={{
              backgroundColor: "var(--destrutivo)",
              boxShadow: `
                   0 0 3px var(--destrutivo),
                   0 0 6px var(--destrutivo)
                 `,
              animationDelay: "0.9s",
            }}
          ></div>

          {/* Elementos geométricos com brilho suave */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-all duration-500">
            <div
              className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent animate-float"
              style={{
                borderBottomColor: "var(--primaria)",
                filter: `drop-shadow(0 0 5px var(--primaria)) drop-shadow(0 0 10px var(--primaria))`,
              }}
            ></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-all duration-500">
            <div
              className="w-0 h-0 border-l-6 border-r-6 border-t-10 border-transparent animate-float"
              style={{
                borderTopColor: "var(--destaque)",
                filter: `drop-shadow(0 0 5px var(--destaque)) drop-shadow(0 0 10px var(--destaque))`,
                animationDelay: "0.5s",
              }}
            ></div>
          </div>

          {/* Linhas neon laterais com brilho suave */}
          <div
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-0.5 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to right, var(--primaria), var(--secundaria))`,
              boxShadow: `
                   0 0 3px var(--primaria),
                   0 0 6px var(--primaria)
                 `,
            }}
          ></div>
          <div
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-0.5 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to left, var(--destaque), var(--secundaria))`,
              boxShadow: `
                   0 0 3px var(--destaque),
                   0 0 6px var(--destaque)
                 `,
            }}
          ></div>

          {/* Anel externo com brilho suave */}
          <div
            className="absolute -inset-4 border-4 border-transparent rounded-full animate-spin-slow opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              background: `linear-gradient(45deg, var(--primaria), var(--destaque), var(--secundaria), var(--primaria))`,
              filter: `blur(1px) drop-shadow(0 0 10px var(--primaria))`,
            }}
          ></div>

          {/* Anel médio com pulso suave */}
          <div
            className="absolute -inset-2 border-2 rounded-full animate-neon-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              borderColor: "var(--destaque)",
              boxShadow: `
                   0 0 5px var(--destaque),
                   0 0 10px var(--destaque)
                 `,
            }}
          ></div>

          {/* Botões de redes sociais*/}

          <BotoesSociais />
        </div>
      </div>
    </div>
  );
};

export default FotoPerfil;
