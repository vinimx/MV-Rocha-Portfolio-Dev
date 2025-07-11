"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const FundoThree = () => {
  const refMontagem = useRef<HTMLDivElement>(null);
  const refQuadro = useRef<number>(0);

  useEffect(() => {
    if (!refMontagem.current) return;

    const mountElement = refMontagem.current;

    // Configuração da Cena
    const cena = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderizador = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setClearColor(0x000000, 0);
    refMontagem.current.appendChild(renderizador.domElement);

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
      particulas.children.forEach((particula, index) => {
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
      if (mountElement && renderizador.domElement) {
        mountElement.removeChild(renderizador.domElement);
      }
      renderizador.dispose();
    };
  }, []);

  return (
    <div
      ref={refMontagem}
      className="absolute inset-0"
      style={{ zIndex: -1 }}
    />
  );
};

export default FundoThree;
