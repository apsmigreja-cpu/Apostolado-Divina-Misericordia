import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Quote } from 'lucide-react';

interface RosaryPageProps {
  onNavigate: (section: string) => void;
}

export default function RosaryPage({ onNavigate }: RosaryPageProps) {
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
          <span className="text-xs uppercase tracking-[0.4em] text-mercy-gold font-bold">Oração e Clamor</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">O Terço</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light font-sans">
            "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro..."
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Visual Content Block */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-[3/4] bg-[#0d0d0d] border border-mercy-gold/20 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <BookOpen className="w-12 h-12 text-mercy-gold" />
              <h2 className="text-3xl font-serif italic text-white">Terço da Misericórdia</h2>
              <p className="text-xs text-gray-400 leading-relaxed font-sans uppercase tracking-wider">
                Oração ensinada pelo próprio Jesus a Santa Faustina em Vilnius em setembro de 13-14, 1935.
              </p>
            </div>
            
            <div className="pt-8 border-t border-mercy-gold/20 space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">Promessa à Hora da Morte</span>
              <p className="text-xs text-gray-500 italic">"Defenderia como Minha própria glória cada alma que rezar este Terço..."</p>
            </div>
            <div className="absolute inset-0 border border-mercy-gold/10 m-2 pointer-events-none"></div>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-500 font-sans">
            Uma Oração Sacerdotal e Trinitária
          </p>
        </div>

        {/* Text Editorial Area */}
        <div className="lg:col-span-7 space-y-10">
          <div className="border-l-4 border-mercy-gold pl-6 py-2">
            <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed font-light">
              "Pela recitação deste Terço, agrada-Me dar tudo o que Me pedirem, se for de acordo com a Minha vontade."
            </p>
            <span className="block mt-4 text-xs uppercase tracking-widest text-mercy-gold/60">— Diário, 1541</span>
          </div>

          <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-sm">
            <p className="text-gray-300 font-medium text-base">
              A Essência do Terço da Divina Misericórdia:
            </p>
            
            <p>
              O Terço ou Chaplet da Divina Misericórdia é uma oração dita nas contas do rosário comum. Através dela, oferecemos a Deus Pai o Corpo e o Sangue, a Alma e a Divindade de Seu diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro. Ao nos unirmos ao sacrifício cruento do Calvário, clamamos pela misericórdia prometida por Jesus.
            </p>

            <div className="bg-[#0b0b0b] p-8 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <Quote className="w-5 h-5 text-mercy-gold" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-white">Como Rezar o Terço (Estrutura):</h4>
              </div>
              <ol className="list-decimal pl-5 space-y-3 text-xs text-gray-400">
                <li>Começar com: <span className="text-gray-300 font-medium">Pai Nosso, Ave Maria e o Credo</span>.</li>
                <li>Nas contas grandes (do Pai Nosso), reza-se:
                  <span className="block text-mercy-gold italic mt-1 bg-white/5 p-2 rounded">
                    "Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro."
                  </span>
                </li>
                <li>Nas contas pequenas (da Ave Maria), reza-se:
                  <span className="block text-mercy-gold italic mt-1 bg-white/5 p-2 rounded">
                    "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro."
                  </span>
                </li>
                <li>No final (três vezes):
                  <span className="block text-mercy-gold italic mt-1 bg-white/5 p-2 rounded">
                    "Deus Santo, Deus Forte, Deus Imortal, tende misericórdia de nós e do mundo inteiro."
                  </span>
                </li>
              </ol>
            </div>

            <p className="pt-4">
              [Espaço reservado para inserção de novos conteúdos, áudios, vídeos e informações detalhadas sobre as orações coletivas do Terço do nosso Apostolado].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
