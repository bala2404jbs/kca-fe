'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../../../lib/api';
import LeadForm from '../../../components/LeadForm';

const benefitsPoints = [
  "To incorporate a skill of solving arithmetic sums of any value at par with a calculator.",
  "Enriching right brain function",
  "Enabling analytical & logical skills",
  "Enlightening listening & learning skills",
  "Enhancing concentration & confidence"
];

export default function AbacusProgramPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('program-abacus').then(setMedia).catch(console.error);
  }, []);
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Child using an abacus"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://lh3.googleusercontent.com/aida-public/AB6AXuBp1d97hDWidUcyUy2OjJqLCjmfIqgLG-_wyLoDO39GxXIwZVXk8K7U09KskWBoabMZMK6Lq8ZKUdoyEP7dSMAUdOcyyK9Q5tPqtcOsjrxIYxQcPkpzHJ0qhmwthqOLUz6tq6LXmnPHCMqrGSQB-AocQxuCeiQkvRwBwkjjvKTzWe_Ok4Ncn0wg2HEhFE0uY4h6t5GflPySKUTHsq0p4eFKUpKiZNVPHjfadMjCLpeDXBtwMPw4YWiv-PBdJ3jAxlieI49dggZqw0dP"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                auto_awesome
              </span>
              Most Popular Program
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-primary mb-6 tracking-tight">
              Abacus
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed">
              Abacus is a tool invented by the Salamis around 500 BC and improved by Japanese with an aid of which one can develop the skills of solving Arithmetic sums quickly at par with the Computer / Calculator.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg">
                Enroll Now
              </button>
              <div className="flex items-center text-on-primary gap-6 ml-4">
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Legibility
                  </span>
                  <span className="font-bold">11 Years onwards</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Duration
                  </span>
                  <span className="font-bold">9 Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(media?.galleryImages?.length > 0 ? media.galleryImages : ["/images/programs/abacus/1.jpg", "/images/programs/abacus/2.jpg", "/images/programs/abacus/3.png", "/images/programs/abacus/4.png"]).slice(0, 4).map((img: string, idx: number) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                  <Image src={getMediaUrl(img)} alt={`Abacus Activity ${idx + 1}`} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(media?.youtubeVideoIds?.length > 0 ? media.youtubeVideoIds : ["HqHNWbPKMCs", "v65z2M1-R_I"]).slice(0, 2).map((vid: string, idx: number) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vid}`}
                    title={`Abacus Video ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Introduction
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <blockquote className="border-l-4 border-primary pl-4 italic bg-surface-container-low p-4 rounded-r-lg">
                &quot;Numbers are the highest degree of knowledge. It is knowledge itself.&quot; <br/><span className="text-sm font-semibold mt-2 block">- Plato</span>
              </blockquote>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Program Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <h3 className="font-bold text-lg text-on-surface">Duration</h3>
                </div>
                <p className="text-on-surface-variant">Total 9 levels / each level 3months / 2hours class every week.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">person</span>
                  <h3 className="font-bold text-lg text-on-surface">Legibility</h3>
                </div>
                <p className="text-on-surface-variant">11Years onwards .</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                 <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">domain</span>
                  <h3 className="font-bold text-lg text-on-surface">Scope</h3>
                </div>
                <p className="text-on-surface-variant">Schools (For students), Teacher training institutes and B Ed colleges.(For teacher training)</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Benefits
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-20 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
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
            <LeadForm programName="Abacus" />
          </div>
        </aside>
      </div>
    </main>
  );
}
