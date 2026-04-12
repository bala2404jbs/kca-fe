'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../../../lib/api';
import LeadForm from '../../../components/LeadForm';

const benefitsPoints = [
  "Strong foundation in STEM (Science, Technology, Engineering, Mathematics)",
  "Enhanced problem-solving and critical thinking abilities",
  "Confidence in using and understanding modern technologies",
  "Early exposure to future career opportunities in AI & Robotics",
  "Improved focus, discipline, and teamwork through group projects"
];

const careerPathways = [
  "Robotics Engineer",
  "AI Specialist",
  "Software Developer",
  "Data Scientist",
  "Automation Expert"
];

export default function RoboticsAIProgramPage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('program-robotics-ai').then(setMedia).catch(console.error);
  }, []);

  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center shadow-premium">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Robotics and AI Program"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000d2b]/95 via-[#000d2b]/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                robot
              </span>
              Robotics & AI
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-primary mb-6 tracking-tight leading-tight">
              Future <br/><span className="text-secondary italic">Innovators</span>
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed font-light">
              In today’s fast-evolving digital world, skills in Robotics and Artificial Intelligence (AI) are essential. We empower young minds with cutting-edge knowledge to thrive in tomorrow’s technology-driven future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                Enroll Today
              </button>
              <div className="flex items-center text-on-primary gap-6 ml-4">
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-[10px] uppercase tracking-widest">Ages</span>
                  <span className="font-bold">6 - 16 Years</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-[10px] uppercase tracking-widest">Curriculum</span>
                  <span className="font-bold">Project Based</span>
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
                <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
              </span>
              Why Choose Robotics & AI?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 text-justify">
              Our program is designed to develop creative thinkers, problem solvers, and future tech leaders through hands-on learning and real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Robotics Design", desc: "Learn the fundamentals of robot design and automation." },
                { label: "AI & ML", desc: "Introduction to Artificial Intelligence & Machine Learning." },
                { label: "Coding Logic", desc: "Develop advanced coding and logical thinking skills." },
                { label: "Hardware Lab", desc: "Hands-on with Sensors, Motors & Smart Devices." },
                { label: "Project Build", desc: "Build your own custom Robots & AI Models." },
                { label: "Tech Innovation", desc: "Improve creativity and analytical innovation skills." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:shadow-premium transition-all">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <div className="space-y-1">
                     <h4 className="font-bold text-on-surface">{item.label}</h4>
                     <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
             <h2 className="text-3xl font-headline font-bold mb-8 text-on-surface text-center">What Your Child Will Gain</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefitsPoints.map((gain, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center space-y-4 border border-outline-variant/5">
                    <div className="w-10 h-10 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">{i+1}</div>
                    <p className="text-sm font-medium text-on-surface-variant">{gain}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6 text-on-surface">Eligibility & Audience</h2>
              <ul className="space-y-4">
                 <li className="flex items-center gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                    Students aged 6 to 16 years
                 </li>
                 <li className="flex items-center gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">trending_up</span>
                    Beginners to advanced learners
                 </li>
                 <li className="flex items-center gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">code_off</span>
                    No prior coding knowledge required
                 </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6 text-on-surface">Career Pathways</h2>
              <div className="flex flex-wrap gap-2">
                 {careerPathways.map((path, i) => (
                   <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                     {path}
                   </span>
                 ))}
              </div>
            </div>
          </div>

          <section className="bg-[#000d2b] py-16 rounded-[40px] text-center text-on-primary">
            <h2 className="text-3xl font-headline font-bold mb-12">Our Teaching Approach</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
              {[
                { icon: "architecture", text: "Project Based" },
                { icon: "hub", text: "Real-life Apps" },
                { icon: "celebration", text: "Fun Sessions" },
                { icon: "support_agent", text: "Personalized" }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                   <div className="mx-auto w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-secondary backdrop-blur-md">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                   </div>
                   <p className="text-xs font-bold uppercase tracking-widest text-secondary">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <LeadForm programName="Robotics & AI" />
            <div className="p-8 bg-surface-container-highest rounded-2xl text-on-surface text-center">
              <h4 className="font-bold text-xl mb-4">Enroll Today!</h4>
              <p className="text-sm mb-6 leading-relaxed opacity-80 italic italic">Give your child the opportunity to learn, innovate, and lead in the world of technology.</p>
              <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                 <div className="flex items-center justify-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined">event_seat</span>
                    <span>Limited Seats Available</span>
                 </div>
                 <div className="flex items-center justify-center gap-2 text-secondary font-bold">
                    <span className="material-symbols-outlined">psychology</span>
                    <span>Expert Tech Mentors</span>
                 </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
