'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { createFranchise, getPageMedia, getMediaUrl } from '../../lib/api';



const franchiseOptions = [
  {
    title: "Free Franchise",
    description: "No investment, No boundaries just simply enroll the students in your vicinity we are all set to conduct the program at your premises absolutely at your convenience. Be a boss with the handsome profits"
  },
  {
    title: "Free Lancer",
    description: "No franchise fee, No boundaries and completely free to think, plan and run your business at your preferred pace and style. Just learn the programs at an affordable cost. Be a mentor end up with the huge profits."
  },
  {
    title: "Unit Franchise",
    description: "No royalty, simply pay your one month income as a franchise fee, exclusively rule the business in your area of preference. Avail our abundant know how on training to marketing, Beat the competition, keep your identity, make your presence an indispensable one. Be a prince reap the cumulating profits year after year"
  },
  {
    title: "Master Franchise",
    description: "No royalty, simply pay your Half month income as a franchise fee, exclusively rule the business in your city of preference, Open up multiple centers, unlimited support from training to marketing, on the spot assistance. Be a king make your own business kingdom. Harvest hilarious profits year after year."
  }
];

export default function FranchisePage() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', franchiseType: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('franchise').then(setMedia).catch(console.error);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading');
    try { await createFranchise(form); setStatus('success'); }
    catch (err: any) { setStatus('error'); setErrorMsg(err.message || 'Failed. Try again.'); }
  };
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Franchise Opportunity Hero"
              className="w-full h-full object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://lh3.googleusercontent.com/aida-public/AB6AXuACm5_7Bo5kYyh6b185QHbPmTrKhOu_J1W_qIxUfb0Q9pkTxvJwnOduknKt-XurgUlS7wx1pGnIDbP8y1a1uX4iheZu6BcNx76wimGZQKi4HgIF73uCstx7IKL3LOxmy5qUur8KyncW6X-5DjGc7c69Y_OX_sCfjGk9rkbUo1rHStGV_SJDOuSNKr7OFchCyi5BC0zcMzqIK8NEtq--C8sRHAfZ1fE92wVENTjXrBfwxE8ZstaE5FoPGLFypDIKPCpAfUbkjPup-bm3"}
              fill unoptimized
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                storefront
              </span>
              Business Opportunity
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-primary mb-6 tracking-tight uppercase">
              Franchise Opportunities
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed max-w-2xl">
              Join our growing network of educational entrepreneurs. Build your own legacy while empowering the next generation across borders.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(media?.galleryImages?.length > 0 ? media.galleryImages : ["https://lh3.googleusercontent.com/aida-public/AB6AXuACm5_7Bo5kYyh6b185QHbPmTrKhOu_J1W_qIxUfb0Q9pkTxvJwnOduknKt-XurgUlS7wx1pGnIDbP8y1a1uX4iheZu6BcNx76wimGZQKi4HgIF73uCstx7IKL3LOxmy5qUur8KyncW6X-5DjGc7c69Y_OX_sCfjGk9rkbUo1rHStGV_SJDOuSNKr7OFchCyi5BC0zcMzqIK8NEtq--C8sRHAfZ1fE92wVENTjXrBfwxE8ZstaE5FoPGLFypDIKPCpAfUbkjPup-bm3", "https://lh3.googleusercontent.com/aida-public/AB6AXuACm5_7Bo5kYyh6b185QHbPmTrKhOu_J1W_qIxUfb0Q9pkTxvJwnOduknKt-XurgUlS7wx1pGnIDbP8y1a1uX4iheZu6BcNx76wimGZQKi4HgIF73uCstx7IKL3LOxmy5qUur8KyncW6X-5DjGc7c69Y_OX_sCfjGk9rkbUo1rHStGV_SJDOuSNKr7OFchCyi5BC0zcMzqIK8NEtq--C8sRHAfZ1fE92wVENTjXrBfwxE8ZstaE5FoPGLFypDIKPCpAfUbkjPup-bm3"]).map((img: string, idx: number) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
                <Image 
                  src={getMediaUrl(img)} 
                  alt={`Franchise Opportunity ${idx + 1}`} 
                  fill unoptimized 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f3123c] uppercase">
              Video
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-outline-variant/10 bg-surface-container">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${media?.youtubeVideoIds?.[0] || 'Nj1AtSH1lPI'}`}
                title="FRANCHISE 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
             <div className="space-y-12">
                {franchiseOptions.map((option, i) => (
                   <div key={i}>
                      <h2 className="text-xl font-bold text-slate-800 uppercase mb-4 tracking-wide border-b-2 border-primary/20 pb-2 inline-block">
                         {option.title}:
                      </h2>
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                         {option.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-800">Express Interest</h3>
            <p className="text-slate-500 mb-8 text-sm">
              Discover exactly which model fits you best. Drop your details, and let&apos;s start building your business kingdom!
            </p>
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                <p className="font-bold text-green-800 text-lg">Inquiry submitted!</p>
                <p className="text-green-600 text-sm">We will reach out to you soon.</p>
                <button onClick={() => setStatus('idle')} className="text-green-700 font-semibold hover:underline mt-4">Send another inquiry</button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Full Name</label>
                 <input required name="fullName" value={form.fullName} onChange={handleChange}
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
               <div className="space-y-1">
                 <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Franchise Type</label>
                 <select required name="franchiseType" value={form.franchiseType} onChange={handleChange}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-600 appearance-none">
                    <option value="">Select Target Type</option>
                    <option value="free">Free Franchise</option>
                    <option value="lancer">Free Lancer</option>
                    <option value="unit">Unit Franchise</option>
                    <option value="master">Master Franchise</option>
                 </select>
               </div>
               {status === 'error' && <p className="text-red-500 text-xs font-medium px-1">{errorMsg}</p>}
               <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all disabled:opacity-70 mt-4 flex items-center justify-center gap-2">
                 {status === 'loading' ? (
                   <>
                     <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                     Submitting...
                   </>
                 ) : 'Submit Franchise Inquiry'}
               </button>
             </form>)}
          </div>
        </aside>
      </div>
    </main>
  );
}
