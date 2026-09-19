/**
 * Échéance réelle : minuit prochain, heure du Bénin (UTC+1, invariable).
 * Identique pour tous les visiteurs quel que soit leur fuseau horaire ou leur navigateur.
 * Aucun point de départ n'est stocké dans le localStorage.
 */

export function getNextDeadline(): Date {
  const now = new Date();

  // Heure courante à Cotonou (UTC+1, offset +60 minutes)
  const cotonou = new Date(now.getTime() + (60 + now.getTimezoneOffset()) * 60000);

  // Minuit suivant, heure de Cotonou
  const deadlineCotonou = new Date(cotonou);
  deadlineCotonou.setHours(24, 0, 0, 0);

  // Reconversion vers l'heure locale du visiteur
  return new Date(deadlineCotonou.getTime() - (60 + now.getTimezoneOffset()) * 60000);
}

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  totalSeconds: number;
}

export function getTimeRemaining(): TimeRemaining {
  const now = new Date().getTime();
  const deadline = getNextDeadline().getTime();
  const diff = deadline - now;

  if (diff <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      totalSeconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
    isExpired: false,
    totalSeconds,
  };
}
