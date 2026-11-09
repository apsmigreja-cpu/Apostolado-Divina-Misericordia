import React from 'react';
import { motion } from 'motion/react';
import { useFirestoreCollection } from '../hooks/useFirestore';
import { Prayer } from '../types';
import { Bell, Heart } from 'lucide-react';

export default function Prayers() {
  const { data: dbPrayers, loading } = useFirestoreCollection<Prayer>('prayers');

  const staticPrayers = [
    {
      title: "Oração da Tarde (15h)",
      category: "Orações Diárias",
      text: "Expirastes, Jesus, mas a fonte da vida brotou para as almas e o mar de misericórdia abriu-se para o mundo inteiro. Ó Fonte de Vida, insondável Misericórdia Divina, envolve o mundo inteiro e derrama-Te sobre nós."
    },
    {
      title: "Terço da Misericórdia",
      category: "Oração Principal",
      text: "Para ser rezado nas contas de um terço comum. No início: Pai Nosso, Ave Maria e Creio. Nas contas do Pai Nosso: 'Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho...'. Nas contas das Ave-Marias: 'Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro'."
    }
  ];

  const allPrayers = [...staticPrayers, ...dbPrayers];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24 bg-mercy-dark">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-tight">A Voz da <span className="text-mercy-gold">Alma</span></h1>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">
          Diálogo entre a alma e a Misericórdia
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-mercy-gold/10 border border-mercy-gold/10">
        {allPrayers.map((prayer, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group bg-[#0d0d0d] p-10 hover:bg-mercy-gold/[0.03] transition-all flex flex-col border border-transparent hover:border-mercy-gold/20"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-mercy-gold/60 border-l border-mercy-gold pl-3">
                {prayer.category || 'Geral'}
              </span>
              <Bell className="w-3 h-3 text-mercy-gold/20 group-hover:text-mercy-gold transition-colors" />
            </div>
            <h3 className="text-2xl font-serif mb-6 text-white italic group-hover:text-mercy-gold transition-colors">{prayer.title}</h3>
            <div className="text-gray-400 text-xs leading-relaxed font-sans flex-grow italic opacity-80 group-hover:opacity-100 transition-opacity">
              "{prayer.text}"
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-black border-y border-mercy-gold/20 py-20 text-center max-w-4xl mx-auto px-8">
        <h2 className="text-xs uppercase tracking-[0.5em] mb-10 text-mercy-gold font-bold">A Importância da Oração</h2>
        <p className="text-gray-300 text-lg leading-loose font-serif italic max-w-2xl mx-auto">
          "Pela oração a alma se arma para toda espécie de luta. Em qualquer estado em que se encontre a alma, deve rezar."
        </p>
        <span className="block mt-8 text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">— Santa Faustina • Diário 146</span>
      </div>
    </div>
  );
}
