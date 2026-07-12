/**
 * Dynasty backup codes. Everything lives in localStorage, which means one
 * cleared browser erases a century of family history — so the whole save
 * (dynasty, campaigns, preferences) packs into a copyable code and back.
 */

const KEYS = [
  'jets.dynasty.v1',
  'jets.campaign.v1',
  'jets.mount.v1',
  'jets.best.wwi',
  'jets.best.modern',
  'jets.handling',
  'jets.difficulty'
];

const PREFIX = 'JETS1.';

/** Pack the whole save into a copyable code. */
export function exportSave(): string {
  const bundle: Record<string, string> = {};
  for (const k of KEYS) {
    try {
      const v = localStorage.getItem(k);
      if (v !== null) bundle[k] = v;
    } catch {
      /* private browsing */
    }
  }
  const json = JSON.stringify(bundle);
  return PREFIX + btoa(unescape(encodeURIComponent(json)));
}

/** Restore a code. Returns an error string, or null on success. */
export function importSave(code: string): string | null {
  const trimmed = code.trim();
  if (!trimmed.startsWith(PREFIX)) return 'That does not look like a JETS save code.';
  let bundle: Record<string, string>;
  try {
    bundle = JSON.parse(decodeURIComponent(escape(atob(trimmed.slice(PREFIX.length)))));
  } catch {
    return 'Code is damaged — check that the whole thing was copied.';
  }
  if (typeof bundle !== 'object' || bundle === null || !bundle['jets.dynasty.v1']) {
    return 'Code decodes, but there is no dynasty inside it.';
  }
  try {
    JSON.parse(bundle['jets.dynasty.v1']); // sanity: dynasty must be JSON
  } catch {
    return 'The dynasty in this code is corrupted.';
  }
  try {
    for (const k of KEYS) {
      if (bundle[k] !== undefined) localStorage.setItem(k, bundle[k]);
    }
  } catch {
    return 'Could not write the save (private browsing?).';
  }
  return null;
}
