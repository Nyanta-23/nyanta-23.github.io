const STORAGE_KEY = "contact_form_last_sent";
const COOLDOWN = 60 * 1000;

function getElapsedSinceLastSent(): number | null {
  const lastSent = localStorage.getItem(STORAGE_KEY);
  if (!lastSent) return null;
  return Date.now() - Number(lastSent);
}

export function canSendEmail(): boolean {
  const elapsed = getElapsedSinceLastSent();
  return elapsed === null || elapsed >= COOLDOWN;
}

export function getRemainingCooldown(): number {
  const elapsed = getElapsedSinceLastSent();
  if (elapsed === null) return 0;
  return Math.max(0, Math.ceil((COOLDOWN - elapsed) / 1000));
}

export function saveLastSentTime(): void {
  localStorage.setItem(STORAGE_KEY, Date.now().toString());
}
