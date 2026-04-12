'use client';

import { useEffect, useState } from 'react';
import { getNewsletterSubscribers } from '../../../lib/api';

export default function SubscribersAdminPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  const load = async () => {
    try { setLoading(true); const { getNewsletterSubscribers } = await import('../../../lib/api'); setItems(await getNewsletterSubscribers(token)); }
    finally { setLoading(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this subscriber?')) return;
    try {
      const { deleteNewsletterSubscriber } = await import('../../../lib/api');
      await deleteNewsletterSubscriber(id, token);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (err) { alert('Failed to delete'); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Newsletter Subscribers</h1>
          <p className="text-slate-500 mt-1 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {items.length} total active subscriptions
          </p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-base">refresh</span> Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-slate-400 gap-3">
          <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span> 
          <span className="font-bold tracking-widest uppercase text-xs">Loading Subscribers...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-outline-variant/10">
                <tr>{['Email Address', 'Status', 'Date Joined', 'Actions'].map(h => <th key={h} className="px-6 py-4 text-left">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {items.length === 0 && <tr><td colSpan={4} className="text-center py-20 text-slate-400 italic">No subscribers yet</td></tr>}
                {items.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 md:text-base">{item.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                        {item.isActive ? 'Active' : 'Unsubscribed'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-400 text-xs font-medium tabular-nums">{new Date(item.subscribedAt || item.createdAt).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(item.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
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
