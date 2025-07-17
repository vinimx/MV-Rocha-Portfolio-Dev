"use client";

import { useEffect, useRef, useState, useMemo } from "react";

// Função para verificar WebGL uma única vez com cache
const checkWebGLSupport = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const hasWebGL = !!(gl && gl instanceof WebGLRenderingContext);

    // Limpar o canvas imediatamente
    canvas.remove();
    return hasWebGL;
  } catch {
    return false;
  }
};

// Componente de fallback CSS que replica o visual do Three.js
const CSSBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
    {/* Grade synthwave animada */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 0, 110, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 110, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        transform: "perspective(500px) rotateX(60deg) translateY(200px)",
        animation: "gridMove 15s linear infinite",
      }}
    />

    {/* Sol vaporwave */}
    <div
      className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
      style={{
        width: "120px",
        height: "120px",
        background:
          "radial-gradient(circle, #ffbe0b 0%, #ff006e 70%, transparent 100%)",
        borderRadius: "50%",
        opacity: 0.8,
        filter: "blur(1px)",
        animation: "float 6s ease-in-out infinite",
      }}
    />

    {/* Linhas horizontais do sol */}
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent"
          style={{
            width: "300px",
            left: "-150px",
            top: `${i * 15}px`,
            opacity: Math.max(0.1, 0.8 - i * 0.06),
            animation: `pulse ${2 + i * 0.1}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>

    {/* Partículas flutuantes */}
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => {
        // Posições determinísticas baseadas no índice
        const seed = i * 0.618034; // Razão áurea para distribuição uniforme
        const width = ((seed * 137.508) % 1) * 4 + 2;
        const height = ((seed * 197.32) % 1) * 4 + 2;
        const color = (seed * 234.567) % 1 > 0.5 ? "#ff006e" : "#00f5ff";
        const left = ((seed * 361.618) % 1) * 100;
        const top = ((seed * 423.108) % 1) * 100;
        const duration = 3 + ((seed * 571.123) % 1) * 4;
        const delay = ((seed * 683.456) % 1) * 2;

        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: width + "px",
              height: height + "px",
              backgroundColor: color,
              left: left + "%",
              top: top + "%",
              opacity: 0.6,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>

    {/* Gradientes atmosféricos */}
    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#ff006e]/5 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#00f5ff]/5 to-transparent" />

    <style jsx>{`
      @keyframes gridMove {
        0% {
          transform: perspective(500px) rotateX(60deg) translateY(200px)
            translateZ(0px);
        }
        100% {
          transform: perspective(500px) rotateX(60deg) translateY(200px)
            translateZ(50px);
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px) scale(1);
        }
        50% {
          transform: translateY(-20px) scale(1.05);
        }
      }

      @keyframes pulse {
        0% {
          opacity: 0.3;
        }
        100% {
          opacity: 0.8;
        }
      }
    `}</style>
  </div>
);

// Componente Three.js original com tratamento de erro
const ThreeJSBackground = () => {
  const refMontagem = useRef<HTMLDivElement>(null);
  const refQuadro = useRef<number>(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!refMontagem.current) return;

    const mountElement = refMontagem.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let renderizador: any; // THREE.WebGLRenderer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cena: any; // THREE.Scene
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let camera: any; // THREE.PerspectiveCamera

    const initThreeJS = async () => {
      try {
        // Importação dinâmica do Three.js
        const THREE = await import("three");

        // Verificar se WebGL está disponível antes de criar o renderizador
        if (!checkWebGLSupport()) {
          console.warn("WebGL não está disponível, usando fallback CSS");
          setHasError(true);
          return;
        }

        // Configuração da Cena
        cena = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        // Configuração do renderizador com tratamento de erro
        try {
          renderizador = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
          });
        } catch (error) {
          console.warn("Erro ao criar WebGL renderer:", error);
          setHasError(true);
          return;
        }

        renderizador.setSize(window.innerWidth, window.innerHeight);
        renderizador.setClearColor(0x000000, 0);
        mountElement.appendChild(renderizador.domElement);

        // Criar grade estilo synthwave
        const criarGrade = () => {
          const grupoGrade = new THREE.Group();

          // Linhas horizontais
          for (let i = -20; i <= 20; i++) {
            const geometria = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(-50, 0, i * 2),
              new THREE.Vector3(50, 0, i * 2),
            ]);
            const material = new THREE.LineBasicMaterial({
              color: 0xff006e,
              transparent: true,
              opacity: 0.3,
            });
            const linha = new THREE.Line(geometria, material);
            grupoGrade.add(linha);
          }

          // Linhas verticais
          for (let i = -25; i <= 25; i++) {
            const geometria = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(i * 2, 0, -40),
              new THREE.Vector3(i * 2, 0, 40),
            ]);
            const material = new THREE.LineBasicMaterial({
              color: 0xff006e,
              transparent: true,
              opacity: 0.3,
            });
            const linha = new THREE.Line(geometria, material);
            grupoGrade.add(linha);
          }

          grupoGrade.rotation.x = -Math.PI / 3;
          grupoGrade.position.y = -5;
          return grupoGrade;
        };

        // Criar partículas flutuantes
        const criarParticulas = () => {
          const grupoParticulas = new THREE.Group();
          const contagemParticulas = 50;

          for (let i = 0; i < contagemParticulas; i++) {
            const geometria = new THREE.SphereGeometry(0.05, 8, 8);
            const material = new THREE.MeshBasicMaterial({
              color: Math.random() > 0.5 ? 0xff006e : 0x00f5ff,
              transparent: true,
              opacity: 0.8,
            });
            const particula = new THREE.Mesh(geometria, material);

            particula.position.set(
              (Math.random() - 0.5) * 100,
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * 100
            );

            grupoParticulas.add(particula);
          }

          return grupoParticulas;
        };

        // Criar sol neon
        const criarSol = () => {
          const grupoSol = new THREE.Group();

          // Disco solar
          const geometriaSol = new THREE.CircleGeometry(8, 32);
          const materialSol = new THREE.MeshBasicMaterial({
            color: 0xffbe0b,
            transparent: true,
            opacity: 0.8,
          });
          const sol = new THREE.Mesh(geometriaSol, materialSol);
          sol.position.set(0, 10, -50);
          grupoSol.add(sol);

          // Raios solares (linhas horizontais)
          for (let i = 0; i < 15; i++) {
            const geometriaRaio = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(-20, 10 - i * 1.5, -50),
              new THREE.Vector3(20, 10 - i * 1.5, -50),
            ]);
            const materialRaio = new THREE.LineBasicMaterial({
              color: 0xff006e,
              transparent: true,
              opacity: 0.6 - i * 0.03,
            });
            const raio = new THREE.Line(geometriaRaio, materialRaio);
            grupoSol.add(raio);
          }

          return grupoSol;
        };

        // Adicionar elementos à cena
        const grade = criarGrade();
        const particulas = criarParticulas();
        const sol = criarSol();

        cena.add(grade);
        cena.add(particulas);
        cena.add(sol);

        // Posicionar câmera
        camera.position.set(0, 10, 20);
        camera.lookAt(0, 0, 0);

        // Variáveis para controle do movimento de retorno
        const tempoInicial = Date.now();
        let faseGrade = 0;
        let faseParticulas = 0;

        // Loop de animação
        const animar = () => {
          refQuadro.current = requestAnimationFrame(animar);
          const tempoAtual = Date.now();
          const tempoDecorrido = (tempoAtual - tempoInicial) * 0.001;

          // Animar movimento da grade com efeito de subida e descida
          faseGrade += 0.005;

          // Movimento vertical principal - as linhas sobem e descem
          grade.position.y = Math.sin(faseGrade) * 20 - 5;

          // Movimento horizontal sutil
          grade.position.x = Math.sin(faseGrade * 0.7) * 3;

          // Movimento Z mais sutil
          grade.position.z = Math.sin(faseGrade * 0.5) * 5;

          // Animar partículas com movimento vertical
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          particulas.children.forEach((particula: any, index: number) => {
            particula.rotation.x += 0.01;
            particula.rotation.y += 0.01;

            // Movimento vertical principal - partículas sobem e descem
            const offset = index * 0.2;
            particula.position.y = Math.sin(faseParticulas + offset) * 25;

            // Movimento horizontal
            particula.position.x = Math.sin(faseParticulas + offset * 0.5) * 15;

            // Movimento Z mais sutil
            particula.position.z = Math.sin(faseParticulas + offset * 0.3) * 10;
          });

          faseParticulas += 0.008;

          // Animar sol com movimento vertical
          sol.rotation.z += 0.001;

          // Movimento vertical do sol - sobe e desce
          sol.position.y = Math.sin(faseGrade * 0.8) * 15 + 10;

          // Movimento horizontal do sol
          sol.position.x = Math.sin(faseGrade * 0.6) * 5;

          // Movimento da câmera mais pronunciado
          camera.position.x = Math.sin(tempoDecorrido * 0.2) * 3;
          camera.position.y = 10 + Math.cos(tempoDecorrido * 0.25) * 2;

          renderizador.render(cena, camera);
        };

        animar();

        // Lidar com redimensionamento da janela
        const lidarComRedimensionamento = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderizador.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", lidarComRedimensionamento);

        // Limpeza
        return () => {
          if (refQuadro.current) {
            cancelAnimationFrame(refQuadro.current);
          }
          window.removeEventListener("resize", lidarComRedimensionamento);
          if (mountElement && renderizador && renderizador.domElement) {
            try {
              mountElement.removeChild(renderizador.domElement);
            } catch {}
          }
          if (renderizador) {
            renderizador.dispose();
          }
        };
      } catch (error) {
        console.warn("Erro ao inicializar Three.js:", error);
        setHasError(true);
      }
    };

    initThreeJS();
  }, []);

  // Se houve erro, renderizar fallback CSS
  if (hasError) {
    return <CSSBackground />;
  }

  return (
    <div
      ref={refMontagem}
      className="absolute inset-0"
      style={{ zIndex: -1 }}
    />
  );
};

// Componente principal com verificação otimizada
const Background = () => {
  // Usar useMemo para verificar WebGL apenas uma vez
  const webGLSupported = useMemo(() => {
    return checkWebGLSupport();
  }, []);

  // Se WebGL não estiver disponível, usar CSS fallback direto
  if (!webGLSupported) {
    return (
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <CSSBackground />
      </div>
    );
  }

  // Usar Three.js se disponível
  return (
    <div className="absolute inset-0" style={{ zIndex: -1 }}>
      <ThreeJSBackground />
    </div>
  );
};

export default Background;
