'use client';

import { useState } from 'react';
import { createContact } from '../../lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    addressLine1: '', addressLine2: '', city: '', state: '', zipCode: '', country: 'India', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await createContact(form);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong.');
    }
  };

  const inputClass = "w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm";

  return (
    <main className="pt-32 pb-32 bg-slate-50/50">
      <section className="px-8 max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-800">Contact Us</h1>
        <p className="text-slate-500 mb-10">We&apos;d love to hear from you. Fill in the form below and we&apos;ll get back to you.</p>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center bg-white rounded-xl shadow-sm border border-green-100">
            <span className="material-symbols-outlined text-5xl text-green-500">mark_email_read</span>
            <h2 className="text-2xl font-bold text-green-700">Message Sent!</h2>
            <p className="text-slate-500">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="p-8 bg-white rounded-xl shadow-sm border border-outline-variant/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">First Name *</label>
                  <input required name="firstName" value={form.firstName} onChange={handleChange} className={inputClass} placeholder="First Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">Last Name *</label>
                  <input required name="lastName" value={form.lastName} onChange={handleChange} className={inputClass} placeholder="Last Name" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">Email *</label>
                <input required name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="Email Address" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">Phone/Mobile *</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="Mobile Number" type="tel" />
              </div>
              <div className="pt-4">
                <h3 className="text-[15px] font-medium text-slate-800 mb-4">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">Address Line 1 *</label>
                    <input required name="addressLine1" value={form.addressLine1} onChange={handleChange} className={inputClass} placeholder="Address Line 1" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">Address Line 2</label>
                    <input name="addressLine2" value={form.addressLine2} onChange={handleChange} className={inputClass} placeholder="Address Line 2" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">City *</label>
                    <input required name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="City" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">State *</label>
                    <input required name="state" value={form.state} onChange={handleChange} className={inputClass} placeholder="State" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">Zip Code *</label>
                    <input required name="zipCode" value={form.zipCode} onChange={handleChange} className={inputClass} placeholder="Zip" type="text" />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-sm font-medium text-slate-800">Country *</label>
                    <select required name="country" value={form.country} onChange={handleChange} className={inputClass + " appearance-none"}>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-[38px] text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">Message *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} className={inputClass} rows={5} placeholder="Write your message here..." />
              </div>
              {status === 'error' && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}
              <div className="pt-2">
                <button type="submit" disabled={status === 'loading'}
                  className="bg-[#1877f2] hover:bg-[#166fe5] text-white px-8 py-3 rounded-[4px] font-medium text-[15px] transition-colors shadow-sm disabled:opacity-60">
                  {status === 'loading' ? 'Submitting...' : 'Submit Form'}
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
