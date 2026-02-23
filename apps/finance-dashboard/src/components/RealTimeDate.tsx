import { useEffect, useState } from 'react';
import { api } from '../lib/api';

interface TimeData {
  iso: string;
  unix: number;
  formatted: string;
}

export default function RealTimeDate() {
  const [time, setTime] = useState<TimeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial time from API
    const fetchTime = async () => {
      try {
        setIsLoading(true);
        const data = await api.get<TimeData>('/api/time');
        setTime(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch time:', err);
        setError('Unable to fetch time');
        // Fallback to client-side time
        const now = new Date();
        setTime({
          iso: now.toISOString(),
          unix: now.getTime(),
          formatted: now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          }),
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTime();

    // Update time every second (client-side update for smooth display)
    const interval = setInterval(() => {
      setTime((prev) => {
        if (!prev) return null;
        const now = new Date();
        return {
          ...prev,
          iso: now.toISOString(),
          unix: now.getTime(),
          formatted: now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          }),
        };
      });
    }, 1000);

    // Sync with server every 30 seconds to prevent drift
    const syncInterval = setInterval(fetchTime, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(syncInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="text-sm text-gray-400">
        Loading time...
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-end gap-1"
      title={error ? 'Using client-side time' : 'Using server time'}
    >
      <div className="text-sm font-medium text-white">
        {time?.formatted || 'Unable to display time'}
      </div>
      {error && (
        <div className="text-xs text-amber-400">
          {error}
        </div>
      )}
    </div>
  );
}
