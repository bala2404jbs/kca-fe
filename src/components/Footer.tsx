'use client';

import Link from "next/link";
import { useState } from "react";
import { subscribeNewsletter } from "../lib/api";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    if (!email) return;
    setSubStatus('loading');
    try {
      await subscribeNewsletter(email);
      setSubStatus('success');
      setEmail('');
    } catch {
      setSubStatus('error');
    }
  };

  return (
    <footer className="bg-[#f0f1f3] dark:bg-slate-900 w-full mt-32 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-16 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-black text-[#002366] dark:text-[#8ea6f0]">Kids Career Academy</div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Cultivating the next generation of pioneers, dreamers, and leaders through immersive career discovery and expert mentorship.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#3b5998]/30" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#25D366]/30" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#0088cc]/30" title="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#ea4335] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#ea4335]/30" title="Email">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">Programs</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link href="/program/abacus" className="hover:text-primary transition-all">Abacus Mastery</Link></li>
            <li><a className="hover:text-primary transition-all" href="#">Robotics &amp; AI</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Creative Arts</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Vedic Maths</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">Quick Links</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-all">About Us</Link></li>
            <li><Link href="/franchise" className="hover:text-primary transition-all">Franchise</Link></li>
            <li><Link href="/teacher-training" className="hover:text-primary transition-all">Teacher Training</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-all">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">Stay Connected</h5>
          <p className="text-slate-500 text-sm mb-6">Join our newsletter to get latest educational updates.</p>
          {subStatus === 'success' ? (
            <p className="text-green-600 text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              You&apos;re subscribed!
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              <input
                className="bg-surface border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary outline-none text-sm"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {subStatus === 'error' && <p className="text-red-500 text-xs px-2">Subscription failed. Try again.</p>}
              <button
                onClick={handleSubscribe}
                disabled={subStatus === 'loading'}
                className="bg-primary text-on-primary rounded-full px-6 py-3 font-bold text-sm disabled:opacity-60"
              >
                {subStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="px-8 py-6 border-t border-slate-300 dark:border-slate-800 flex justify-center items-center">
        <span className="text-slate-500 text-[13px]">
          Copyright © 2026 | Powered by <Link href="/" className="no-underline" style={{ textDecoration: 'none' }}>KCA</Link>
        </span>
      </div>
    </footer>
  );
}
