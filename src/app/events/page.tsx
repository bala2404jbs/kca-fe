'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getPageMedia, getMediaUrl } from '../../lib/api';

export default function EventsPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('events').then(setMedia).catch(console.error);
  }, []);
  return (
    <main className="pt-32 pb-32 bg-slate-50/50">
      <section className="px-8 max-w-4xl mx-auto space-y-16">
        
        {/* Dynamic Recent Events Gallery */}
        {media?.galleryImages?.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Recent Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {media.galleryImages.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square relative rounded-xl overflow-hidden shadow-sm shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                  <Image src={getMediaUrl(img)} alt={`Event ${idx + 1}`} fill unoptimized className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Handwriting Banner Placeholder */}
        <div className="w-full aspect-[16/7] md:aspect-[3/1] bg-slate-900 flex items-center justify-center rounded-xl overflow-hidden shadow-md border border-outline-variant/20 relative group">
           {media?.heroImageUrl ? (
             <Image src={getMediaUrl(media.heroImageUrl)} alt="Events Hero" fill unoptimized className="object-cover" />
           ) : (
             <span className="material-symbols-outlined text-white/10 text-9xl absolute">image</span>
           )}
           <div className="absolute inset-0 flex items-end justify-start p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent z-10">
              <span className="text-yellow-400 font-extrabold text-2xl md:text-4xl drop-shadow-md">Unlock the art of Handwriting</span>
           </div>
        </div>

        {/* COMMUNICATIVE ENGLISH */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wider">Communicative English</h2>
          <div className="space-y-4">
             {/* 3 stacked images */}
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
          </div>
        </div>

        {/* AN IDEAL PARENTING */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wider">An Ideal Parenting</h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-4xl opacity-30">image</span></div>
              <div className="aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-4xl opacity-30">image</span></div>
            </div>
          </div>
        </div>

        {/* FEEP */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wider">FEEP</h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-3xl opacity-30">image</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-4xl opacity-30">image</span></div>
              <div className="aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline"><span className="material-symbols-outlined text-4xl opacity-30">image</span></div>
            </div>
          </div>
        </div>

        {/* SEEP */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-bold uppercase text-slate-800 tracking-wider">SEEP</h2>
          <div className="space-y-4">
             {/* 3 stacked images */}
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
             <div className="w-full h-64 md:h-80 bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl opacity-30">image</span>
             </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
