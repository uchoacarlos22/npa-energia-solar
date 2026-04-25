import React, { useState } from "react";
import { trackWA, WA_BASE } from "../theme";
import logo from "../assets/images/npa_logo_sf.png";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Benefícios", id: "beneficios" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Promoções", id: "promocoes" },
    { label: "Processo", id: "como-funciona" },
    { label: "Diferencial", id: "por-que-npa" },
  ];

  const waMsg = encodeURIComponent(
    "Olá, NPA! 👋 Vi o site de energia solar e gostaria de solicitar uma simulação gratuita. Podem me atender?",
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white top-0 sticky z-50 border-b border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16.5 px-8 w-full">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          {/* Alternativa caso queira o texto: <div className="text-2xl font-black text-blue-950 tracking-tighter">NPA Solar</div> */}
          <img src={logo} alt="NPA Solar" className="h-24 w-24 pt-2" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 mt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-headline-lg uppercase text-sm font-bold text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => scrollTo("contato")}
            className="font-headline-md uppercase text-sm font-bold px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all select-none"
          >
            Orçamento
          </button>
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("header")}
            className="bg-secondary-container text-white font-headline-md uppercase text-sm font-bold px-6 py-3 hover:bg-secondary-fixed transition-all shadow-lg select-none flex items-center justify-center"
          >
            Simulação Grátis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-headline-lg tracking-widest uppercase text-sm font-bold text-on-primary-fixed-variant hover:text-secondary-fixed-dim text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={() => scrollTo("contato")}
                className="text-center font-headline-md tracking-widest uppercase text-sm font-bold px-6 py-4 border border-primary text-primary"
              >
                Orçamento
              </button>
              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA("header_mobile")}
                className="text-center bg-secondary-container text-on-secondary-fixed font-headline-md tracking-widest uppercase text-sm font-bold px-6 py-4 shadow-lg"
              >
                Simulação Grátis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
