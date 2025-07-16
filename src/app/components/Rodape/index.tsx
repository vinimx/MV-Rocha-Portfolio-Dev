import { ArrowUp } from "lucide-react";

const Rodape = () => {
  const anoAtual = new Date().getFullYear();
  const scrollParaTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black/90 to-transparent border-t border-[#ff006e]/30">
      <div className="absolute inset-0 grade-synthwave opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Seção Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>
              © {anoAtual} Marcos Vinícius Rocha. Todos os direitos reservados
            </span>
          </div>

          {/* Tecnologias Usadas */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Construído com:</span>
            <span className="px-2 py-1 bg-cartao rounded text-[#00f5ff]">
              Next.js
            </span>
            <span className="px-2 py-1 bg-cartao rounded text-[#00f5ff]">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-cartao rounded text-[#00f5ff]">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-cartao rounded text-[#00f5ff]">
              Three.js
            </span>
            <span className="px-2 py-1 bg-cartao rounded text-[#00f5ff]">
              Framer Motion
            </span>
          </div>

          {/* Botão Voltar ao Topo */}
          <button
            onClick={scrollParaTopo}
            className="group flex items-center gap-2 px-4 py-2 bg-cartao borda-neon rounded-lg hover:sombra-neon-destaque transition-all duration-300 hover:scale-105"
          >
            <ArrowUp
              size={16}
              className="text-[#00f5ff] group-hover:animate-bounce"
            />
            <span className="text-sm font-orbitron text-gray-300 group-hover:texto-neon-ciano transition-colors duration-300">
              TOPO
            </span>
          </button>
        </div>

        {/* Efeito de Partículas Decorativas */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-[#00f5ff] rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Linha Final com Gradiente */}
      <div className="h-1 bg-gradient-to-r from-[#8338ec] via-[#ff006e] to-[#00f5ff]"></div>
    </footer>
  );
};

export default Rodape;
