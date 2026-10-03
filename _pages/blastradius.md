---
permalink: /blastradius/
title: ""
seo_title: "BlastRadius — cross-repo infrastructure memory for coding agents"
description: "BlastRadius gives Claude Code memory across repository boundaries. It indexes Docker images, Terraform modules, GitHub Actions, Helm charts and npm packages, warns which other repos an artifact reaches before you change it, and filters CVEs down to the ones your pins actually resolve to."
author_profile: true
---

<div class="br-page" markdown="0">

<section class="br-hero">
  <div class="br-eyebrow">Open source · MIT</div>
  <h1>BlastRadius</h1>
  <p class="br-lede">Cross-repo infrastructure memory for coding agents. It knows who else
  depends on an artifact <em>before</em> you change it, and watches those pins for
  vulnerabilities while nobody is asking.</p>

  <div class="br-install">
    <code>pip install blastradius-mcp</code>
  </div>

  <div class="br-links">
    <a class="br-btn br-btn-primary" href="https://github.com/harris-ahmad/blastradius-mcp">GitHub</a>
    <a class="br-btn" href="https://pypi.org/project/blastradius-mcp/">PyPI</a>
  </div>
</section>

<section class="br-section">
  <h2>The problem</h2>
  <p>A coding agent is excellent inside one repository and blind across many. Bump a base
  image, retag a GitHub Action, move a Terraform module — nothing tells you the four other
  repositories pinning the same thing. The knowledge exists. It just isn't anywhere the
  agent will look.</p>
  <p>This is not a code graph. Excellent tools already index functions, classes and imports.
  BlastRadius indexes the other half — the infrastructure artifacts — and answers the
  question a single session cannot: <strong>if I bump this, who breaks?</strong></p>
</section>

<section class="br-section">
  <h2>The idea: hooks, not tools</h2>
  <p>An MCP server can expose a perfect tool and the model can simply not call it. Nothing
  errors, nothing is misconfigured — the information just doesn't arrive, and you cannot
  tell "no impact found" from "never asked."</p>
  <p>Hooks invert that. The harness runs them, so what they return lands in context whether
  the model wanted it or not. That single distinction decided the architecture.</p>

  <div class="br-flow">
    <div class="br-flow-row">
      <div class="br-node br-node-event">Agent reads<br><code>package.json</code></div>
      <div class="br-arrow" aria-hidden="true">→</div>
      <div class="br-node br-node-hook"><span class="br-tag">PreToolUse</span>inject</div>
      <div class="br-arrow" aria-hidden="true">→</div>
      <div class="br-node br-node-out">Cross-repo impact,<br>unprompted</div>
    </div>
    <div class="br-flow-row">
      <div class="br-node br-node-event">Session ends</div>
      <div class="br-arrow" aria-hidden="true">→</div>
      <div class="br-node br-node-hook"><span class="br-tag">Stop</span>capture</div>
      <div class="br-arrow" aria-hidden="true">→</div>
      <div class="br-node br-node-out">Index learns<br>this repo</div>
    </div>
  </div>

  <p class="br-note">The tradeoff is real: you spend context on every matching tool call,
  deterministically. So the cost is measured rather than assumed — <code>blastradius cost</code>
  reports what every injection spends — and it stays silent unless something is genuinely shared.</p>
</section>

<section class="br-section">
  <h2>What it does unasked</h2>
  <p>Open a repo, ask for something ordinary — <em>"bump react to 19"</em> — and before the
  agent reads a line of <code>package.json</code>, a hook has already told it:</p>

  <blockquote class="br-quote">
    <code>acme/checkout</code> (a separate repo) also depends on <code>react@^18.2.0</code>,
    and <code>lodash</code> here is shared with <code>acme/notifications</code> and
    <code>acme/checkout</code> too.
  </blockquote>

  <p>Two repositories that were not open, not mentioned, and have no trace in the working
  directory. The agent never called a tool to find them.</p>
</section>

<section class="br-section">
  <h2>And what it produces</h2>
  <p><strong>43 advisories from OSV. 9 that apply to your pinned versions.</strong></p>

  <div class="br-terminal">
    <div class="br-terminal-bar"><span></span><span></span><span></span></div>
<pre><code><span class="br-crit">[CRITICAL]</span> vitest                 CVE-2026-47429
           When Vitest UI server is listening, arbitrary file
           can be read and executed
           <span class="br-dim">reaches:</span> 3.2.4  (installed version)
           <span class="br-dim">in:</span>      acme/checkout
<span class="br-high">[HIGH    ]</span> lodash                 CVE-2021-23337
           lodash vulnerable to Code Injection via `_.template`
           <span class="br-dim">reaches:</span> 4.17.21, ^4.17.21</code></pre>
  </div>

  <p>Advisories are matched against what your pins can <em>actually resolve to</em>. A
  manifest saying <code>^5.2.0</code> permits a vulnerable 5.2.0; the lockfile saying
  <code>5.4.19</code> permits none of them. For <code>vite</code> alone that is the
  difference between 13 alerts and 6. Anything unknowable — a floating tag, a digest, a git
  ref — stays flagged, because hiding a real vulnerability is far worse than showing one
  that turns out not to apply.</p>
</section>

<section class="br-section">
  <h2>Measured, not asserted</h2>
  <p>Extraction is scored against a planted corpus of six repositories with <strong>the hard
  cases put there on purpose</strong>: multi-stage build aliases, <code>ARG</code>-templated base
  images, a <code>FROM</code> inside a heredoc, relative module sources,
  <code>workspace:</code> protocols, and a registry with a port that looks like a tag.</p>

  <div class="br-stats">
    <div class="br-stat"><div class="br-stat-n">39/39</div><div class="br-stat-l">artifacts found</div></div>
    <div class="br-stat"><div class="br-stat-n">39/39</div><div class="br-stat-l">version specs intact</div></div>
    <div class="br-stat"><div class="br-stat-n">0</div><div class="br-stat-l">false positives</div></div>
    <div class="br-stat"><div class="br-stat-n">6</div><div class="br-stat-l">planted repositories</div></div>
  </div>

  <p class="br-note"><strong>The second number is the one that matters.</strong> A model that
  quietly normalises <code>^18.2.0</code> to <code>18.2.0</code> scores full recall while
  destroying the entire signal — the range operator is the information. Recall alone would
  report 100% on output that is worthless.</p>
</section>

<section class="br-section">
  <h2>Install</h2>
  <p>Everything is local: one SQLite file at <code>~/.blastradius/index.db</code>. No account,
  no server, no API key, nothing leaves your machine.</p>

  <pre class="br-code"><code>pip install blastradius-mcp

blastradius install     <span class="br-dim"># wire hooks + MCP server into Claude Code</span>
blastradius doctor      <span class="br-dim"># verify — by running the hooks for real</span>
blastradius index ~/code  <span class="br-dim"># bootstrap from repos you already have</span></code></pre>

  <p>Or as a Claude Code plugin:</p>

  <pre class="br-code"><code>/plugin marketplace add harris-ahmad/blastradius-mcp
/plugin install blastradius@blastradius</code></pre>

  <p class="br-note">That last bootstrap step matters more than it looks. Capture runs when a
  session ends — <em>after</em> the reads — and cross-repo impact needs a second indexed
  repository before it has anything to say. Without it the tool is correct and completely
  silent for days.</p>
</section>

<section class="br-section br-closing">
  <p>376 tests across 3.6K lines in 16 modules, run on Python 3.11–3.13. MIT licensed.</p>
  <div class="br-links">
    <a class="br-btn br-btn-primary" href="https://github.com/harris-ahmad/blastradius-mcp">Read the source</a>
    <a class="br-btn" href="https://pypi.org/project/blastradius-mcp/">blastradius-mcp on PyPI</a>
  </div>
</section>

</div>

<style>
/* BlastRadius project page — warm, paper-toned palette, scoped to .br-page
   so nothing here can leak into the rest of the site. */
.br-page {
  --br-paper:  #f4f2ec;
  --br-paper2: #faf9f5;
  --br-card:   #fff;
  --br-ink:    #1f1e1d;
  --br-body:   #333130;
  --br-soft:   #3b3936;
  --br-muted:  #6b6862;
  --br-line:   #e3ded2;
  --br-clay:   #ac5435;
  --br-clay-l: #d9775720;
  --br-clay-d: #8f4527;
  --br-fill:   #b75a39;
  --br-fill-h: #a94f30;
  --br-edge:   #131211;
  --br-serif:  ui-serif, Georgia, "Iowan Old Style", "Times New Roman", serif;
  --br-mono:   ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  color: var(--br-ink);
  line-height: 1.65;
}
/* Dark theme: neutral surfaces to sit on the site's dark background, with a
   lighter clay so accents keep their contrast. Explicit choice, then system. */
@media screen {
  html[data-theme="dark"] .br-page {
    --br-paper:  #20252b;
    --br-paper2: #1b1f24;
    --br-card:   #242930;
    --br-ink:    #eef0f2;
    --br-body:   #c9cdd2;
    --br-soft:   #c9cdd2;
    --br-muted:  #9aa2a9;
    --br-line:   #2b3037;
    --br-clay:   #d97757;
    --br-clay-l: #d977572e;
    --br-clay-d: #e8967a;
    --br-fill:   #b3542f;
    --br-fill-h: #bb5734;
    --br-edge:   #2b3037;
  }
}
@media screen and (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .br-page {
    --br-paper:  #20252b;
    --br-paper2: #1b1f24;
    --br-card:   #242930;
    --br-ink:    #eef0f2;
    --br-body:   #c9cdd2;
    --br-soft:   #c9cdd2;
    --br-muted:  #9aa2a9;
    --br-line:   #2b3037;
    --br-clay:   #d97757;
    --br-clay-l: #d977572e;
    --br-clay-d: #e8967a;
    --br-fill:   #b3542f;
    --br-fill-h: #bb5734;
    --br-edge:   #2b3037;
  }
}
.br-page p { color: var(--br-body); }

/* ── hero ─────────────────────────────────────────────────────────── */
.br-hero {
  background: linear-gradient(160deg, var(--br-paper) 0%, var(--br-paper2) 100%);
  border: 1px solid var(--br-line);
  border-radius: 14px;
  padding: 2.6rem 2rem 2.2rem;
  margin-bottom: 2.5rem;
}
.br-eyebrow {
  font-family: var(--br-mono);
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--br-clay);
  margin-bottom: 0.9rem;
}
.br-hero h1 {
  font-family: var(--br-serif);
  font-size: 2.9rem;
  line-height: 1.1;
  margin: 0 0 0.7rem;
  letter-spacing: -0.02em;
  color: var(--br-ink);
}
.br-lede {
  font-size: 1.12rem;
  max-width: 34rem;
  margin: 0 0 1.6rem;
  color: var(--br-soft) !important;
}
.br-install code {
  display: inline-block;
  font-family: var(--br-mono);
  font-size: 0.95rem;
  background: var(--br-card);
  border: 1px solid var(--br-line);
  border-radius: 8px;
  padding: 0.6rem 1rem;
  color: var(--br-ink);
}
.br-install::before {
  content: "$";
  font-family: var(--br-mono);
  color: var(--br-clay);
  margin-right: 0.5rem;
  font-size: 0.95rem;
}
.br-links { margin-top: 1.4rem; display: flex; flex-wrap: wrap; gap: 0.6rem; }
.br-btn {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1.05rem;
  border-radius: 7px;
  border: 1px solid var(--br-line);
  background: var(--br-card);
  color: var(--br-ink) !important;
  text-decoration: none !important;
  transition: border-color .15s ease, transform .15s ease;
}
.br-btn:hover { border-color: var(--br-clay); transform: translateY(-1px); }
.br-btn-primary {
  background: var(--br-fill);
  border-color: var(--br-fill);
  color: #fff !important;
}
.br-btn-primary:hover { background: var(--br-fill-h); border-color: var(--br-fill-h); }

/* ── sections ─────────────────────────────────────────────────────── */
.br-section { margin: 0 0 2.6rem; }
.br-section h2 {
  font-family: var(--br-serif);
  font-size: 1.5rem;
  letter-spacing: -0.01em;
  margin: 0 0 0.85rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--br-line);
}
.br-page code {
  font-family: var(--br-mono);
  font-size: 0.88em;
  background: var(--br-clay-l);
  color: var(--br-clay-d);
  padding: 0.12em 0.36em;
  border-radius: 4px;
}
.br-note {
  font-size: 0.95rem;
  color: var(--br-muted) !important;
  border-left: 2px solid var(--br-clay);
  padding-left: 1rem;
  margin-top: 1.2rem;
}
.br-quote {
  border-left: 3px solid var(--br-clay);
  background: var(--br-paper2);
  margin: 1.2rem 0;
  padding: 1rem 1.2rem;
  font-size: 0.98rem;
  color: var(--br-soft);
}

/* ── hook flow ────────────────────────────────────────────────────── */
.br-flow {
  background: var(--br-paper2);
  border: 1px solid var(--br-line);
  border-radius: 12px;
  padding: 1.4rem 1.2rem;
  margin: 1.5rem 0;
}
.br-flow-row {
  display: flex;
  align-items: stretch;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.br-flow-row + .br-flow-row { margin-top: 0.9rem; }
.br-node {
  flex: 1 1 0;
  min-width: 8.5rem;
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
  font-size: 0.84rem;
  line-height: 1.4;
  background: var(--br-card);
  border: 1px solid var(--br-line);
}
.br-node code { background: none; color: inherit; padding: 0; font-size: 0.95em; }
.br-node-hook {
  border-color: var(--br-clay);
  background: var(--br-card);
  font-family: var(--br-mono);
  font-size: 0.82rem;
}
.br-node-out { background: var(--br-paper); font-weight: 500; }
.br-tag {
  display: block;
  font-size: 0.66rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--br-clay);
  margin-bottom: 0.15rem;
}
.br-arrow {
  align-self: center;
  color: var(--br-clay);
  font-size: 1.05rem;
  flex: 0 0 auto;
}

/* ── terminal ─────────────────────────────────────────────────────── */
.br-terminal {
  background: #1f1e1d;
  border-radius: 11px;
  overflow: hidden;
  margin: 1.3rem 0;
  border: 1px solid var(--br-edge);
}
.br-terminal-bar {
  display: flex;
  gap: 0.42rem;
  padding: 0.7rem 0.9rem;
  background: #2a2927;
  border-bottom: 1px solid #131211;
}
.br-terminal-bar span {
  width: 11px; height: 11px; border-radius: 50%; background: #4a4844;
}
.br-terminal pre {
  margin: 0;
  padding: 1.1rem 1.2rem;
  background: none;
  border: none;
  overflow-x: auto;
}
.br-terminal code {
  background: none;
  color: #e8e6e1;
  padding: 0;
  font-family: var(--br-mono);
  font-size: 0.79rem;
  line-height: 1.65;
  white-space: pre;
}
.br-crit { color: #e06c5a; font-weight: 600; }
.br-high { color: #d9a05b; font-weight: 600; }
.br-dim  { color: #8a8781; }

/* ── stats ────────────────────────────────────────────────────────── */
.br-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 0.8rem;
  margin: 1.5rem 0;
}
.br-stat {
  background: var(--br-paper2);
  border: 1px solid var(--br-line);
  border-radius: 10px;
  padding: 1.1rem 0.9rem;
  text-align: center;
}
.br-stat-n {
  font-family: var(--br-serif);
  font-size: 1.75rem;
  line-height: 1.1;
  color: var(--br-clay);
  letter-spacing: -0.02em;
}
.br-stat-l {
  font-size: 0.76rem;
  color: var(--br-muted);
  margin-top: 0.35rem;
  letter-spacing: 0.01em;
}

/* ── code blocks ──────────────────────────────────────────────────── */
.br-code {
  background: var(--br-paper2) !important;
  border: 1px solid var(--br-line);
  border-radius: 10px;
  padding: 1rem 1.15rem;
  overflow-x: auto;
  margin: 1rem 0;
}
.br-code code {
  background: none;
  color: var(--br-ink);
  padding: 0;
  font-family: var(--br-mono);
  font-size: 0.84rem;
  line-height: 1.7;
  white-space: pre;
}
.br-code .br-dim { color: var(--br-muted); }

.br-closing {
  border-top: 1px solid var(--br-line);
  padding-top: 1.6rem;
  margin-bottom: 1rem;
}
.br-closing p { color: var(--br-muted) !important; font-size: 0.92rem; margin-bottom: 0; }

@media (max-width: 640px) {
  .br-hero { padding: 1.9rem 1.3rem; }
  .br-hero h1 { font-size: 2.2rem; }
  .br-arrow { display: none; }
  .br-node { flex-basis: 100%; }
}
</style>
