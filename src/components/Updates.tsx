import React from 'react';
import { motion } from 'motion/react';
import { useFirestoreCollection } from '../hooks/useFirestore';
import { Post } from '../types';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { orderBy } from 'firebase/firestore';

export default function Updates() {
  const { data: posts, loading } = useFirestoreCollection<Post>('posts', orderBy('date', 'desc'));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24 bg-mercy-dark">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-tight">Crônicas da <span className="text-mercy-gold">Misericórdia</span></h1>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">
          Atualizações, testemunhos e avisos da herança santa
        </p>
      </div>

      <div className="grid gap-px bg-mercy-gold/10 border border-mercy-gold/10 overflow-hidden">
        {loading ? (
          <div className="text-center py-32 text-mercy-gold text-[10px] uppercase tracking-[0.5em] font-bold animate-pulse">Carregando crônicas...</div>
        ) : posts.length === 0 ? (
          <div className="bg-[#0d0d0d] py-32 px-10 text-center">
             <p className="text-gray-500 font-serif text-3xl italic opacity-30">"Em silêncio, a misericórdia se renova."</p>
             <div className="w-12 h-px bg-mercy-gold/20 mx-auto mt-8"></div>
          </div>
        ) : (
          posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-0 items-stretch bg-mercy-dark hover:bg-[#0d0d0d] transition-colors divide-x divide-mercy-gold/10"
            >
              {post.imageUrl && (
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden grayscale contrast-125 opacity-40 group-hover:opacity-80 transition-all duration-700">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              )}
              <div className="flex-grow p-12 md:p-20 space-y-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-mercy-gold/50">
                  <div className="flex items-center gap-3"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString()}</div>
                  <div className="flex items-center gap-3"><User className="w-3 h-3" /> {post.author || 'Misericórdia'}</div>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-white group-hover:text-mercy-gold transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-sm leading-loose font-sans font-light opacity-80 line-clamp-3">
                  {post.content}
                </p>
                <div className="pt-4">
                  <button className="text-[10px] uppercase tracking-[0.4em] text-mercy-gold border-b border-mercy-gold/30 pb-2 hover:text-white hover:border-white transition-all">
                    Explorar Crônica
                  </button>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </div>
  );
}
