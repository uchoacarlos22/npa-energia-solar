import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Promocoes } from './components/Promocoes';
import { GarantiasPagamento } from './components/GarantiasPagamento';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhyNPA from './components/WhyNPA';
import Savings from './components/Savings';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => (
  <div className="bg-background text-on-surface font-body-md overflow-x-hidden w-full relative">
    <Header />
    <main>
      <Hero />
      <Portfolio />
      <Promocoes />
      <GarantiasPagamento />
      <Benefits />
      <HowItWorks />
      <WhyNPA />
      <Savings />
      <FAQ />
      <LeadForm />
      <FinalCTA />
    </main>
    <Footer />
    <ChatWidget />
  </div>
);

export default App;
