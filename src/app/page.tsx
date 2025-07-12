"use client";

import { useRef, useEffect } from "react";
import MenuNav from "./components/MenuNav";
import Background from "./components/Background";
import Apresentacao from "./components/Apresentacao";
import SobreMim from "./components/SobreMim";
import Tecnologias from "./components/Tecnologias";

export default function Home() {
  const refPrincipal = useRef<HTMLElement>(null);

  useEffect(() => {
    // Adiciona animação de "fade-in" às seções ao rolar a página
    const opcoesObservador = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const section = entrada.target as HTMLElement;
          console.log("Seção visível:", section.dataset.section);
          entrada.target.classList.add("animate-fade-in-up");
        }
      });
    }, opcoesObservador);

    // Aguarda um pouco para garantir que o DOM esteja pronto
    setTimeout(() => {
      const secoes = document.querySelectorAll("section[data-section]");
      console.log("Seções encontradas:", secoes.length);
      secoes.forEach((secao) => {
        const section = secao as HTMLElement;
        console.log("Observando seção:", section.dataset.section);
        observador.observe(secao);
      });
    }, 100);

    return () => observador.disconnect();
  }, []);

  return (
    <>
      <main ref={refPrincipal} className="relative">
        {/* Three.js Background */}
        <div className="fixed inset-0 z-0">
          <Background />
        </div>
        <MenuNav />
        <Apresentacao />
        <SobreMim />
        <Tecnologias />
      </main>
    </>
  );
}
