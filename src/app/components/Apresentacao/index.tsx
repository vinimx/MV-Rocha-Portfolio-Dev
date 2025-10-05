"use client";

import { useRef, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

export default function Apresentacao() {
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const subtituloRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      if (tituloRef.current) {
        tituloRef.current.style.opacity = "1";
        tituloRef.current.style.transform = "translateY(0)";
      }
      if (subtituloRef.current) {
        subtituloRef.current.style.opacity = "1";
        subtituloRef.current.style.transform = "translateY(0)";
      }
    }, 500);

    return () => clearTimeout(temporizador);
  }, []);

  const navegarParaSecao = (secaoId: string) => {
    const elemento = document.querySelector(`[data-section="${secaoId}"]`);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <main
      data-section="home"
      className="relative mt-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      <section
        data-section="home"
        className="flex-1 flex flex-col items-center justify-center relative z-10 w-full"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1
            ref={tituloRef}
            className="font-orbitron font-bold mb-4 transform translate-y-10 transition-all duration-1000 opacity-0"
            style={{ lineHeight: "1.2" }}
          >
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl texto-glitch texto-neon animate-neon-pulse relative"
              style={{ animationDelay: "1s" }}
            >
              MARCOS VINICIUS ROCHA
            </span>
          </h1>

          <p
            ref={subtituloRef}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-orbitron font-bold text-texto-principal mt-6 sm:mt-8 md:mt-10 opacity-0 transform translate-y-10 transition-all duration-1000"
          >
            DESENVOLVEDOR FULL STACK
          </p>

          <p
            className="text-lg sm:text-xl md:text-2xl font-orbitron texto-neon-ciano mb-10 mt-4 sm:mt-5 md:mt-6 animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            &quot;Codando o futuro com um toque retrô&quot;
          </p>
        </div>
        {/* Container dos botões */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 mt-4 sm:mt-6 md:mt-8">
          <button
            onClick={() => navegarParaSecao("projetos")}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 botao-cyber font-orbitron font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 group transition-all duration-300"
          >
            <span>Ver Projetos</span>
            <IoEyeSharp className="text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => navegarParaSecao("contato")}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-transparent border-2 border-destaque text-destaque font-orbitron font-bold text-sm sm:text-base md:text-lg hover:bg-destaque hover:text-black transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
          >
            <span>Contato</span>
            <MdOutlineEmail className="text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </button>
        </div>
      </section>
    </main>
  );
}
