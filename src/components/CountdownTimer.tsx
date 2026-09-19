"use client";

import { useEffect, useState } from "react";
import { getTimeRemaining, type TimeRemaining } from "@/lib/countdown";
import { product } from "@/lib/content";

export function CountdownTimer() {
  const [time, setTime] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    totalSeconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeRemaining());

    const timer = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, "0");

  if (!mounted) {
    return (
      <div className="countdown-box" aria-label="Compte à rebours promotionnel 24h">
        <div className="timer-header">
          <span className="timer-label">OFFRE 24H. Fin ce soir à minuit.</span>
          <span className="timer-discount">-62%</span>
        </div>
        <div className="timer-digits">
          <div className="digit-unit">
            <span className="digit">--</span>
            <span className="digit-lbl">heures</span>
          </div>
          <span className="sep" aria-hidden="true">:</span>
          <div className="digit-unit">
            <span className="digit">--</span>
            <span className="digit-lbl">min</span>
          </div>
          <span className="sep" aria-hidden="true">:</span>
          <div className="digit-unit">
            <span className="digit">--</span>
            <span className="digit-lbl">sec</span>
          </div>
        </div>
        <p className="timer-subtext">À minuit, le guide repasse à 8 000 FCFA.</p>
      </div>
    );
  }

  if (time.isExpired) {
    return (
      <div className="countdown-box expired" role="status" aria-live="polite">
        <div className="timer-header">
          <span className="timer-label">L'offre d'hier est terminée.</span>
        </div>
        <p className="expired-message">
          Une nouvelle fenêtre de 24h vient d'ouvrir. Le guide est de nouveau à 3 000 FCFA jusqu'à ce soir minuit.
        </p>
        <a className="btn btn-ember btn-sm" href={product.checkoutUrl}>
          J'en profite maintenant · 3 000 FCFA
        </a>
      </div>
    );
  }

  return (
    <div className="countdown-box" role="timer" aria-live="polite">
      <div className="timer-header">
        <span className="timer-label">OFFRE 24H. Fin ce soir à minuit.</span>
        <span className="timer-discount">-62%</span>
      </div>
      <div className="timer-digits">
        <div className="digit-unit">
          <span className="digit">{format(time.hours)}</span>
          <span className="digit-lbl">heures</span>
        </div>
        <span className="sep" aria-hidden="true">:</span>
        <div className="digit-unit">
          <span className="digit">{format(time.minutes)}</span>
          <span className="digit-lbl">min</span>
        </div>
        <span className="sep" aria-hidden="true">:</span>
        <div className="digit-unit">
          <span className="digit">{format(time.seconds)}</span>
          <span className="digit-lbl">sec</span>
        </div>
      </div>
      <p className="timer-subtext">À minuit, le guide repasse à 8 000 FCFA.</p>
    </div>
  );
}
