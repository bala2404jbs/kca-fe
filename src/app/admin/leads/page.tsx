'use client';

import { useEffect, useState } from 'react';
import { getLeads, updateLeadStatus } from '../../../lib/api';

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-yellow-100 text-yellow-700',
  CONVERTED: 'bg-green-100 text-green-700',
  CLOSED: 'bg-slate-100 text-slate-600',
};

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') || '' : '';

  const load = async () => {
    try {
      setLoading(true);
      const data = await getLeads(token);
      setLeads(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateLeadStatus(id, status, token);
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Book Demo Leads</h1>
          <p className="text-slate-500 mt-1">All incoming demo booking requests</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-base">refresh</span> Refresh
        </button>
      </div>

      {loading && <div className="flex items-center gap-3 text-slate-500 py-12 justify-center"><span className="material-symbols-outlined animate-spin">progress_activity</span> Loading...</div>}
      {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">{error}</div>}

      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface-container-low text-slate-600 uppercase text-xs tracking-wider">
              <tr>
                {['Parent', 'Child', 'Age', 'Program', 'Phone', 'Email', 'Status', 'Date', 'Action'].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {leads.length === 0 && (
                <tr><td colSpan={9} className="text-center py-12 text-slate-400">No leads yet</td></tr>
              )}
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-800">{lead.parentName}</td>
                  <td className="px-4 py-3 text-slate-600">{lead.childName}</td>
                  <td className="px-4 py-3 text-slate-600">{lead.childAge}</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{lead.programInterested}</span></td>
                  <td className="px-4 py-3 text-slate-600">{lead.phone}</td>
                  <td className="px-4 py-3 text-slate-600">{lead.email}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-bold ${STATUS_COLORS[lead.status] || ''}`}>{lead.status}</span></td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <select value={lead.status} onChange={e => handleStatusChange(lead.id, e.target.value)}
                      className="text-xs border border-outline-variant/30 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="NEW">New</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="CONVERTED">Converted</option>
                      <option value="CLOSED">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
