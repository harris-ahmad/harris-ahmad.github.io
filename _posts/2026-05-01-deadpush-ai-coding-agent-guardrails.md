---
title: "deadpush: guardrails for AI coding agents that commit your secrets"
date: 2026-05-01
permalink: /writing/deadpush-ai-coding-agent-guardrails/
categories:
  - writing
tags:
  - deadpush
  - ai-agents
  - developer-tools
  - security
description: "AI coding agents can leak secrets, commit scratchpads, and pollute repos while you step away. deadpush is an always-on guardian with quarantine, hooks, and enforcement tiers."
excerpt: "Long-running AI coding agents create secrets, debris, and bad commits. How deadpush watches the filesystem and blocks the damage before it ships."
author_profile: true
share: true
---

AI coding agents are great until they are not: a background run can drop API keys into `.env`, commit `CLAUDE.md` scratchpads, or rewrite half a module while you are in a meeting.

**[deadpush](https://github.com/harris-ahmad/deadpush)** is an always-on guardian for that failure mode.

```bash
pip install deadpush
deadpush protect --hardened
```

## The problem it targets

When agents run with broad filesystem and git access, common failure modes include:

- Hardcoded secrets and “temporary” credentials  
- LLM context / rule files committed by accident  
- Burst writes that create debris faster than you can review  
- Local hooks that a determined agent can bypass unless you also enforce server-side

## What deadpush does

- **Realtime watch** — monitors the repo and quarantines dangerous writes  
- **Same enforcement kernel** across daemon, git hooks, and MCP paths  
- **Tiers** — local harden/sandbox modes, plus CI / pre-receive options so violations cannot merge  
- **Safety score** — reacts when multiple agents go wild in parallel  

Details and threat model live in the [repo docs](https://github.com/harris-ahmad/deadpush).

## Who it is for

- Engineers running Cursor / Claude / other agents overnight  
- Teams that want a required status check for secret/debris scans  
- Anyone who has cleaned up an agent-authored commit they did not intend to ship

## Links

- GitHub: [harris-ahmad/deadpush](https://github.com/harris-ahmad/deadpush)  
- Install: `pip install deadpush` · [PyPI](https://pypi.org/project/deadpush/)  
- Related tools: [gitpull](https://github.com/harris-ahmad/gitpull), [ChatLiberate](https://github.com/harris-ahmad/chatliberate)

If you try it and hit a false positive worth teaching the guardian, open an issue or [email me](mailto:harrisah@buffalo.edu).
