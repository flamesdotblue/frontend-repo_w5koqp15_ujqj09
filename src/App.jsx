import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Process />
      <FooterCTA />
    </div>
  );
}

export default App;
