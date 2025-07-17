"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface CarregandoProps {
  onComplete: () => void;
}

const Carregando = ({ onComplete }: CarregandoProps) => {
  const [progresso, setProgresso] = useState(0);
  const [etapaAtual, setEtapaAtual] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const etapas = useMemo(
    () => [
      "Carregando componentes...",
      "Ativando efeitos neon...",
      "Sincronizando synthwave...",
      "Quase pronto...",
    ],
    []
  );

  useEffect(() => {
    let incremento = 0;
    const timer = setInterval(() => {
      setProgresso((prev) => {
        // Incremento determinístico mais lento para durar mais tempo
        incremento += 1;
        const novoProgresso = prev + (6 + (incremento % 6) * 1);

        // Atualizar etapa baseada no progresso
        const etapaIndex = Math.floor((novoProgresso / 100) * etapas.length);
        if (etapaIndex < etapas.length) {
          setEtapaAtual(etapas[etapaIndex]);
        }

        if (novoProgresso >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 1000);
          return 100;
        }
        return novoProgresso;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete, etapas]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background com grade synthwave */}
          <div className="absolute inset-0 grade-synthwave opacity-20"></div>

          {/* Efeito de fundo com gradientes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff006e]/10 via-transparent to-[#00f5ff]/10"></div>

          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => {
              // Posições fixas baseadas no índice para evitar hydration error
              const posicoes = [
                { left: 10, top: 20 },
                { left: 85, top: 15 },
                { left: 25, top: 80 },
                { left: 70, top: 60 },
                { left: 45, top: 30 },
                { left: 15, top: 70 },
                { left: 90, top: 45 },
                { left: 55, top: 85 },
                { left: 35, top: 10 },
                { left: 75, top: 25 },
                { left: 5, top: 55 },
                { left: 95, top: 75 },
                { left: 50, top: 50 },
                { left: 20, top: 40 },
                { left: 80, top: 90 },
              ];

              const posicao = posicoes[i] || { left: 50, top: 50 };

              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00f5ff] rounded-full"
                  style={{
                    left: `${posicao.left}%`,
                    top: `${posicao.top}%`,
                  }}
                  animate={{
                    y: [-20, -120],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    delay: i * 0.3,
                    duration: 3 + (i % 4) * 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>

          {/* Container principal */}
          <div className="relative z-10 text-center max-w-md mx-auto px-8">
            {/* Nome */}
            <motion.h1
              className="font-orbitron font-bold text-2xl md:text-3xl texto-neon mb-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              MV ROCHA
            </motion.h1>

            <motion.p
              className="font-orbitron text-sm md:text-base texto-neon-ciano mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              DESENVOLVEDOR FRONT-END
            </motion.p>

            {/* Barra de progresso */}
            <motion.div
              className="mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="relative">
                {/* Fundo da barra */}
                <div className="w-full h-1 bg-[#333] rounded-full overflow-hidden border border-[#ff006e]/30">
                  {/* Progresso */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#00f5ff] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progresso / 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Percentual */}
                <div className="flex justify-between items-center mt-2">
                  <span className="font-orbitron text-xs text-gray-400">
                    {etapaAtual}
                  </span>
                  <span className="font-orbitron text-xs texto-neon">
                    {Math.round(progresso)}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Texto de carregamento com efeito de digitação */}
            <motion.div
              className="font-orbitron text-xs text-gray-500 tracking-widest"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CARREGANDO EXPERIÊNCIA VAPORWAVE...
              </motion.span>
            </motion.div>
          </div>

          {/* Linha decorativa inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Carregando;
