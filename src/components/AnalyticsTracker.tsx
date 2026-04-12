'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { API_URL } from '../lib/api';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const track = async () => {
      try {
        await fetch(`${API_URL}/analytics/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: pathname }),
        });
      } catch (err) {
        console.error('Analytics error:', err);
      }
    };

    track();
  }, [pathname]);

  return null;
}
