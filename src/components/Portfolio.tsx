import React, { useState } from "react";
import img1 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.14.06.jpeg";
import img2 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.32.jpeg";
import img3 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33 (1).jpeg";
import img4 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33 (2).jpeg";
import img5 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33.jpeg";
import img6 from "../assets/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.19.29.jpeg";
import { X, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { trackWA, WA_BASE } from "../theme";

const projects = [
  {
    id: 1,
    type: "residencial",
    location: "Residência Alto Padrão",
    economy: "Economia: 95%",
    power: "1.200 kWh/mês",
    img: img1,
  },
  {
    id: 2,
    type: "comercial",
    location: "Galpão Logístico",
    economy: "Economia: 92%",
    power: "4.500 kWh/mês",
    img: img2,
  },
  {
    id: 3,
    type: "residencial",
    location: "Condomínio Fechado",
    economy: "Economia: 96%",
    power: "900 kWh/mês",
    img: img3,
  },
  {
    id: 4,
    type: "infraestrutura",
    location: "Sítio / Fazenda",
    economy: "Economia: 100%",
    power: "Off-Grid",
    img: img4,
  },
  {
    id: 5,
    type: "comercial",
    location: "Clínica Médica",
    economy: "Economia: 93%",
    power: "3.200 kWh/mês",
    img: img5,
  },
  {
    id: 6,
    type: "residencial",
    location: "Casa Duplex",
    economy: "Economia: 95%",
    power: "1.000 kWh/mês",
    img: img6,
  },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects =
    filter === "todos" ? projects : projects.filter((p) => p.type === filter);

  const openLightbox = (index: number) => {
    setCurrentImgIndex(index);
    setLightboxOpen(true);
  };

  const nextImg = () =>
    setCurrentImgIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1,
    );
  const prevImg = () =>
    setCurrentImgIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1,
    );

  return (
    <section
      id="portfolio"
      className="py-10 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">
            Projetos realizados
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
            Portfólio de Instalações
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Instalações reais realizadas pela NPA — cada projeto com engenharia
            própria, homologação e economia comprovada.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["todos", "residencial", "comercial", "infraestrutura"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all border ${
                filter === f
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-on-surface-variant border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-300">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
                <div
                  className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-3 py-1 rounded-md text-white ${
                    project.type === "residencial"
                      ? "bg-secondary text-primary"
                      : project.type === "comercial"
                        ? "bg-primary"
                        : "bg-gray-600"
                  }`}
                >
                  {project.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[15px] text-primary mb-1 leading-tight">
                  {project.location}
                </h3>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-3">
                  <span className="text-sm font-bold text-green-600">
                    {project.economy}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 border border-gray-300 px-2 py-1 rounded-md">
                    {project.power}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-on-surface-variant mb-4">
            Quer seu projeto na nossa galeria? Solicite um orçamento gratuito.
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent(
              "Olá, NPA! Gostaria de ter um projeto solar como os do portfólio.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("portfolio_cta")}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 animate-in fade-in">
          <div className="relative max-w-4xl w-full mx-4 flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={filteredProjects[currentImgIndex].img}
              alt="Projeto"
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <strong className="text-white text-lg block">
                {filteredProjects[currentImgIndex].location}
              </strong>
              <span className="text-white/60 text-sm mt-1 block">
                {filteredProjects[currentImgIndex].power} •{" "}
                {filteredProjects[currentImgIndex].economy}
              </span>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={prevImg}
                className="flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft size={18} /> Anterior
              </button>
              <span className="text-white/40 text-sm">
                {currentImgIndex + 1} / {filteredProjects.length}
              </span>
              <button
                onClick={nextImg}
                className="flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
              >
                Próximo <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
