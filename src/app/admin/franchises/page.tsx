'use client';

import { useEffect, useState } from 'react';
import { getFranchises } from '../../../lib/api';

const TYPE_LABELS: Record<string, string> = {
  free: 'Free Franchise', lancer: 'Free Lancer', unit: 'Unit Franchise', master: 'Master Franchise',
};

const TYPE_COLORS: Record<string, string> = {
  free: 'bg-blue-100 text-blue-700', lancer: 'bg-purple-100 text-purple-700',
  unit: 'bg-orange-100 text-orange-700', master: 'bg-yellow-100 text-yellow-800',
};

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-purple-100 text-purple-700',
  AGREEMENT: 'bg-orange-100 text-orange-700',
  ACTIVE: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
};

export default function FranchisesAdminPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  const load = async () => {
    try { setLoading(true); const { getFranchises } = await import('../../../lib/api'); setItems(await getFranchises(token)); }
    finally { setLoading(false); }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const { updateFranchiseStatus } = await import('../../../lib/api');
      await updateFranchiseStatus(id, newStatus, token);
      setItems(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } catch (err) { alert('Failed to update status'); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const { deleteFranchise } = await import('../../../lib/api');
      await deleteFranchise(id, token);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (err) { alert('Failed to delete'); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Franchise Inquiries</h1>
          <p className="text-slate-500 mt-1">Manage business partnership interest and track lead status</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-base">refresh</span> Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-slate-400 gap-3">
          <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span> 
          <span className="font-bold tracking-widest uppercase text-xs">Loading Inquiries...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-outline-variant/10">
                <tr>{['Contact Info', 'Details', 'Status', 'Date', 'Actions'].map(h => <th key={h} className="px-6 py-4 text-left">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {items.length === 0 && <tr><td colSpan={5} className="text-center py-20 text-slate-400 italic">No inquiries found in the system</td></tr>}
                {items.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 md:text-base">{item.fullName}</div>
                      <div className="text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-xs">mail</span> {item.email}
                      </div>
                      <div className="text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span className="material-symbols-outlined text-xs">call</span> {item.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${TYPE_COLORS[item.franchiseType] || 'bg-slate-100 text-slate-600'}`}>
                        {TYPE_LABELS[item.franchiseType] || item.franchiseType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                       <select 
                        value={item.status} 
                        onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-lg border-0 outline-none cursor-pointer shadow-sm ring-1 ring-inset ring-outline-variant/20 focus:ring-2 focus:ring-primary ${STATUS_COLORS[item.status] || 'bg-slate-100 text-slate-600'}`}
                       >
                         {['NEW', 'CONTACTED', 'AGREEMENT', 'ACTIVE', 'REJECTED'].map(s => (
                           <option key={s} value={s}>{s}</option>
                         ))}
                       </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-400 text-xs font-medium tabular-nums">{new Date(item.createdAt).toLocaleDateString()}</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={`tel:${item.phone}`} title="Call Now" className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                          <span className="material-symbols-outlined text-sm">call</span>
                        </a>
                        <a href={`mailto:${item.email}`} title="Send Email" className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                          <span className="material-symbols-outlined text-sm">mail</span>
                        </a>
                        <button onClick={() => handleDelete(item.id)} title="Delete" className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
