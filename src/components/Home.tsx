import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface HomeProps {
  onExplore: (section: string) => void;
}

export default function Home({ onExplore }: HomeProps) {
  const [reflection, setReflection] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('/api/reflection')
      .then(res => res.json())
      .then(data => setReflection(data.reflection))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-24 pb-20 bg-mercy-dark">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/pV3tnMRp/img-banner.png" 
            alt="Jesus Misericordioso" 
            className="w-full h-full object-cover opacity-60 brightness-110 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mercy-dark via-[#1a1111]/20 to-mercy-dark"></div>
          <div className="absolute top-0 w-full h-full opacity-25" style={{ background: 'radial-gradient(circle at center, #c5a05933 0%, transparent 70%)' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-4 mb-2 opacity-50"
          >
            <div className="w-px h-24 bg-gradient-to-t from-red-600/60 to-transparent blur-sm rotate-12"></div>
            <div className="w-px h-24 bg-gradient-to-t from-blue-400/60 to-transparent blur-sm -rotate-12"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-light italic tracking-tighter text-white leading-tight"
          >
            Jesus, <br />
            <span className="text-mercy-gray">eu confio em Vós</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#c5a059] text-xs md:text-sm uppercase tracking-[0.5em] font-medium max-w-2xl mx-auto"
          >
            A Essência da Misericórdia Divina
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
          >
            <button 
              onClick={() => onExplore('oracoes')}
              className="px-10 py-3 bg-mercy-gold text-black text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all hover:scale-105"
            >
              Iniciar Orações
            </button>
            <button 
              onClick={() => onExplore('devocao')}
              className="px-10 py-3 border border-mercy-gold/50 text-mercy-gold text-[11px] uppercase tracking-[0.2em] hover:bg-mercy-gold/10 transition-all"
            >
              Conhecer Devoção
            </button>
          </motion.div>
        </div>
      </section>

      {/* Daily Reflection */}
      <AnimatePresence>
        {reflection && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="bg-[#0d0d0d] p-12 md:p-20 border border-mercy-gold/20 text-center space-y-8 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-mercy-gold/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mercy-gold block opacity-60">Reflexão do Dia</span>
               <p className="text-xl md:text-3xl font-serif text-gray-200 leading-relaxed italic">
                 "{reflection}"
               </p>
               <div className="flex items-center justify-center gap-3">
                 <div className="w-1 h-1 rounded-full bg-mercy-gold/30"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-mercy-gold/50"></div>
                 <div className="w-1 h-1 rounded-full bg-mercy-gold/30"></div>
               </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-px bg-mercy-gold/10 border border-mercy-gold/10 overflow-hidden">
        <motion.div 
          className="md:col-span-8 bg-mercy-dark p-12 md:p-20 flex flex-col justify-between group"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-mercy-gold font-bold mb-6 block opacity-60">Legado e Missão</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight italic">A História de Santa <br /> Faustina Kowalska</h2>
            <p className="text-gray-400 text-sm leading-loose max-w-xl font-sans mb-12">
              Conheça a vida da "Secretária da Misericórdia". Através de seu Diário, o mundo conheceu as revelações de Jesus sobre Sua bondade infinita e como elas mudaram a história da Igreja.
            </p>
          </div>
          <button 
            onClick={() => onExplore('historia')}
            className="text-[10px] uppercase tracking-[0.3em] text-mercy-gold hover:text-white transition-colors flex items-center gap-3"
          >
            Ver Detalhes do Legado <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="md:col-span-4 flex flex-col divide-y divide-mercy-gold/10">
          <motion.div 
            className="bg-[#0d0d0d] p-10 flex-1 flex flex-col justify-center border-l border-mercy-gold/10"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-mercy-gold mb-4 font-bold italic">O Terço</h3>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed font-sans">Aprenda a rezar o Terço da Misericórdia, o refúgio das almas.</p>
            <button 
              onClick={() => onExplore('oracoes')}
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-mercy-gold transition-colors text-left"
            >
              Rezar agora
            </button>
          </motion.div>

          <motion.div 
            className="bg-mercy-dark p-10 flex-1 flex flex-col justify-center border-l border-mercy-gold/10"
          >
             <h3 className="text-xs uppercase tracking-[0.2em] text-mercy-gold mb-4 font-bold italic">Imagens</h3>
             <p className="text-gray-400 text-xs mb-6 leading-relaxed font-sans">A beleza da fé capturada em imagens e vídeos sagrados.</p>
             <button 
              onClick={() => onExplore('galeria')}
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-mercy-gold transition-colors text-left"
            >
              Explorar Galeria
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-32 border-t border-mercy-gold/5 bg-gradient-to-b from-mercy-dark to-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <div className="w-16 h-px mx-auto bg-mercy-gold opacity-20"></div>
          <blockquote className="text-4xl md:text-6xl font-serif italic text-white leading-tight tracking-tight">
            "Derramarei um mar de graças sobre as almas que se aproximarem da fonte da Minha misericórdia."
          </blockquote>
          <cite className="block text-[10px] uppercase tracking-[0.4em] font-bold text-mercy-gold opacity-60">
            — Palavras de Jesus
          </cite>
        </div>
      </section>
    </div>
  );
}
