import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, ShieldAlert } from 'lucide-react';

interface HourPageProps {
  onNavigate: (section: string) => void;
}

export default function HourPage({ onNavigate }: HourPageProps) {
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
          <span className="text-xs uppercase tracking-[0.4em] text-mercy-gold font-bold">O Instante Sagrado</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">A Hora da Misericórdia</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light font-sans">
            "Às três horas da tarde, suplica a Minha misericórdia, especialmente para os pecadores..."
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Visual Content Block */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-[3/4] bg-[#0d0d0d] border border-mercy-gold/20 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <Clock className="w-12 h-12 text-mercy-gold animate-pulse" />
              <h2 className="text-3xl font-serif italic text-white">15:00 Horas</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                Hora da morte redentora de Jesus na cruz, abrindo a fonte de todas as graças para o universo.
              </p>
            </div>
            
            <div className="pt-8 border-t border-mercy-gold/20 space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Três Condições de Jesus</span>
              <p className="text-xs text-gray-400 font-sans">Implorar a misericórdia, meditar a Paixão e recorrer ao valor dos Seus méritos.</p>
            </div>
            <div className="absolute inset-0 border border-mercy-gold/10 m-2 pointer-events-none"></div>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-500 font-sans">
            A Hora de Graça para o Mundo Inteiro
          </p>
        </div>

        {/* Text Editorial Area */}
        <div className="lg:col-span-7 space-y-10">
          <div className="border-l-4 border-mercy-gold pl-6 py-2">
            <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed font-light">
              "Nessa hora nada negarei à alma que Me pedir em nome da Minha Paixão..."
            </p>
            <span className="block mt-4 text-xs uppercase tracking-widest text-mercy-gold/60">— Diário, 1320</span>
          </div>

          <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-sm">
            <p className="text-gray-300 font-medium text-base">
              O Mistério das Quinze Horas:
            </p>
            
            <p>
              A hora em que Jesus expira na cruz é a "Hora da Grande Misericórdia". Ele pediu que, diariamente, dediquemos um instante a ela. Se o tempo permitir, devemos rezar a Via-Sacra; se não, ao menos entrar por um breve momento na capela para adorar Seu Coração repleto de misericórdia no Santíssimo Sacramento. Se mesmo isso for impossível, Jesus pede que façamos uma breve oração de onde estivermos, mergulhando por um segundo em Sua Paixão.
            </p>

            <div className="bg-[#0b0b0b] p-8 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-mercy-gold" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-white">Práticas recomendadas por Jesus:</h4>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs text-gray-400">
                <li>Meditar, ainda que brevemente, sobre a Solidão e a Paixão do Senhor no calvário.</li>
                <li>Recorrer aos méritos de Sua dolorosa paixão e rezar pelas almas que mais necessitam.</li>
                <li>Fazer jaculatórias especiais de confiança (ex: "Ó Sangue e Água que brotastes do Coração de Jesus...").</li>
              </ul>
            </div>

            <p className="pt-4">
              [Espaço reservado para inserção de novos conteúdos, alarmes de orações diárias, devocionários e meditações sobre as Estações da Cruz conduzidas pelo nosso Apostolado].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
