import React from 'react';
import { motion } from 'motion/react';
import { User, Shield, Star, Award } from 'lucide-react';

export default function History() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 divide-y divide-mercy-gold/10 bg-mercy-dark">
      {/* St. Faustina Section */}
      <section className="py-24 flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2 space-y-10">
          <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-mercy-gold font-bold italic opacity-60">
            <User className="w-3 h-3" /> A Secretária da Misericórdia
          </div>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight italic text-white">Santa Faustina <br/> Kowalska</h1>
          <p className="text-lg text-gray-400 font-light leading-loose font-sans">
            Helena Kowalska entrou para a Congregação em 1925. De vida simples e oculta, tornou-se o instrumento escolhido por Jesus para proclamar ao mundo a Sua Misericórdia infinita através do seu Diário espiritual.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5">
            <div>
              <span className="block text-mercy-gold text-[10px] uppercase tracking-widest font-bold mb-2">Nascimento</span>
              <p className="text-gray-400 text-xs uppercase tracking-widest">1905 • Polônia</p>
            </div>
            <div>
              <span className="block text-mercy-gold text-[10px] uppercase tracking-widest font-bold mb-2">Canonização</span>
              <p className="text-gray-400 text-xs uppercase tracking-widest">2000 • por JPII</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] bg-[#0d0d0d] border border-mercy-gold/20 p-4 relative overflow-hidden">
            <img 
              src="https://i.postimg.cc/qBw3kQrT/santa-faustina-2.png" 
              alt="Santa Faustina" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-mercy-gold/10 m-2"></div>
          </div>
        </div>
      </section>

      {/* JPII Section */}
      <section className="py-24 flex flex-col md:flex-row-reverse gap-20 items-center">
        <div className="w-full md:w-1/2 space-y-10">
          <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-mercy-gold font-bold italic opacity-60">
             <Shield className="w-3 h-3" /> O Papa da Misericórdia
          </div>
          <h2 className="text-5xl md:text-8xl font-serif leading-tight italic text-white">São João <br/> Paulo II</h2>
          <p className="text-lg text-gray-400 font-light leading-loose font-sans">
            O "Papa Polonês" teve um papel fundamental na difusão desta devoção. Ele não apenas canonizou Santa Faustina, mas também instituiu o Domingo da Divina Misericórdia para toda a Igreja.
          </p>
          <div className="p-10 bg-[#0d0d0d] border-l-2 border-mercy-gold italic text-gray-300 text-sm font-serif leading-relaxed">
            "Sinto que a mensagem da Divina Misericórdia é a tarefa mais importante da minha vida perante Deus e perante os homens."
            <span className="block mt-4 text-[10px] uppercase tracking-widest text-mercy-gold">— São João Paulo II</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] bg-[#0d0d0d] border border-mercy-gold/20 p-4 relative overflow-hidden">
            <img 
              src="https://i.postimg.cc/LXbFTrfK/joao-paulo-II-2.png" 
              alt="São João Paulo II" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-mercy-gold/10 m-2"></div>
            <div className="absolute inset-x-0 bottom-10 text-center text-mercy-gold/50">
              //<span className="block text-[10px] uppercase tracking-[1em] font-bold font-sans">Totus Tuus</span>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 space-y-16">
        <h2 className="text-xs uppercase tracking-[0.5em] text-center text-mercy-gold font-bold">Cronologia Sagrada</h2>
        <div className="grid md:grid-cols-4 gap-px bg-mercy-gold/10 border border-mercy-gold/10 overflow-hidden">
          {[
            { year: '1931', event: 'Revelação da Imagem em Plock.' },
            { year: '1934', event: 'Pintura da primeira imagem.' },
            { year: '1938', event: 'O Retorno à Casa do Pai.' },
            { year: '2000', event: 'Canonização Universal.' },
          ].map((item, i) => (
            <div key={i} className="p-12 bg-mercy-dark text-center space-y-6 hover:bg-[#0d0d0d] transition-colors">
              <span className="text-3xl font-serif text-mercy-gold italic">{item.year}</span>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed font-sans">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
