/**
 * The one true viewport. Mobile browsers lie: window.innerHeight includes
 * area hidden behind the collapsing URL bar, which cuts off anything
 * anchored to the bottom of the screen. visualViewport tells the truth.
 */
export function viewportSize(): { w: number; h: number } {
  const vv = window.visualViewport;
  return {
    w: Math.round(vv?.width ?? window.innerWidth),
    h: Math.round(vv?.height ?? window.innerHeight)
  };
}

/** Fires on every real viewport change, including URL-bar show/hide. */
export function onViewportChange(cb: () => void): void {
  window.addEventListener('resize', cb);
  window.visualViewport?.addEventListener('resize', cb);
}
