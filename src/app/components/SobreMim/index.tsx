import FotoPerfil from "../FotoPerfil";

export default function SobreMim() {
  return (
    <section
      data-section="sobre"
      className="relative py-20 px-6 min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-orbitron texto-neon mb-8 animate-neon-pulse">
                SOBRE MIM
              </h2>

              <div className="space-y-6 text-lg lg:text-2xl font-orbitron leading-relaxed">
                <p className="text-texto-principal">
                  Olá! Sou{" "}
                  <span className="texto-neon-ciano font-bold text-lg lg:text-2xl">
                    Marcos Vinicius Rocha
                  </span>
                  , um desenvolvedor Full Stack focado em criar interfaces
                  modernas e APIs escaláveis.
                </p>

                <p className="text-texto-principal">
                  Especializado em{" "}
                  <span className="texto-neon-ciano font-bold text-lg lg:text-2xl">
                    React
                  </span>
                  ,
                  <span className="texto-neon-ciano font-bold text-lg lg:text-2xl">
                    {" "}
                    JavaScript
                  </span>{" "}
                  e
                  <span className="texto-neon-ciano font-bold text-lg lg:text-2xl">
                    {" "}
                    TypeScript
                  </span>
                  ,
                </p>
                <p className="text-texto-principal">
                  Iniciei recentemente meus estudos em back-end com{" "}
                  <span className="texto-neon-ciano font-bold text-lg lg:text-2xl">
                    Java
                  </span>{" "}
                  visando me tornar um desenvolvedor full-stack.
                </p>

                <p className="text-texto-principal">
                  Estudante de Tecnologia da Informação na UNIVESP.
                </p>
              </div>
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="relative flex items-center justify-center mt-10 pb-16 sm:pb-18 md:pb-20 lg:pb-24">
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
