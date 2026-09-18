"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 23, minutes: 59, seconds: 59 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const STORAGE_KEY = "vaincre_peur_promo_end_v2";

    const getOrSetEndTime = () => {
      const now = Date.now();
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed > now) {
          return parsed;
        }
      }
      // Set new 24h rolling deadline (24 hours from now)
      const nextEnd = now + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, nextEnd.toString());
      return nextEnd;
    };

    let endTime = getOrSetEndTime();

    const updateTimer = () => {
      const now = Date.now();
      let diff = endTime - now;

      if (diff <= 0) {
        // Automatically renew for another 24 hours as requested!
        endTime = now + 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, endTime.toString());
        diff = endTime - now;
      }

      const totalSec = Math.floor(diff / 1000);
      const hours = Math.floor((totalSec / 3600) % 24);
      const minutes = Math.floor((totalSec / 60) % 60);
      const seconds = totalSec % 60;

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className={`countdown-box ${compact ? "compact" : ""}`} aria-label="Compte à rebours promotionnel 24h">
        <span className="timer-badge">Offre 24H</span>
        <div className="timer-digits">
          <span className="digit">23</span>
          <span className="sep">:</span>
          <span className="digit">59</span>
          <span className="sep">:</span>
          <span className="digit">59</span>
        </div>
      </div>
    );
  }

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className={`countdown-box ${compact ? "compact" : ""}`} role="timer" aria-live="polite">
      <div className="timer-header">
        <span className="pulse-dot" aria-hidden="true"></span>
        <span className="timer-label">Offre spéciale 24H</span>
        <span className="timer-discount">-62%</span>
      </div>
      <div className="timer-digits">
        <div className="digit-unit">
          <span className="digit">{format(timeLeft.hours)}</span>
          <span className="digit-lbl">heures</span>
        </div>
        <span className="sep" aria-hidden="true">:</span>
        <div className="digit-unit">
          <span className="digit">{format(timeLeft.minutes)}</span>
          <span className="digit-lbl">min</span>
        </div>
        <span className="sep" aria-hidden="true">:</span>
        <div className="digit-unit">
          <span className="digit">{format(timeLeft.seconds)}</span>
          <span className="digit-lbl">sec</span>
        </div>
      </div>
    </div>
  );
}
