'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { createInstitution, getPageMedia, getMediaUrl } from '../../lib/api';



const schoolBenefits = [
  "Comparatively higher pass out percentage of the student's due to their enriched analytical, logical, listening, learning skills and intelligence guessing.",
  "Comparatively higher track of academic performance helps the institute's reputation stride high.",
  "Comparatively higher utilization efficiency of the faculty as the student's confidence, concentration and memory skills are honed and enhanced through our curriculum.",
  "Comparatively better understanding due to practical hands on learning in Robotics based on stem concepts which explores students potential in design, prototype development, programming, computational thinking, data logging, contextualized mathematics and skill sets of the 21st century.",
  "100% parent satisfaction through the time-tested results which comes handy at an affordable cost."
];

const enrollReasons = [
  "Ensuring smooth running of the programs throughout the year.",
  "Unlimited support for the progress of the students.",
  "Evaluation through term wise examination.",
  "Uninterrupted supply of all the courseware.",
  "Engagement of faculties of our curriculum against the demand."
];

export default function InstitutionsPage() {
  const [form, setForm] = useState({ institutionName: '', contactPerson: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('institutions').then(setMedia).catch(console.error);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading');
    try { await createInstitution(form); setStatus('success'); }
    catch (err: any) { setStatus('error'); setErrorMsg(err.message || 'Failed. Try again.'); }
  };
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Students in classroom"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://lh3.googleusercontent.com/aida-public/AB6AXuBwP_wJHdXTnMLZsVzyUFgRtT-EqyFU5lUc1aUxlz4usaCVBdu9kYuzOIXQbogktDtZYpX1UrdsQJ3o4mqMkMibbgZk4iLzL0DtOxCcdxIY-XE_8VfIMi6QVAC7UZJAht8LKh_P3JecEolrymKy2chrgtJOrxXTJsgC5W9tyDOFHmez1Qfgyokyfz8_NfEmxd-Ht87N_pzgG5Wu-J1t74fYOvx4D-gbLSD4y8ab_YyHoOOqdOiFslno5FB_pwGDQtxqqYvPoWWzoQUx"}
              fill unoptimized
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                domain
              </span>
              Partnership
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-primary mb-6 tracking-tight uppercase">
              Educational Institutions
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed max-w-2xl">
              Elevate your institute&apos;s reputation through proven academic records. Incorporate our curriculum to build an indispensable foundation for your students&apos; bright careers.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(media?.galleryImages?.length > 0 ? media.galleryImages : ["/images/institutions/1.jpg", "/images/institutions/2.jpg"]).slice(0, 2).map((img: string, idx: number) => (
              <div key={idx} className="relative h-72 rounded-xl overflow-hidden shadow-md group">
                <Image 
                  src={getMediaUrl(img)} 
                  alt={`Institution Activity ${idx + 1}`} 
                  fill unoptimized 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>

          <div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Every institute&apos;s ambition is a great reputation through the proven academic records which automatically results in bright careers of the students. Our professionally designed various curriculum like CBDP, FEEP, AIP, SEEP, COMMUNICATIVE ENGLISH, VEDIC MATHS, HAND WRITING, ABACUS, and ART & CRAFT etc with a vision when incorporated in any school serves an irresistible good to their students. As the right foundation is indispensable for their bright career.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#002366] uppercase">
              School Benefits:
            </h2>
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <ul className="space-y-6">
                {schoolBenefits.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-on-surface-variant leading-relaxed pt-1 text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
             <p className="text-on-surface-variant leading-relaxed text-lg">
                Our Services like CBDP, FEEP, AIP, SEEP, COMMUNICATIVE ENGLISH, VEDIC MATHS, HAND WRITING, and ABACUS are being inducted rapidly in the schools considering the numerous benefits reaped out of it by their students.
             </p>
          </div>

          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
            <h2 className="text-3xl font-bold mb-6 text-primary uppercase">
              Free Training to Your Faculty:
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              As an extended service with a different dimension, we are ready to train your own faculty in the courses like ABACUS, VEDIC MATH, and HAND WRITING etc. only with true interests in the overall development of the students and to make it affordable to almost every student of our community, considering its irresistible benefits, enrolling every school of our society for our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#002366] uppercase">
              Enroll With Us Today For:
            </h2>
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <ul className="space-y-6">
                {enrollReasons.map((point, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-[#2ebd59] text-2xl flex-shrink-0">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant leading-relaxed text-lg font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="material-symbols-outlined text-primary text-2xl">handshake</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-800">Partner With Us</h3>
            <p className="text-slate-500 mb-8 text-sm">
              Implement our proven curriculum in your institution today.
            </p>
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                <p className="font-bold text-green-800 text-lg">Partnership request sent!</p>
                <p className="text-green-600 text-sm">We will be in touch with you shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-green-700 font-semibold hover:underline mt-4">Send another inquiry</button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Institution Name</label>
                 <input required name="institutionName" value={form.institutionName} onChange={handleChange}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   placeholder="e.g. Salem Public School" type="text" />
               </div>
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Contact Person</label>
                 <input required name="contactPerson" value={form.contactPerson} onChange={handleChange}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   placeholder="Your Name" type="text" />
               </div>
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Phone Number</label>
                 <input required name="phone" value={form.phone} onChange={handleChange}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   placeholder="+91" type="tel" />
               </div>
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Email Address</label>
                 <input required name="email" value={form.email} onChange={handleChange}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                   placeholder="email@example.com" type="email" />
               </div>
               {status === 'error' && <p className="text-red-500 text-xs font-medium px-1">{errorMsg}</p>}
               <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all disabled:opacity-70 mt-4 flex items-center justify-center gap-2">
                 {status === 'loading' ? (
                   <>
                     <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                     Submitting...
                   </>
                 ) : 'Submit Partnership Inquiry'}
               </button>
             </form>)}
          </div>
        </aside>
      </div>
    </main>
  );
}
