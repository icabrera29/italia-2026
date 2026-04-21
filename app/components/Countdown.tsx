"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-05-16T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch by rendering a placeholder or matching the server initial state
  if (!mounted) {
    return (
      <div className="flex justify-center gap-6 md:gap-8 opacity-0">
        <div className="flex flex-col items-center">
          <span className="font-headline text-4xl md:text-5xl text-on-surface">00</span>
          <span className="font-body text-xs text-on-surface-variant mt-1">Días</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 md:gap-6 lg:gap-8">
      <TimeUnit value={timeLeft.days} label="Días" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-headline text-4xl md:text-5xl text-on-surface min-w-[3rem] md:min-w-[4rem]">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="font-body text-xs text-on-surface-variant mt-1">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <div className="font-headline text-4xl md:text-5xl text-outline-variant flex items-start pt-1">:</div>
  );
}
