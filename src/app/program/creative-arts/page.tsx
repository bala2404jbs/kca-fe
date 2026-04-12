'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../../../lib/api';
import LeadForm from '../../../components/LeadForm';

const benefitsPoints = [
  "Nurture imagination and independent creative thinking",
  "Build confidence through self-expression and artistic mastery",
  "Develop fine motor skills and hand-eye coordination",
  "Improve concentration, patience, and attention to detail",
  "Stress relief and emotional well-being through art-based learning",
  "Discover unique talents and budding artistic potential"
];

const courseHighlights = [
  "Weekly creative workshops",
  "Theme-based art sessions",
  "Portfolio development for students",
  "Participation in art competitions"
];

export default function CreativeArtsProgramPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('program-creative-arts').then(setMedia).catch(console.error);
  }, []);

  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center shadow-premium">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Creative Arts Program"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2070"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000929]/95 via-[#000929]/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                palette
              </span>
              Creative Arts
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-primary mb-6 tracking-tight leading-tight">
              Creative Arts <br/><span className="text-secondary italic">Program</span>
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed font-light">
              Creativity is the foundation of innovation and self-expression. At Kids Career Academy, our Creative Arts Program is designed to nurture imagination, build confidence, and develop artistic skills in children through engaging and inspiring activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                Enroll Today
              </button>
              <div className="flex items-center text-on-primary gap-6 ml-4">
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-[10px] uppercase tracking-widest">Ages</span>
                  <span className="font-bold">5 - 15 Years</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-[10px] uppercase tracking-widest">Level</span>
                  <span className="font-bold">Beginner Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          
          <div>
            <h2 className="text-3xl font-headline font-bold mb-8 text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">star</span>
              </span>
              Why Choose Our Creative Arts Program?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We provide a structured yet flexible learning environment where children can explore their creativity and discover their unique talents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Drawing & Sketching", desc: "Master techniques in sketching and coloring." },
                { label: "Painting Explorer", desc: "Watercolor, Acrylic and Craft Art mastery." },
                { label: "Hand-on DIY", desc: "Engaging craft and creative projects." },
                { label: "Digital Art Intro", desc: "Introduction to digital design basics." },
                { label: "Mindfulness", desc: "Develop imagination, creativity and focus." },
                { label: "Motor Skills", desc: "Improve fine motor skills & artistic confidence." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:shadow-premium transition-all">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <div className="space-y-1">
                     <h4 className="font-bold text-on-surface">{item.label}</h4>
                     <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-headline font-bold mb-8 text-on-surface flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">psychology</span>
              </span>
              What Your Child Will Gain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Enhanced creative thinking and imagination",
                "Improved concentration and patience",
                "Strong visual and artistic skills",
                "Better self-expression and confidence",
                "Stress relief through art-based learning"
              ].map((gain, i) => (
                <div key={i} className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl">
                  <span className="w-10 h-10 rounded-full bg-white text-tertiary flex items-center justify-center font-bold text-sm shadow-sm">{i+1}</span>
                  <span className="font-medium text-on-surface-variant">{gain}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6 text-on-surface">Target Audience</h2>
              <div className="bg-primary/5 p-6 rounded-2xl space-y-4">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  <p className="font-medium">Children aged 5 to 15 years</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">brush</span>
                  <p className="font-medium">Beginners and budding artists</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <p className="font-medium">No prior experience required</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6 text-on-surface">Course Highlights</h2>
              <div className="space-y-3">
                {courseHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white border border-outline-variant/20 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-sm font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="bg-secondary/5 p-10 rounded-3xl border border-secondary/10">
            <h2 className="text-3xl font-headline font-bold mb-8 text-on-surface text-center">Our Teaching Approach</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "architecture", text: "Guided Sessions" },
                { icon: "celebration", text: "Interactive Classes" },
                { icon: "person", text: "Personalized Attention" },
                { icon: "palette", text: "Regular Projects" }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3">
                   <div className="mx-auto w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                      <span className="material-symbols-outlined">{item.icon}</span>
                   </div>
                   <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wide">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <LeadForm programName="Creative Arts" />
            <div className="p-8 bg-surface-container-highest rounded-2xl text-on-surface">
              <h4 className="font-bold mb-4">Limited Seats!</h4>
              <p className="text-sm mb-6 leading-relaxed opacity-80">We keep our batches small to ensure personalized attention for every artist. Enroll now to secure your spot.</p>
              <div className="flex items-center gap-2 text-primary font-bold">
                 <span className="material-symbols-outlined">person_pin</span>
                 <span className="text-xs tracking-widest uppercase">Expert Trainers</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
