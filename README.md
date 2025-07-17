# 🌟 MV Rocha Portfolio

Um portfolio moderno e interativo inspirado na estética **Synthwave/Vaporwave**, construído com tecnologias de ponta para demonstrar habilidades em desenvolvimento front-end.

![Portfolio Preview](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC)

## 🚀 Demonstração

🔗 **[Ver Portfolio Online](https://mv-rocha-portfolio-dev-jofi.vercel.app/)**

## 🎨 Inspirações

Este projeto foi inspirado por:

### 🌊 **Estética Synthwave/Vaporwave**

- **Cores neon** vibrantes (Pink, Ciano, Roxo)
- **Gradientes futuristas** que remetem aos anos 80/90
- **Grades perspectivas** estilo Tron/Cyberpunk
- **Partículas flutuantes** e animações suaves
- **Sol vaporwave** com linhas horizontais características

### 🎮 **Referências Visuais**

- Jogos como **Cyberpunk 2077** e **Tron**
- Arte digital **Synthwave** e **Retrowave**
- Interface de **filmes sci-fi** dos anos 80
- Design **Neon** e **Futurista**

### 💡 **Filosofia de Design**

- **Minimalismo** com elementos visuais impactantes
- **Experiência imersiva** através de animações
- **Responsividade** total para todos os dispositivos
- **Performance** otimizada com carregamento inteligente

## 🛠️ Tecnologias Utilizadas

### **Frontend Core**

- **[Next.js 15.3.5](https://nextjs.org/)** - Framework React com SSR/SSG
- **[React 19.0.0](https://reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first

### **Animações & Interações**

- **[Framer Motion 12.23.6](https://www.framer.com/motion/)** - Animações avançadas
- **[Three.js 0.178.0](https://threejs.org/)** - Gráficos 3D WebGL
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones

### **Funcionalidades**

- **[EmailJS](https://www.emailjs.com/)** - Envio de emails sem backend
- **CSS Custom Properties** - Variáveis CSS para temas
- **Intersection Observer API** - Animações on-scroll
- **Responsive Design** - Layout adaptável

### **Desenvolvimento & Build**

- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - Compatibilidade CSS

## 🏗️ Arquitetura do Projeto

```
src/
├── app/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── Apresentacao/     # Seção Hero/Intro
│   │   ├── Background/       # Background Three.js/CSS
│   │   ├── BotoesSociais/    # Links para redes sociais
│   │   ├── Carregando/       # Tela de loading animada
│   │   ├── Contato/          # Formulário de contato
│   │   ├── FotoPerfil/       # Foto de perfil animada
│   │   ├── MenuNav/          # Navegação principal
│   │   ├── Notificacao/      # Sistema de notificações
│   │   ├── Projetos/         # Showcase de projetos
│   │   ├── Rodape/           # Footer do site
│   │   ├── SobreMim/         # Seção sobre
│   │   └── Tecnologias/      # Grid de tecnologias
│   ├── globals.css           # Estilos globais e animações
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── lib/
│   ├── contato-alternativo.ts # WhatsApp integration
│   ├── emailjs.ts            # Configuração EmailJS
│   └── utils.ts              # Utilitários diversos
└── public/
    └── assets/
        └── images/           # Imagens dos projetos
```

## ✨ Funcionalidades Principais

### 🎯 **Interface Interativa**

- ✅ Animações suaves com **Framer Motion**
- ✅ Background **Three.js** com fallback CSS
- ✅ **Intersection Observer** para animações on-scroll
- ✅ **Loading screen** temático synthwave

### 📱 **Responsividade Completa**

- ✅ Design **mobile-first**
- ✅ Breakpoints otimizados
- ✅ Touch-friendly em dispositivos móveis
- ✅ Performance otimizada para todas as telas

### 📧 **Sistema de Contato Avançado**

- ✅ **EmailJS** para envio direto de emails
- ✅ **WhatsApp** integration com deep linking
- ✅ **Fallbacks inteligentes** para dispositivos móveis
- ✅ **Validação robusta** de formulários
- ✅ **Notificações** de sucesso/erro

### 🚀 **Performance & SEO**

- ✅ **Lazy loading** de componentes
- ✅ **Otimização de imagens**
- ✅ **SSR/SSG** com Next.js
- ✅ **Lighthouse Score** otimizado

## 🎨 Paleta de Cores

```css
/* Cores Principais Synthwave */
--primaria: #ff006e      /* Pink Neon */
--secundaria: #8338ec    /* Purple Neon */
--destaque: #00f5ff      /* Cyan Neon */
--fundo: #050505         /* Preto Profundo */
--cartao: #0d0d0d        /* Cinza Escuro */
--texto-principal: #fafafa /* Branco */
```

## 🚀 Instalação & Configuração

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn ou pnpm

### **1. Clonar o Repositório**

```bash
git clone https://github.com/vinimx/MV-Rocha-Portfolio-Dev.git
cd MV-Rocha-Portfolio-Dev
```

### **2. Instalar Dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🎯 Seções do Portfolio

### **🏠 Home/Apresentação**

- Introdução pessoal
- Call-to-action para contato
- Animações de entrada

### **👨‍💻 Sobre Mim**

- História profissional
- Habilidades e experiências
- Foto de perfil animada

### **⚡ Tecnologias**

- Grid de tecnologias dominadas
- Ícones animados
- Categorização por tipo

### **🚀 Projetos**

- Showcase de projetos principais
- Links para demos e repositórios
- Screenshots e descrições

### **📞 Contato**

- Formulário de contato funcional
- Links para redes sociais
- Múltiplas formas de contato

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Marcos Vinícius Rocha**

- 🌐 Portfolio: [mv-rocha-portfolio.vercel.app](https://mv-rocha-portfolio.vercel.app)
- 💼 LinkedIn: [marcos-vinícius-m](https://www.linkedin.com/in/marcos-vin%C3%ADcius-m-75934a110/)
- 📧 Email: marcosvc817@gmail.com
- 💬 WhatsApp: +55 14 99726-4421
- 🐱 GitHub: [@vinimx](https://github.com/vinimx)

## 🙏 Agradecimentos

- **Comunidade React/Next.js** pela documentação excelente
- **Three.js Community** pelos exemplos e tutoriais
- **Synthwave Artists** pela inspiração visual
- **Open Source Community** pelas bibliotecas utilizadas

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

**🚀 Feito por [Marcos Vinícius](https://github.com/vinimx)**

</div>
