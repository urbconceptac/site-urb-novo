import React from 'react';
import { MinimalHeader } from './components/MinimalHeader';
import { MinimalHero } from './components/MinimalHero';
import { MinimalProposal } from './components/MinimalProposal';
import { MinimalScriptsAndPlayer } from './components/MinimalScriptsAndPlayer';
import { MinimalInvestment } from './components/MinimalInvestment';
import { MinimalFooter } from './components/MinimalFooter';

export default function App() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-zinc-100 font-sans antialiased selection:bg-[#e60012] selection:text-white flex flex-col justify-between">
      {/* Minimal Top Header */}
      <MinimalHeader onScrollTo={handleScrollTo} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <MinimalHero
          onGoToScripts={() => handleScrollTo('roteiros')}
          onGoToInvestment={() => handleScrollTo('investimento')}
        />

        {/* Proposal / Scope Section */}
        <MinimalProposal />

        {/* Scripts & Audio Player Section */}
        <MinimalScriptsAndPlayer />

        {/* Commercial Investment & Closing Section */}
        <MinimalInvestment />
      </main>

      {/* Minimal Footer */}
      <MinimalFooter />
    </div>
  );
}
