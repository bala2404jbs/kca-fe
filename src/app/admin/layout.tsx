'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { AdminProvider, useAdmin } from './AdminContext';

const NAV_ITEMS = [
  { href: '/admin/leads', icon: 'person_raised_hand', label: 'Book Demo Leads' },
  { href: '/admin/contacts', icon: 'mail', label: 'Contact Messages' },
  { href: '/admin/franchises', icon: 'storefront', label: 'Franchise Inquiries' },
  { href: '/admin/teachers', icon: 'school', label: 'Teacher Applications' },
  { href: '/admin/institutions', icon: 'domain', label: 'Institution Inquiries' },
  { href: '/admin/newsletter', icon: 'mark_email_read', label: 'Newsletter' },
  { href: '/admin/media', icon: 'perm_media', label: 'Media Config' },
];

function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 border border-outline-variant/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-amber-500 text-3xl">warning</span>
          <h3 className="text-lg font-bold text-slate-800">Unsaved Changes</h3>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-outline-variant/30 font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Stay & Save
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors"
          >
            Leave Anyway
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);
  const { hasUnsavedChanges, setHasUnsavedChanges } = useAdmin();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token');
      if (!token && pathname !== '/admin/login') {
        router.push('/admin/login');
      } else {
        setIsAuthenticated(!!token);
      }
    };
    checkAuth();
    window.addEventListener('auth-change', checkAuth);
    return () => window.removeEventListener('auth-change', checkAuth);
  }, [pathname, router]);

  const safeNavigate = (route: string) => {
    if (hasUnsavedChanges) {
      setPendingRoute(route);
    } else {
      router.push(route);
    }
  };

  const handleConfirmLeave = () => {
    setHasUnsavedChanges(false);
    if (pendingRoute) router.push(pendingRoute);
    setPendingRoute(null);
  };

  const handleCancelLeave = () => setPendingRoute(null);

  const handleLogout = () => {
    const doLogout = () => {
      localStorage.removeItem('admin_token');
      window.dispatchEvent(new Event('auth-change'));
      setHasUnsavedChanges(false);
      router.push('/');
    };
    if (hasUnsavedChanges) {
      setPendingRoute('__logout__');
    } else {
      doLogout();
    }
  };

  // Handle logout confirmation
  useEffect(() => {
    if (pendingRoute === '__logout__' && !hasUnsavedChanges) {
      localStorage.removeItem('admin_token');
      window.dispatchEvent(new Event('auth-change'));
      router.push('/');
      setPendingRoute(null);
    }
  }, [pendingRoute, hasUnsavedChanges, router]);

  if (pathname === '/admin/login') return <>{children}</>;
  if (isAuthenticated === null || !isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Confirmation Modal */}
      {pendingRoute && (
        <ConfirmModal
          message="You have unsaved changes. If you leave now, your uploads and edits will be lost."
          onConfirm={() => {
            if (pendingRoute === '__logout__') {
              setHasUnsavedChanges(false);
              localStorage.removeItem('admin_token');
              window.dispatchEvent(new Event('auth-change'));
              router.push('/');
            } else {
              handleConfirmLeave();
            }
            setPendingRoute(null);
          }}
          onCancel={handleCancelLeave}
        />
      )}

      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-outline-variant/20 shadow-sm hidden md:flex flex-col">
        <div className="p-6 border-b border-outline-variant/20">
          <h2 className="text-2xl font-black text-primary uppercase tracking-tight">KCA Admin</h2>
          <p className="text-xs text-slate-500 font-medium">Platform Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS.map(({ href, icon, label }) => (
            <button
              key={href}
              onClick={() => safeNavigate(href)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all text-left ${
                pathname === href ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-outline-variant/20 space-y-2">
          {/* Toggle to User/Public View */}
          <button
            onClick={() => safeNavigate('/')}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-100 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">switch_account</span>
            Switch to User View
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-lg font-bold text-red-600 hover:bg-red-50 transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminShell>{children}</AdminShell>
    </AdminProvider>
  );
}
