'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAnalyticsStats } from '../../lib/api';
import AnimatedNumber from '@/components/AnimatedNumber';

const DASHBOARD_CARDS = [
  { href: '/admin/leads', icon: 'person_raised_hand', label: 'Book Demo Leads', count: '...', desc: 'Prospective students' },
  { href: '/admin/contacts', icon: 'mail', label: 'Contact Messages', count: '...', desc: 'General help desk' },
  { href: '/admin/franchises', icon: 'storefront', label: 'Franchise Inquiries', count: '...', desc: 'Business partnerships' },
  { href: '/admin/teachers', icon: 'school', label: 'Teacher Applications', count: '...', desc: 'New recruitment' },
  { href: '/admin/institutions', icon: 'domain', label: 'Institution Inquiries', count: '...', desc: 'School partnerships' },
  { href: '/admin/newsletter', icon: 'mark_email_read', label: 'Newsletter', count: '...', desc: 'Subscribed users' },
  { href: '/admin/media', icon: 'perm_media', label: 'Media Config', count: '', desc: 'Gallery & Content' },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ totalHits: 0, uniqueVisitors: 0 });
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  useEffect(() => {
    getAnalyticsStats(token).then(setStats).catch(console.error);
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-2 font-medium">Welcome back! Here&apos;s a summary of recent platform activity.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center min-w-[140px]">
            <span className="text-3xl font-black text-primary tabular-nums">
              <AnimatedNumber value={stats.totalHits} />
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Total Hits</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center min-w-[140px]">
            <span className="text-3xl font-black text-slate-800 tabular-nums">
              <AnimatedNumber value={stats.uniqueVisitors} />
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Unique Visitors</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DASHBOARD_CARDS.map((card) => (
          <Link 
            key={card.href} 
            href={card.href}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-xl hover:border-primary/20 transition-all flex flex-col items-start text-left"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">{card.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{card.label}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>
            
            <div className="mt-auto flex items-center justify-between w-full">
              <span className="text-2xl font-black text-slate-300 group-hover:text-primary/30 transition-colors uppercase tracking-widest text-xs">Manage</span>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
