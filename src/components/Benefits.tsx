import React from "react";

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-section-padding bg-surface-container-low">
      <div className="container-max mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-on-primary-container/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Economia Imediata</h3>
            <p className="text-on-surface-variant">Redução drástica na conta de luz desde o primeiro mês de ativação.</p>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-on-primary-container/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">real_estate_agent</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Valorização</h3>
            <p className="text-on-surface-variant">Imóveis com energia solar são ativos mais valiosos, chegando a 10% de valorização.</p>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-on-primary-container/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Sustentabilidade</h3>
            <p className="text-on-surface-variant">Energia 100% limpa e renovável, alinhada com as melhores práticas ESG.</p>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-on-primary-container/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">construction</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Baixa Manutenção</h3>
            <p className="text-on-surface-variant">Sistemas de alta confiabilidade com durabilidade superior a 25 anos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
