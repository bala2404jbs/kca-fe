'use client';

import { useEffect, useState } from 'react';
import { getContacts, updateContactStatus } from '../../../lib/api';

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  READ: 'bg-yellow-100 text-yellow-700',
  REPLIED: 'bg-green-100 text-green-700',
};

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  const load = async () => {
    try {
      setLoading(true);
      setContacts(await getContacts(token));
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleStatusChange = async (id: string, status: string) => {
    await updateContactStatus(id, status, token);
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    if (selected?.id === id) setSelected((prev: any) => ({ ...prev, status }));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Contact Submissions</h1>
          <p className="text-slate-500 mt-1">Messages from the Contact Us page</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-base">refresh</span> Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-slate-400 gap-2">
              <span className="material-symbols-outlined animate-spin">progress_activity</span> Loading...
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-surface-container-low text-slate-600 uppercase text-xs tracking-wider">
                <tr>
                  {['Name', 'Email', 'Phone', 'Status', 'Date'].map(h => <th key={h} className="px-4 py-3 text-left font-bold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {contacts.length === 0 && <tr><td colSpan={5} className="text-center py-12 text-slate-400">No contacts yet</td></tr>}
                {contacts.map(c => (
                  <tr key={c.id} onClick={() => setSelected(c)} className={`hover:bg-slate-50 cursor-pointer transition-colors ${selected?.id === c.id ? 'bg-primary/5' : ''}`}>
                    <td className="px-4 py-3 font-medium text-slate-800">{c.firstName} {c.lastName}</td>
                    <td className="px-4 py-3 text-slate-600">{c.email}</td>
                    <td className="px-4 py-3 text-slate-600">{c.phone}</td>
                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-bold ${STATUS_COLORS[c.status] || ''}`}>{c.status}</span></td>
                    <td className="px-4 py-3 text-slate-400 text-xs">{new Date(c.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-outline-variant/10 p-6">
          {selected ? (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">{selected.firstName} {selected.lastName}</h2>
              <p className="text-sm text-slate-500">{selected.email} · {selected.phone}</p>
              <p className="text-sm text-slate-600">{selected.addressLine1}, {selected.city}, {selected.state} {selected.zipCode}, {selected.country}</p>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <p className="text-sm text-slate-700 leading-relaxed">{selected.message}</p>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 mb-1 block">Update Status</label>
                <select value={selected.status} onChange={e => handleStatusChange(selected.id, e.target.value)}
                  className="w-full border border-outline-variant/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                  <option value="NEW">New</option>
                  <option value="READ">Read</option>
                  <option value="REPLIED">Replied</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-slate-400 gap-2">
              <span className="material-symbols-outlined text-3xl">inbox</span>
              <p className="text-sm">Select a contact to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
