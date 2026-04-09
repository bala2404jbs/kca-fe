'use client';

import { useEffect, useState } from 'react';
import { getInstitutions } from '../../../lib/api';

export default function InstitutionsAdminPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  const load = async () => {
    try { setLoading(true); setItems(await getInstitutions(token)); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Institution Inquiries</h1>
          <p className="text-slate-500 mt-1">School and institution partnership leads</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-base">refresh</span> Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-slate-400 gap-2">
          <span className="material-symbols-outlined animate-spin">progress_activity</span> Loading...
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface-container-low text-slate-600 uppercase text-xs tracking-wider">
              <tr>{['Institution', 'Contact Person', 'Email', 'Phone', 'Status', 'Date'].map(h => <th key={h} className="px-4 py-3 text-left font-bold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {items.length === 0 && <tr><td colSpan={6} className="text-center py-12 text-slate-400">No institution inquiries yet</td></tr>}
              {items.map(item => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-slate-800">{item.institutionName}</td>
                  <td className="px-4 py-3 text-slate-600">{item.contactPerson}</td>
                  <td className="px-4 py-3 text-slate-600">{item.email}</td>
                  <td className="px-4 py-3 text-slate-600">{item.phone}</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">{item.status || 'NEW'}</span></td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
