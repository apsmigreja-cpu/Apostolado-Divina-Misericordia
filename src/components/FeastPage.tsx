import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Award } from 'lucide-react';

interface FeastPageProps {
  onNavigate: (section: string) => void;
}

export default function FeastPage({ onNavigate }: FeastPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16 bg-mercy-dark">
      {/* Navigation & Header */}
      <div className="space-y-6">
        <button
          onClick={() => onNavigate('devocao')}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para A Devoção
        </button>

        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-mercy-gold font-bold">O Cume da Graça</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">A Festa</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light font-sans">
            "Desejo que a Festa da Misericórdia seja refúgio e abrigo para todas as almas..."
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Visual Content Block */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-[3/4] bg-[#0d0d0d] border border-mercy-gold/20 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <Calendar className="w-12 h-12 text-mercy-gold" />
              <h2 className="text-3xl font-serif italic text-white">Segundo Domingo de Páscoa</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                Instituído universalmente na Igreja para celebrar o amor incomensurável de Deus.
              </p>
            </div>
            
            <div className="pt-8 border-t border-mercy-gold/20 space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Promessa de Cristo</span>
              <p className="text-xs text-gray-400">"Quem se aproximar da fonte de vida neste dia receberá o perdão total..."</p>
            </div>
            <div className="absolute inset-0 border border-mercy-gold/10 m-2 pointer-events-none"></div>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-500 font-sans">
            A Maior de Todas as Promessas Reveladas
          </p>
        </div>

        {/* Text Editorial Area */}
        <div className="lg:col-span-7 space-y-10">
          <div className="border-l-4 border-mercy-gold pl-6 py-2">
            <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed font-light">
              "Neste dia, estão abertas as entranhas da Minha misericórdia. Derramo todo um mar de graças sobre as almas que se aproximam da fonte da Minha misericórdia."
            </p>
            <span className="block mt-4 text-xs uppercase tracking-widest text-mercy-gold/60">— Diário, 699</span>
          </div>

          <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-sm">
            <p className="text-gray-300 font-medium text-base">
              A Grande Graça da Festa da Misericórdia:
            </p>
            
            <p>
              Em nenhuma outra devoção encontramos uma promessa tão singular quanto a desta solenidade. Jesus prometeu que a alma que se confessar e receber a Sagrada Comunhão na Festa da Misericórdia obterá a remissão total de suas culpas e das penas devidas pelo pecado. Esta graça é descrita teologicamente como algo análogo a uma renovação espiritual profunda, como uma graça batismal secundária.
            </p>

            <div className="bg-[#0b0b0b] p-8 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-mercy-gold" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-white">Condições para a Celebração:</h4>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs text-gray-400">
                <li>Confissão sacramental sincera (pode ser feita nos dias anteriores).</li>
                <li>Estar em estado de graça eucarística e comungar dignamente no domingo da Festa.</li>
                <li>Ter uma atitude de total confiança na Divina Misericórdia de Jesus.</li>
                <li>Praticar obras de misericórdia em relação ao próximo através de atos, palavras ou orações.</li>
              </ul>
            </div>

            <p className="pt-4">
              [Espaço reservado para inserção de novos conteúdos, horários de celebrações e informações detalhadas sobre a Festa da Misericórdia no Apostolado].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
