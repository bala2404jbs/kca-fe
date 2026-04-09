'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../../../lib/api';
import LeadForm from '../../../components/LeadForm';

const benefitsPoints = [
  "Beautiful handwriting.",
  "Better written expression.",
  "Blathers inferiority over poor hand writing.",
  "Blazes a trail of confidence."
];

export default function HandwritingProgramPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('program-handwriting').then(setMedia).catch(console.error);
  }, []);
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Handwriting concept"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://lh3.googleusercontent.com/aida-public/AB6AXuA9gdCQoswRaoGhXCH-8dyWdt4ouYa1AxSpt8f0PSw09ecj0FIDNCVGdxRUvmpMyTE1u0QZPpgw_ZBu3RM9_xqcBPF7UwAo3LY3oG3RGNLxpjMDfzgu9fXJmBE3DLgonlXeCkepXFASQAS6Py-0PtwnJVVE520daBJoswR-8L6qhQSzED1yXQz0mrZ7QMZ8TIdJunGzrdMZYIQbwovI7Xw-isqRX-j6d55mHYZNb6DWv3ZoQnNYgXwksCEvW27a3Rimz-vkSE0RicCb"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                draw
              </span>
              Creative Skills
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-primary mb-6 tracking-tight">
              Handwriting
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed">
              It is a professionally designed course for English / Tamil writing, dealing with detailing the techniques like Pen Position, Hand Pressure, Sitting Posture, Speed and Visualization etc involved in obtaining good Hand Writing.
              <br/><br/>
              Also adequate exercises to develop fine motor skills, Cognitive skills, Perceptual skills and linguistic skills are the learning environment of this scientifically designed program.
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
                  <span className="font-bold">8 Years onwards</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Duration
                  </span>
                  <span className="font-bold">Unique (3 months)</span>
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
              {(media?.galleryImages?.length > 0 ? media.galleryImages : ["/images/programs/handwriting/1.jpg", "/images/programs/handwriting/2.jpg", "/images/programs/handwriting/3.png", "/images/programs/handwriting/4.png"]).slice(0, 4).map((img: string, idx: number) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                  <Image src={getMediaUrl(img)} alt={`Handwriting Activity ${idx + 1}`} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(media?.youtubeVideoIds?.length > 0 ? media.youtubeVideoIds : ["IZnVh5z2uDs", "rKEYOTW7KYU"]).slice(0, 2).map((vid: string, idx: number) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${vid}`}
                    title={`Handwriting Video ${idx + 1}`}
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
                &quot;I saw that bad handwriting should be regarded as a sign of an imperfect education&quot; <br/><span className="text-sm font-semibold mt-2 block">- Mahatma Gandhi</span>
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
                <p className="text-on-surface-variant">Unique level / 3months / 2hours class every week.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">person</span>
                  <h3 className="font-bold text-lg text-on-surface">Legibility</h3>
                </div>
                <p className="text-on-surface-variant">8Years onwards</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                 <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">domain</span>
                  <h3 className="font-bold text-lg text-on-surface">Scope</h3>
                </div>
                <p className="text-on-surface-variant">Schools (For students), Teacher training institutes and B Ed colleges. (For teacher training)</p>
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
            <LeadForm programName="Handwriting" />
          </div>
        </aside>
      </div>
    </main>
  );
}
