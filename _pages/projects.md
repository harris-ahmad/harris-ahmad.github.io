---
permalink: /projects
title: ""
seo_title: "Projects — Harris Ahmad"
description: "Open-source and research engineering projects by Harris Ahmad — BlastRadius, deadpush, ChatLiberate, gitpull, Awaaz-e-Sehat, and systems/measurement artifacts."
---

# Projects

1. **BlastRadius**  
   Cross-repo infrastructure memory for coding agents. Knows who else depends on an artifact before you change it, and watches those pins for CVEs.

   - **Problem:** Agents are excellent inside one repo and blind across many — nothing tells you which other repos pin the base image you just bumped.
   - **Built:** Claude Code hooks that inject cross-repo impact unprompted, an MCP server on PyPI and the Claude Code plugin marketplace, and OSV monitoring filtered to versions your pins actually resolve to. A planted 6-repo corpus scores 39/39 recall with 39/39 version specs intact and 0 false positives; 376 tests.
   - **Install:** `pip install blastradius-mcp`
   - **[Read more →](/blastradius/)**

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/blastradius-mcp" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/blastradius-mcp" alt="GitHub Repo - BlastRadius" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/blastradius-mcp" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/blastradius-mcp?style=social" alt="GitHub stars - BlastRadius">
      </a>
   </div>
   <br />

1. **deadpush**  
   Always-on guardian for AI coding agents. Checkpoints every file a destructive command would touch, then blocks the command — and catches secrets and agent debris before they land in your repo.

   - **Problem:** Long-running agents destroy work, leak keys, commit scratchpads, and pollute context while you're away.
   - **Built:** Real-time filesystem daemon with a content-addressed SHA-256 journal and two-phase preflight restore, quarantine, git hooks, 22 MCP tools plus an MCP proxy, and hardened / sandbox / CI enforcement tiers. A 48-run ablation doubled block rate (0.33 → 0.67) and raised work preserved (0.92 → 1.00) at zero false positives; 13 formally specified guarantees, 679 tests.
   - **Install:** `pip install deadpush`

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/deadpush" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/deadpush" alt="GitHub Repo - deadpush" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/deadpush" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/deadpush?style=social" alt="GitHub stars - deadpush">
      </a>
   </div>
   <br />

2. **ChatLiberate**  
   Open-source ChatGPT exporter that works where Settings → Export does not — including Business &amp; Teams accounts.

   - **Problem:** Business/Teams users can't use official export; third-party tools drop branches and images.
   - **Built:** Chrome extension + Node CLI that emit official `conversations.json`, full conversation trees, and attachments.
   - **Install:** from source (not on npm) — clone [the repo](https://github.com/harris-ahmad/chatliberate), run `npm install && npm run build:extension`, then load `apps/extension/` unpacked in Chrome, or run the CLI with `node apps/cli/bin/chatliberate.js -o ./my-backup`.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/chatliberate" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/chatliberate" alt="GitHub Repo - ChatLiberate" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/chatliberate" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/chatliberate?style=social" alt="GitHub stars - ChatLiberate">
      </a>
   </div>
   <br />

3. **gitpull**  
   Go CLI for multi-repo Git workflows — clone, sync, status, branch, and local AI helpers without context-switching.

   - **Problem:** Managing many clones means repetitive pull/status/commit across directories.
   - **Built:** Parallel clone/sync, workspace-wide status/diff/stash, plus optional Ollama-powered commit/standup/ask.
   - **Install:** `brew tap harris-ahmad/tap && brew install gitpull`

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/gitpull" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/gitpull" alt="GitHub Repo - gitpull" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/gitpull" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/gitpull?style=social" alt="GitHub stars - gitpull">
      </a>
   </div>
   <br />

4. **Awaaz-e-Sehat**  
   HIPAA-aligned e-health platform on Flask and AWS Lambda, built as a Software Engineer at the LUMS Interactive Media Lab — patient workflows, a serverless recording pipeline, and Whisper + GPT-4 transcription into structured clinical notes (95% accuracy, 1K+ recordings/day). Cut API latency from 5s to 500ms for 20K+ daily active users.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/awaaz-e-sehat" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/awaaz-e-sehat" alt="GitHub Repo - Awaaz-e-Sehat" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/awaaz-e-sehat" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/awaaz-e-sehat?style=social" alt="GitHub stars - Awaaz-e-Sehat">
      </a>
   </div>
   <br />

5. **Uncovering the Hidden Data Costs of Mobile YouTube Video Ads**  
   Artifact supporting our paper at The ACM Web Conference 2024 (WWW ’24) on YouTube ad data costs — a public dataset and toolchain covering 17.6K videos and 46.6K ads across 8 countries, with per-video buffer telemetry.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/nsgLums/videoads-affordability-www24" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/nsgLums/videoads-affordability-www24" alt="GitHub Repo - Uncovering the Hidden Data Costs of Mobile YouTube Video Ads" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/nsgLums/videoads-affordability-www24" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/nsgLums/videoads-affordability-www24?style=social" alt="GitHub stars - Uncovering the Hidden Data Costs of Mobile YouTube Video Ads">
      </a>
   </div>
   <br />

6. **SimpleAuth - npm Package**  
   Extensible authentication module for Node.js built on Passport.js — register, login, and verify credentials with a simple API. Available on npm as `@harrisahmad/simpleauth`.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; display: flex; justify-content: space-between; align-items: center;">
      <div style="flex: 1; text-align: center; margin-right: 10px;">
         <a href="https://github.com/harris-ahmad/AuthenticationSystem" target="_blank">
            <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/AuthenticationSystem" alt="GitHub Repo - AuthenticationSystem" style="width:100%; border-radius: 8px;">
         </a>
         <br>
         <a href="https://github.com/harris-ahmad/AuthenticationSystem" target="_blank">
            <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/AuthenticationSystem?style=social" alt="GitHub stars - AuthenticationSystem">
         </a>
      </div>
      <div style="flex: 1; text-align: center; margin-left: 10px;">
         <a href="https://www.npmjs.com/package/@harrisahmad/simpleauth" target="_blank">
            <img loading="lazy" decoding="async" src="https://nodei.co/npm/@harrisahmad/simpleauth.png" alt="npm Package - SimpleAuth" style="width:100%; border-radius: 8px;">
         </a>
      </div>
   </div>
   <br />

7. **Guftaar - A Speech Therapy Web Application**  
   English-language m-Health app for people who stutter (PWS), connecting users with speech therapists and offering virtual treatment support — built to improve access in contexts where therapy resources are limited.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/Guftaar-Speech" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/Guftaar-Speech" alt="GitHub Repo - Guftaar" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/Guftaar-Speech" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/Guftaar-Speech?style=social" alt="GitHub stars - Guftaar">
      </a>
   </div>
   <br />

8. **Everything Object Oriented Programming**  
   Structured C++ OOP guide and exercises created following my TA role for CS200 at LUMS (Spring/Fall 2023).

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/Everything-OOP" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/Everything-OOP" alt="GitHub Repo - Everything-OOP" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/Everything-OOP" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/Everything-OOP?style=social" alt="GitHub stars - Everything-OOP">
      </a>
   </div>
   <br />

9. **Data Structures and Algorithms**  
   Implementations of core data structures and algorithms in C++, Go, JavaScript, and Python.

   <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
      <a href="https://github.com/harris-ahmad/DataStructuresAndAlgorithms" target="_blank" style="display: block;">
         <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/DataStructuresAndAlgorithms" alt="GitHub Repo - Data Structures and Algorithms" style="width:100%; border-radius: 8px;">
      </a>
      <br>
      <a href="https://github.com/harris-ahmad/DataStructuresAndAlgorithms" target="_blank">
         <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/DataStructuresAndAlgorithms?style=social" alt="GitHub stars - Data Structures and Algorithms">
      </a>
   </div>
   <br />

10. **Crypto Telegram Bot (Go)**  
    Real-time cryptocurrency price monitoring and alerts via CoinGecko, implemented in Go.

    <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
       <a href="https://github.com/harris-ahmad/TelegramBot-Go" target="_blank" style="display: block;">
          <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/TelegramBot-Go" alt="GitHub Repo - Crypto Telegram Bot" style="width:100%; border-radius: 8px;">
       </a>
       <br>
       <a href="https://github.com/harris-ahmad/TelegramBot-Go" target="_blank">
          <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/TelegramBot-Go?style=social" alt="GitHub stars - Crypto Telegram Bot">
       </a>
    </div>
    <br />

11. **Real-time Chat Application with Analytics**  
    Flask chat app with WebSockets, sentiment analysis, user analytics, and PostgreSQL-backed storage.

    <div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 600px; text-align: center;">
       <a href="https://github.com/harris-ahmad/ChatApp-Flask" target="_blank" style="display: block;">
          <img loading="lazy" decoding="async" src="https://opengraph.githubassets.com/1/harris-ahmad/ChatApp-Flask" alt="GitHub Repo - Real-time Chat Application with Analytics" style="width:100%; border-radius: 8px;">
       </a>
       <br>
       <a href="https://github.com/harris-ahmad/ChatApp-Flask" target="_blank">
          <img loading="lazy" decoding="async" src="https://img.shields.io/github/stars/harris-ahmad/ChatApp-Flask?style=social" alt="GitHub stars - Real-time Chat Application with Analytics">
       </a>
    </div>
