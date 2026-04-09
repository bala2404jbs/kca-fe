'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../../../lib/api';
import LeadForm from '../../../components/LeadForm';

export default function CommunicativeEnglishPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('program-english').then(setMedia).catch(console.error);
  }, []);

  const benefitsPoints = [
    "Improved speaking confidence",
    "Enhanced vocabulary and grammar",
    "Better presentation skills",
    "Effective interpersonal communication",
    "Accent neutralization and clarity",
  ];

  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Communicative English"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                language
              </span>
              Language Skills
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-primary mb-6 tracking-tight">
              Communicative English
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed">
              Our Communicative English program is designed to empower individuals with the confidence and skills needed to communicate effectively in English. We focus on practical usage, correct pronunciation, and building the vocabulary necessary for both personal and professional success.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {media?.galleryImages?.length > 0 ? (
                media.galleryImages.map((img: string, idx: number) => (
                  <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                    <Image src={getMediaUrl(img)} alt={`Activity ${idx + 1}`} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">No gallery images available.</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {media?.youtubeVideoIds?.length > 0 ? (
                media.youtubeVideoIds.map((vid: string, idx: number) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${vid}`}
                      title={`Video ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">No videos available.</p>
              )}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">Benefits</h2>
             <div className="grid grid-cols-1 gap-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
               <ul className="space-y-4">
                 {benefitsPoints.map((point, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                       {i + 1}
                     </span>
                     <span className="text-on-surface-variant leading-relaxed pt-1">
                       {point}
                     </span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28">
            <LeadForm programName="Communicative English" />
          </div>
        </aside>
      </div>
    </main>
  );
}
