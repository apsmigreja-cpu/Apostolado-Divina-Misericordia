import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

interface ImagePageProps {
  onNavigate: (section: string) => void;
}

export default function ImagePage({ onNavigate }: ImagePageProps) {
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
          <span className="text-xs uppercase tracking-[0.4em] text-mercy-gold font-bold">Canais da Graça</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">A Imagem</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light font-sans">
            "Pinta uma imagem de acordo com o modelo que estás vendo..."
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Visual Content Block */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-[3/4] bg-[#0d0d0d] border border-mercy-gold/20 p-4 relative overflow-hidden">
            <img
              src="https://i.postimg.cc/pV3tnMRp/img-banner.png"
              alt="Jesus Misericordioso"
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 border border-mercy-gold/10 m-2"></div>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-500">
            Representação da visão de Santa Faustina Kowalska
          </p>
        </div>

        {/* Text Editorial Area */}
        <div className="lg:col-span-7 space-y-10">
          <div className="border-l-4 border-mercy-gold pl-6 py-2">
            <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed font-light">
              "Prometo que a alma que venerar esta Imagem não se perderá. Prometo também, já aqui na terra, a vitória sobre os inimigos, e especialmente na hora da morte."
            </p>
            <span className="block mt-4 text-xs uppercase tracking-widest text-mercy-gold/60">— Diário, 47-48</span>
          </div>

          <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-sm">
            {/* The user indicated they will feed content later, so we show elegant structured placeholders */}
            <p className="text-gray-300 font-medium text-base">
              A origem e o significado teológico da Divina Imagem:
            </p>
            
            <p>
              Pintada pela primeira vez em Vilnius (1934) sob a direta orientação de Santa Faustina, a imagem resume visualmente o Evangelho e o mistério pascal da Redenção. Os traços de Jesus ressuscitado trazem a marca da crucifixão, e de Seu peito transpassado brotam dois grandes raios.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#0b0b0b] p-6 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-mercy-gold text-xs uppercase tracking-wider font-bold">
                  <Sparkles className="w-4 h-4 text-mercy-gold" /> O Raio Vermelho
                </div>
                <p className="text-xs text-gray-500">
                  Representa o Sangue, que é a vida das almas e o memorial do sacrifício eucarístico de Cristo.
                </p>
              </div>

              <div className="bg-[#0b0b0b] p-6 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-mercy-gold text-xs uppercase tracking-wider font-bold">
                  <Heart className="w-4 h-4 text-mercy-gold" /> O Raio Pálido
                </div>
                <p className="text-xs text-gray-500">
                  Significa a Água, que justifica as almas através do Batismo e as purifica constantemente no Sacramento da Reconciliação.
                </p>
              </div>
            </div>

            <p className="pt-4">
              [Espaço reservado para inserção de novos conteúdos e informações detalhadas sobre a veneração da Sagrada Imagem no Apostolado].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
