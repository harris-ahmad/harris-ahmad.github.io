---
permalink: /work-experience
title: ""
seo_title: "Work Experience — Harris Ahmad"
description: "Software engineering and research experience — University at Buffalo, Linq.io, Its IT Group, LUMS, and distributed systems work."
keywords: "work experience, software engineer, research engineer, University at Buffalo, distributed systems, transactions, FastAPI, Go, YC, Y Combinator"
---

# Work Experience

## Professional Experience

**Research Software Engineer** <br />
**University at Buffalo (SUNY) - Buffalo, NY** <br />
_January 2025 to Present_

- Building a transaction reordering layer in Go that lowers tail latency and aborts of existing strictly serializable concurrency control without changing its code: up to 75% lower tail latency and 85% fewer aborts across 2PL, OCC and NCC on CloudLab; in preparation for USENIX OSDI 2027.
- Prototyped primary-backup, chain replication, and distributed two-phase locking in Go to stress-test protocol behavior for collaborative AI workloads on CloudLab (NSF-supported).
- Building a coordination-free concurrency protocol for microservices in Java that keeps distributed transactions correct without the central coordinator and global row locks Apache Seata holds across a commit, which serialize conflicting transactions and add a round trip to every one; in preparation for USENIX OSDI 2027.

---

**Software Engineer** <br />
**Linq.io - Dallas, TX (Remote)** <br />
_July 2024 to December 2024_

- Engineered a playground and diagnostics platform for an asset-management system: workflow simulation, feature validation, and API testing, with observability through structured logging, distributed tracing, fault isolation, and real-time monitoring.
- Shipped an on-demand media-generation API (FastAPI, MongoDB) that cut page load by 60% by generating asset thumbnails as users browsed 10K+ inventories.
- Integrated OAuth 2.0 SSO for enterprise accounts so customers could sign in with existing corporate credentials.
- On call twice a week for production pipelines and client issues, tracked in Jira; weekly PR reviews with senior engineers.

---

**System Engineer** <br />
**Its IT Group - Lahore, PK (Contract, Remote)** <br />
_May 2024 to December 2024_

- Redesigned the Node.js / MongoDB backend of an AR app for VTuber/karaoke 3D avatars with WebSockets for real-time comments, notifications, and likes across 5K+ daily active users.
- Implemented a 3D model pipeline for LiDAR scans with a USDZ → GLB converter for Unity integration, cutting manual measurement time by 80%.

---

**Software Engineer** <br />
**Interactive Media Lab, LUMS - Lahore, PK** <br />
_October 2023 to March 2024_

- Built Awaaz-e-Sehat, a HIPAA-aligned e-health platform on Flask and AWS Lambda, improving API latency from 5s → 500ms for 20K+ daily active users.
- Productionized Whisper + GPT-4 transcription into structured clinical notes (95% accuracy, 1K+ recordings/day).
- Ran a serverless ingest and search stack (Lambda, DynamoDB, S3) with automatic scaling; Redis caching reduced API latency by ~30%.

## Research Experience

**Research Software Engineer** <br />
**Network and Systems Group, LUMS - Lahore, PK** <br />
_May 2022 to December 2023_

- Released a public dataset covering 17.6K videos and 46.6K ads across 8 countries with per-video buffer telemetry, the first large-scale YouTube corpus with that coverage.
- Measured how YouTube main-video bitrate drives buffer loss across resolutions (720p ~3× higher latent buffer loss than 360p; 10.1 MB vs 3.4 MB).
- Built the distributed collection and analysis toolchain (Selenium/PyTube) behind the corpus and released it publicly alongside the dataset.
- Published at The ACM Web Conference 2024 (WWW ’24): [doi:10.1145/3589334.3645496](https://doi.org/10.1145/3589334.3645496).

## Teaching Experience

**Teaching Assistant** <br />
**University at Buffalo - Buffalo, NY** <br />
_Spring 2025_

- Modern Networking Concepts (CSE 489/589)

---

**Teaching Assistant** <br />
**Lahore University of Management Sciences - Lahore, PK** <br />
_Spring 2023, Fall 2023_

- CS200: Object Oriented Design in C++ (Spring'23, Fall'23)
- CS582: Distributed Systems (Fall'23)

## Education &amp; Programs

**PhD, Computer Science** <br />
**University at Buffalo (SUNY) - Buffalo, NY** <br />
_January 2025 to May 2028 (expected)_

- Available for Summer 2027 software engineering / research internships, returning to the PhD afterwards.

---

**BS, Computer Science** <br />
**Lahore University of Management Sciences (LUMS) - Lahore, PK** <br />
_September 2020 to May 2024_

---

**Participant** <br />
**Y Combinator AI Startup School - San Francisco Bay Area** <br />
_July 2026_

- Selected from a pool of 30,000 applications for YC's AI Startup School 2026 at Chase Center, a program for builders working on AI products and research.
- Joined office hours and 1:1 conversations with founders and operators about what we're building; networked with peers across AI systems, products, and research.

<figure class="half">
  <a href="{{ '/images/yc-ai-startup-school-2026/yc-badge.jpg' | relative_url }}" title="YC AI Startup School 2026"><img src="{{ '/images/yc-ai-startup-school-2026/yc-badge-thumb.jpg' | relative_url }}" alt="Harris Ahmad at Y Combinator AI Startup School 2026" width="520" height="693" loading="lazy" decoding="async"></a>
  <a href="{{ '/images/yc-ai-startup-school-2026/chase-center.jpg' | relative_url }}" title="Chase Center — YC AI Startup School"><img src="{{ '/images/yc-ai-startup-school-2026/chase-center-thumb.jpg' | relative_url }}" alt="Crowd outside Chase Center during YC AI Startup School office hours" width="520" height="693" loading="lazy" decoding="async"></a>
  <figcaption>YC AI Startup School 2026 — San Francisco (Chase Center)</figcaption>
</figure>

## Earlier Experience

**Backend / frontend coursework projects &amp; short roles at LUMS** (2022–2023) — P2P file sharing with DHTs, speech-therapy MERN app (Guftaar), and a short course-website engagement for an Internet Architecture workshop.

**Machine Learning Developer (freelance), Fiverr** (2021) — dataset cleaning, model comparison, and end-to-end ML pipelines for client projects.
