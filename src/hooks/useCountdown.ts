import { useState, useEffect } from 'react';

interface CountdownValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isDone: boolean;
}

export function useCountdown(targetDate: string): CountdownValues {
  const pad = (n: number) => String(n).padStart(2, '0');

  const compute = (): CountdownValues => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00', isDone: true };
    }
    return {
      days: pad(Math.floor(diff / 86_400_000)),
      hours: pad(Math.floor((diff % 86_400_000) / 3_600_000)),
      minutes: pad(Math.floor((diff % 3_600_000) / 60_000)),
      seconds: pad(Math.floor((diff % 60_000) / 1_000)),
      isDone: false,
    };
  };

  const [values, setValues] = useState<CountdownValues>(compute);

  useEffect(() => {
    const timer = setInterval(() => setValues(compute()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return values;
}
