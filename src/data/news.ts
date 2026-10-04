// Newest first. The homepage shows the first four.
export const news = [
  { date: '2026-08', text: 'Released [BlastRadius](/blastradius/) on PyPI' },
  { date: '2026-08', text: 'Wrote up [deadpush](/writing/deadpush-ai-coding-agent-guardrails/), guardrails for AI coding agents' },
  { date: '2026-07', text: 'Selected for Y Combinator AI Startup School' },
  { date: '2025-01', text: 'Started my PhD at the University at Buffalo' },
  { date: '2024-05', text: 'Paper at The ACM Web Conference 2024 ([WWW ’24](/publications))' },
] as const;

/** "2026-08" -> "Aug 2026" */
export const monthLabel = (ym: string) =>
  new Date(`${ym}-15T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

/** Turns [label](href) into links; everything else is escaped text */
export function inlineLinks(text: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return text
    .split(/(\[[^\]]+\]\([^)]+\))/)
    .map((part) => {
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return m ? `<a href="${esc(m[2])}">${esc(m[1])}</a>` : esc(part);
    })
    .join('');
}
