/**
 * Player handling preference. ARCADE (default): direct nose control, zero
 * hidden automation. SIM: the full aerodynamic model with FCS.
 */
export type Handling = 'arcade' | 'sim';

const KEY = 'jets.handling';

export function getHandling(): Handling {
  try {
    return localStorage.getItem(KEY) === 'sim' ? 'sim' : 'arcade';
  } catch {
    return 'arcade';
  }
}

export function setHandling(h: Handling): void {
  try {
    localStorage.setItem(KEY, h);
  } catch {
    /* private browsing */
  }
}
