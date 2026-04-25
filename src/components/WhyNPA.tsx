import React from "react";

const WhyNPA: React.FC = () => {
  return (
    <section id="por-que-npa" className="py-section-padding bg-surface-container-low">
      <div className="container-max mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              className="w-full shadow-2xl" 
              alt="Architectural construction site showing steel frame structure and precise engineering work" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvAWgHyCoCoq0BLZxuvfFqFiQVLkOCdeZRLOGGNoQAXaYFbtXQRnx_l6FxifiEDyma53gE3g9S8KX3jwTfzM3Ffz3c6tM_OjWhheVVzjV4_uqBUqIXryWzNPYvJ0VPVqnTKbkvsIiZuIyhqazvukF790-YscpU4iREKnGecIEP0tKEeKjUXWfKjTTMUMVfVFDGOsPGAFihkuRZmYgBAbuMs9iTIrjZ0FTUVOeaz-Oj1gQd7qfqA41pKDUWRnPzImXD9E2oD3zH6UF6"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label-caps text-label-caps text-secondary uppercase">Diferencial NPA</span>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary mt-4 mb-6 leading-tight">Muito além da instalação: Somos especialistas em construção civil</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Diferente de instaladores comuns, entendemos a integridade estrutural do seu imóvel. Nossa equipe de engenharia civil garante que a instalação solar respeite a arquitetura e a segurança do seu patrimônio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md font-bold">Respeito à estética arquitetônica</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md font-bold">Garantia estrutural de engenharia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNPA;
