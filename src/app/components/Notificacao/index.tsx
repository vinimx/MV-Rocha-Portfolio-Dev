import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface NotificacaoProps {
  tipo: "sucesso" | "erro";
  mensagem: string;
  visivel: boolean;
  onFechar: () => void;
}

const Notificacao = ({
  tipo,
  mensagem,
  visivel,
  onFechar,
}: NotificacaoProps) => {
  useEffect(() => {
    if (visivel) {
      const timer = setTimeout(() => {
        onFechar();
      }, 5000); // Auto fechar em 5 segundos

      return () => clearTimeout(timer);
    }
  }, [visivel, onFechar]);

  if (!visivel) return null;

  return (
    <div className="fixed mt-40 top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div
        className={`
          flex items-center gap-3 p-4 rounded-lg border max-w-md
          ${
            tipo === "sucesso"
              ? "bg-green-900/90 border-green-400 text-green-100"
              : "bg-red-900/90 border-red-400 text-red-100"
          }
          backdrop-blur-sm shadow-lg
        `}
      >
        {tipo === "sucesso" ? (
          <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
        ) : (
          <XCircle className="text-red-400 flex-shrink-0" size={20} />
        )}

        <p className="font-orbitron text-sm flex-1">{mensagem}</p>

        <button
          onClick={onFechar}
          className="text-current hover:opacity-70 transition-opacity"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Notificacao;
