'use client';

import React, { createContext, useContext, useState } from 'react';

interface AdminContextType {
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (val: boolean) => void;
}

const AdminContext = createContext<AdminContextType>({
  hasUnsavedChanges: false,
  setHasUnsavedChanges: () => {},
});

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  return (
    <AdminContext.Provider value={{ hasUnsavedChanges, setHasUnsavedChanges }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
