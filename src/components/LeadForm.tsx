'use client';

import React, { useState } from 'react';
import { createLead } from '../lib/api';

interface LeadFormProps {
  programName: string;
  title?: string;
  subtitle?: string;
}

export default function LeadForm({ 
  programName, 
  title = "Book a Demo", 
  subtitle = "Experience our teaching method for free." 
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Map the human-readable program name to the Enum value expected by the backend
    const programMap: Record<string, string> = {
      'CBDP': 'CBDP',
      'FEEP': 'FEEP',
      'SEEP': 'SEEP',
      'AIP': 'AIP',
      'Vedic Maths': 'VEDIC_MATHS',
      'Handwriting': 'HANDWRITING',
      'Abacus': 'ABACUS',
      'Communicative English': 'ROBOTICS', // Best match for now if no specific category
    };

    try {
      await createLead({
        parentName: formData.parentName,
        childName: formData.childName,
        childAge: parseInt(formData.childAge) || 0,
        programInterested: programMap[programName] || 'CBDP',
        phone: formData.phone,
        email: formData.email || 'no-email@kca.com',
        source: 'PROGRAM_PAGE',
      });
      setStatus('success');
      setMessage('Thank you! We will contact you soon.');
      setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '' });
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center space-y-4">
        <span className="material-symbols-outlined text-green-500 text-5xl">check_circle</span>
        <h3 className="text-xl font-bold text-green-800">Success!</h3>
        <p className="text-green-700">{message}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-2xl border border-outline-variant/10">
      <h3 className="text-2xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-on-surface-variant mb-6 text-sm">
        {subtitle}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Parent Name</label>
          <input
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="e.g. John Doe"
            type="text"
            value={formData.parentName}
            onChange={e => setFormData({ ...formData, parentName: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Child Name</label>
            <input
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Name"
              type="text"
              value={formData.childName}
              onChange={e => setFormData({ ...formData, childName: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Age</label>
            <input
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g. 8"
              type="number"
              value={formData.childAge}
              onChange={e => setFormData({ ...formData, childAge: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase px-1">WhatsApp Number</label>
          <input
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="+91"
            type="tel"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase px-1">Email (Optional)</label>
          <input
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="email@example.com"
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        
        {status === 'error' && (
          <p className="text-red-500 text-xs px-1 font-medium">{message}</p>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all disabled:opacity-70 mt-4 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Scheduling...
            </>
          ) : (
            'Book Free Demo'
          )}
        </button>
      </form>
    </div>
  );
}
