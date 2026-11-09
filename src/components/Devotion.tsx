import React from 'react';
import { motion } from 'motion/react';
import { Book, Heart, Sunrise, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface DevotionProps {
  onNavigate?: (section: string) => void;
}

export default function Devotion({ onNavigate }: DevotionProps) {
  const points = [
    {
      title: "A Imagem",
      icon: Heart,
      target: "imagem",
      text: "Jesus pediu que se pintasse uma imagem conforme o modelo que Santa Faustina via, com a inscrição 'Jesus, eu confio em Vós'. Os dois raios representam o Sangue e a Água."
    },
    {
      title: "A Festa",
      icon: Sunrise,
      target: "festa",
      text: "O Segundo Domingo da Páscoa é a Festa da Misericórdia. Jesus prometeu o perdão total das culpas e das penas para quem se aproximar da fonte da vida neste dia."
    },
    {
      title: "O Terço",
      icon: Book,
      target: "terco",
      text: "Uma oração de intercessão que aplaca a ira de Deus e obtém a misericórdia para o mundo inteiro, especialmente na hora da morte."
    },
    {
      title: "A Hora (15h)",
      icon: ShieldCheck,
      target: "hora",
      text: "A Hora da Grande Misericórdia. Jesus pediu que às três horas da tarde nos imergíssemos em sua Paixão, pois nessa hora a misericórdia abriu-se de par em par."
    }
  ];

  const handleNavigate = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24 bg-mercy-dark">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-8xl font-serif leading-tight italic text-white">Os Canais da <br/><span className="text-mercy-gold">Misericórdia</span></h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed font-sans uppercase tracking-widest text-xs">
          Jesus revelou a Santa Faustina Kowalska formas principais de praticar e venerar a Sua Divina Misericórdia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-mercy-gold/10 border border-mercy-gold/10 overflow-hidden">
        {points.map((p, idx) => (
          <motion.button 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => handleNavigate(p.target)}
            className="bg-[#0d0d0d] p-12 flex gap-8 items-start hover:bg-mercy-gold/[0.03] transition-all cursor-pointer text-left w-full group relative focus:outline-none"
          >
            <div className="w-12 h-12 border border-mercy-gold/30 flex items-center justify-center shrink-0 rotate-45 group-hover:border-mercy-gold/60 transition-colors">
              <p.icon className="w-5 h-5 text-mercy-gold -rotate-45" />
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif text-white italic group-hover:text-mercy-gold transition-colors">{p.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-mercy-gold/40 group-hover:text-mercy-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm font-sans">{p.text}</p>
              <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-medium text-mercy-gold/60 border-b border-mercy-gold/20 pb-0.5 group-hover:text-mercy-gold group-hover:border-mercy-gold transition-all">
                {p.target === 'imagem' ? 'Acessar A Imagem' : p.target === 'festa' ? 'Acessar A Festa' : p.target === 'terco' ? 'Acessar O Terço' : 'Acessar A Hora'}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="bg-black border border-mercy-gold/20 p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white">A Liturgia da Misericórdia</h2>
          <p className="text-gray-400 leading-loose text-lg font-light font-serif italic">
            O Papa João Paulo II instituiu oficialmente o Domingo da Divina Misericórdia para toda a Igreja. A liturgia deste dia recorda a aparição de Jesus aos apóstolos, trazendo a paz definitiva.
          </p>
          <div className="pt-8 border-t border-white/5 uppercase tracking-[0.4em] text-[10px] font-bold text-mercy-gold opacity-50">
            Liturgia • Tradição • Espiritualidade
          </div>
        </div>
      </div>
    </div>
  );
}
