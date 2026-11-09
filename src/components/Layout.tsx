import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, History, BookOpen, Image as ImageIcon, Bell } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'inicio', label: 'Início', icon: Heart },
  { id: 'devocao', label: 'A Devoção', icon: BookOpen },
  { id: 'oracoes', label: 'Orações', icon: Bell },
  { id: 'historia', label: 'História & Santos', icon: History },
  { id: 'galeria', label: 'Galeria', icon: ImageIcon },
  { id: 'atualizacoes', label: 'Novidades', icon: Bell },
];

export default function Layout({ children, activeSection, setActiveSection }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-mercy-dark text-mercy-gray">
      <header className="fixed top-0 left-0 w-full bg-[#0d0d0d]/90 backdrop-blur-md z-50 border-b border-mercy-gold/30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center -ml-2 sm:ml-0 overflow-hidden shrink-0">
            <div>
              <h1 className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-serif tracking-[0.01em] sm:tracking-[0.03em] md:tracking-[0.05em] text-mercy-gray uppercase leading-none whitespace-nowrap">Apostolado Terço da Divina Misericórdia</h1>
              <p className="text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-mercy-gold font-medium mt-1">Jesus, eu confio em Vós</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-white border-b border-mercy-gold/50 pb-1' : 'text-mercy-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            className="md:hidden text-mercy-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-[#0d0d0d] border-b border-mercy-gold/20 z-40 md:hidden p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded text-[11px] uppercase tracking-widest transition-colors ${
                    activeSection === item.id ? 'bg-mercy-gold/10 text-white' : 'text-mercy-gold hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-black border-t border-mercy-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-lg font-serif uppercase tracking-widest text-mercy-gray">Apostolado Terço da Divina Misericórdia</h2>
            </div>
            <p className="text-gray-500 text-xs tracking-wide leading-relaxed max-w-sm font-sans uppercase">
              Pela Salvação das Almas. Proclamando a bondade infinita de Deus através do tempo e da história.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-mercy-gold">Diretório</h3>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest text-gray-400">
              <li><button onClick={() => setActiveSection('devocao')} className="hover:text-white transition-colors">A Devoção</button></li>
              <li><button onClick={() => setActiveSection('oracoes')} className="hover:text-white transition-colors">Orações e Terço</button></li>
              <li><button onClick={() => setActiveSection('historia')} className="hover:text-white transition-colors">Santa Faustina</button></li>
              <li><button onClick={() => setActiveSection('inicio')} className="hover:text-white transition-colors">Início</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-mercy-gold">Mensagem</h3>
            <p className="text-sm italic text-gray-300 font-serif leading-relaxed">
              "A humanidade não encontrará a paz enquanto não se voltar com confiança para a Minha misericórdia."
              <br />
              <span className="block mt-4 text-[10px] uppercase tracking-widest text-white/50">— Diário de Santa Faustina</span>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-gray-600 gap-4">
          <span>© {new Date().getFullYear()} Apostolado da Misericórdia</span>
          <div className="flex gap-8 text-mercy-gold/60">
            <span>Facebook</span>
            <span>YouTube</span>
            <span>Instagram</span>
          </div>
          <span className="text-mercy-gold font-bold">Jesus, eu confio em Vós</span>
        </div>
      </footer>
    </div>
  );
}
