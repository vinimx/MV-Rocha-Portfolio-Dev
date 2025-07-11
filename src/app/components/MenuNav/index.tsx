"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function MenuNav() {
  const [ehAberto, setEhAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[data-section]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(element.dataset.section || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: "Home", href: "#home" },
    { id: "sobre", name: "Sobre", href: "#sobre" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "projetos", name: "Projetos", href: "#projetos" },
    { id: "contato", name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setEhAberto(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-pink-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-mono texto-neon cursor-pointer hover:animate-pulse"
            onClick={() => scrollToSection("home")}
          >
            MV Rocha
          </div>

          {/* Desktop Menu - visível em telas grandes (md+) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? "texto-neon"
                    : "text-texto-principal hover:texto-neon-ciano"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-500 shadow-pink-500"
                    style={{ boxShadow: "0 0 10px #ff006e" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - visível apenas em telas pequenas (sm e menores) */}
          <button
            className="md:hidden texto-neon-ciano hover:texto-neon transition-colors duration-300"
            onClick={() => setEhAberto(!ehAberto)}
          >
            {ehAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - dropdown apenas para mobile */}
        {ehAberto && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-pink-500/30 mt-2 rounded-lg">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 font-mono transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? "texto-neon bg-pink-500/20"
                      : "text-texto-principal hover:texto-neon-ciano hover:bg-pink-500/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
