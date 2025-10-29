import { useEffect, useState } from 'react';

// 自定义 Hook
export const useCountdown = (initialTime = 60) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || time <= 0) return;

    const timer = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = (newTime = initialTime) => {
    setIsRunning(false);
    setTime(newTime);
  };

  return { time, isRunning, start, pause, reset };
};
