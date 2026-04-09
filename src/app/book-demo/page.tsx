'use client';

import { useState } from 'react';
import { createLead } from '../../lib/api';

export default function BookDemoPage() {
  const [form, setForm] = useState({
    parentName: '', childName: '', childAge: '', programInterested: '', phone: '', email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await createLead({ ...form, childAge: Number(form.childAge), source: 'BOOK_DEMO_PAGE' });
      setStatus('success');
      setMessage("Your demo session has been booked! We'll contact you shortly.");
      setForm({ parentName: '', childName: '', childAge: '', programInterested: '', phone: '', email: '' });
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Unlock Your Child&apos;s{" "}
            <span className="text-primary">Potential</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">Join 5,000+ happy families today.</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-surface-container-low flex items-center gap-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-bold text-sm">ISO Certified</span>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low flex items-center gap-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <span className="font-bold text-sm">Expert Mentors</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-premium">
          <h2 className="text-2xl font-bold mb-8">Schedule Your Discovery Session</h2>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
              <p className="text-lg font-semibold text-green-700">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="parentName" value={form.parentName} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
                placeholder="Parent Name" type="text" />
              <input required name="childName" value={form.childName} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
                placeholder="Child Name" type="text" />
              <input required name="childAge" value={form.childAge} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
                placeholder="Child Age" type="number" min={3} max={18} />
              <select required name="programInterested" value={form.programInterested} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select Program</option>
                <option value="ABACUS">Abacus</option>
                <option value="VEDIC_MATHS">Vedic Maths</option>
                <option value="HANDWRITING">Handwriting</option>
                <option value="CBDP">CBDP</option>
                <option value="FEEP">FEEP</option>
                <option value="SEEP">SEEP</option>
                <option value="AIP">AIP</option>
                <option value="ROBOTICS">Robotics</option>
              </select>
              <input required name="phone" value={form.phone} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
                placeholder="Phone Number" type="tel" />
              <input required name="email" value={form.email} onChange={handleChange}
                className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email" type="email" />
              {status === 'error' && (
                <div className="md:col-span-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">{message}</div>
              )}
              <div className="md:col-span-2">
                <button type="submit" disabled={status === 'loading'}
                  className="w-full btn-gradient py-5 rounded-full text-on-primary font-bold text-lg shadow-xl disabled:opacity-60">
                  {status === 'loading' ? 'Submitting...' : 'Book Free Demo'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
