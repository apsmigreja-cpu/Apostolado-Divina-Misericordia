import React from 'react';
import { motion } from 'motion/react';
import { useFirestoreCollection } from '../hooks/useFirestore';
import { GalleryItem } from '../types';
import { PlayCircle, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const { data: items, loading } = useFirestoreCollection<GalleryItem>('gallery');

  const placeholderItems: GalleryItem[] = [
    { title: 'O Image Original', type: 'image', url: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=800' },
    { title: 'Santuário de Cracóvia', type: 'image', url: 'https://images.unsplash.com/photo-1548625361-125020a2fdf5?auto=format&fit=crop&q=80&w=800' },
    { title: 'A Eucaristia', type: 'image', url: 'https://images.unsplash.com/photo-1515591256611-913a13193a32?auto=format&fit=crop&q=80&w=800' },
    { title: 'Terço em Família', type: 'image', url: 'https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&q=80&w=800' },
  ];

  const displayItems = items.length > 0 ? items : placeholderItems;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16 bg-mercy-dark">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-mercy-gold/20 pb-12">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-tight">Espelho do <span className="text-mercy-gold">Invisível</span></h1>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">
            Fragmentos da fé capturados no tempo
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-6 py-2 border border-mercy-gold text-[#c5a059] text-[10px] uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-colors cursor-pointer">Coleção Completa</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mercy-gold/10 border border-mercy-gold/10 overflow-hidden">
        {displayItems.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-[30rem] bg-[#0d0d0d] overflow-hidden"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80"></div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {item.type === 'video' ? <PlayCircle className="w-4 h-4 text-mercy-gold" /> : <Maximize2 className="w-4 h-4 text-mercy-gold" />}
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-mercy-gold">Ver Obra</span>
              </div>
              <h3 className="text-2xl font-serif italic">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
