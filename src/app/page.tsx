"use client";

import { useRef, useEffect, useState } from "react";
import MenuNav from "./components/MenuNav";
import Background from "./components/Background";
import Apresentacao from "./components/Apresentacao";
import SobreMim from "./components/SobreMim";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";
import Carregando from "./components/Carregando";

export default function Home() {
  const refPrincipal = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Só configura o observer quando não está carregando
    if (isLoading) return;

    // Adiciona animação de "fade-in" às seções ao rolar a página
    const opcoesObservador = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("animate-fade-in-up");
        }
      });
    }, opcoesObservador);

    // Aguarda um pouco para garantir que o DOM esteja pronto
    setTimeout(() => {
      const secoes = document.querySelectorAll("section[data-section]");
      secoes.forEach((secao) => {
        observador.observe(secao);
      });
    }, 100);

    return () => observador.disconnect();
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Componente de Carregamento */}
      {isLoading && <Carregando onComplete={handleLoadingComplete} />}

      {/* Conteúdo principal só aparece após carregamento */}
      {!isLoading && (
        <main ref={refPrincipal} className="relative">
          {/* Three.js Background */}
          <div className="fixed inset-0 z-0">
            <Background />
          </div>
          <MenuNav />
          <Apresentacao />
          <SobreMim />
          <Tecnologias />
          <Projetos />
          <Contato />
          <Rodape />
        </main>
      )}
    </>
  );
}
