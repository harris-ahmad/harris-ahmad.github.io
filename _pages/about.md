---
permalink: /
title: "Harris Ahmad | Distributed Systems PhD @ University at Buffalo"
excerpt: "PhD Student at University at Buffalo specializing in Distributed Systems and Database Optimization. Seeking Software Engineering/ Research Internships for Spring/ Summer 2027."
description: "Harris Ahmad is a PhD student at University at Buffalo researching transactional support for microservices, distributed databases, and serverless systems for collaborative AI. Seeking SWE/research internships for Spring/Summer 2027."
author_profile: true
redirect_from:
  - /about/
  - /about.html
header:
  og_image: /images/profile-pic.png
keywords: "Harris Ahmad, PhD student, software engineer, distributed systems, transactional databases, microservices, serverless, collaborative AI, University at Buffalo, UBuffalo, research internship, summer 2027"
---

<!-- Hero Section -->
<div class="hero-section">
  <h1>Harris Ahmad</h1>
  <p class="tagline">PhD student in distributed systems · building concurrency &amp; transaction systems · previously shipped production backends</p>
  <p class="hero-cta">Seeking Software Engineering / Research Internships for Spring / Summer 2027.</p>
  <p class="hero-email">Email me about internships or referrals: <a href="mailto:harrisah@buffalo.edu?subject=Spring%2FSummer%202027%20internship">harrisah@buffalo.edu</a></p>

  <div class="hero-buttons">
    <a href="/files/Resume.pdf" class="btn-primary" target="_blank">Download Resume</a>
    <a href="https://github.com/harris-ahmad" class="btn-secondary" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/harris-ahmad1" class="btn-secondary" target="_blank">LinkedIn</a>
    <a href="mailto:harrisah@buffalo.edu?subject=Spring%2FSummer%202027%20internship" class="btn-secondary">Contact</a>
  </div>
</div>

<!-- News Section -->
<div class="section" id="news">
  <h2>News</h2>
  <div class="news-timeline">
    {% for item in site.data.news %}
    <article class="news-item">
      <time class="news-date" datetime="{{ item.date }}">{{ item.label }}</time>
      <div class="news-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
        {% if item.links %}
        <div class="news-links">
          {% for link in item.links %}
          <a href="{{ link.url }}"{% if link.url contains "://" %} target="_blank" rel="noopener"{% endif %}>{{ link.label }}</a>{% unless forloop.last %}<span class="news-link-sep">·</span>{% endunless %}
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<!-- About Section -->
<div class="section" id="about">
  <h2>About Me</h2>
  <p>I'm a PhD student in Computer Science at the <strong>University at Buffalo (SUNY)</strong>, advised by <a href="https://sites.google.com/view/haonanlu/home" target="_blank">Dr. Haonan Lu</a>. I work on systems that make collaborative AI workloads reliable at scale — spanning transactions, distributed databases, and serverless backends.</p>

  <p>Before starting my PhD, I spent 2+ years as a professional software engineer building production backends with FastAPI, MongoDB, Redis, and cloud platforms — including media APIs, SSO, and real-time systems at companies such as Linq.io and Its IT Group.</p>

  <p>During my undergraduate studies at LUMS, I was advised by <a href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a>, <a href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a>, and <a href="https://lums.edu.pk/lums_employee/516" target="_blank">Dr. Mian Muhammad Awais</a>. I conducted research on internet affordability and YouTube ad costs, publishing at <strong>ACM WebConf 2024</strong>.</p>

  <p><strong>Teaching:</strong> TA for Modern Networking Concepts (CSE 489/589) at UB, and previously for OOP in C++ and Distributed Systems at LUMS.</p>
</div>

<!-- Research Section -->
<div class="section" id="research">
  <h2>Research</h2>
  <p>I'm building transactional support for microservices, distributed databases, and serverless systems to enable collaborative AI. Current work (unpublished, manuscripts in preparation) includes:</p>
  <ul>
    <li>Evaluating concurrency and replication protocols (primary-backup, chain replication, two-phase locking) for real-time collaborative AI workloads on CloudLab</li>
    <li>Designing a distributed transaction reordering and coordination layer on systems such as FoundationDB and CockroachDB to reduce lock contention, aborts, and tail latency</li>
    <li>Broader agenda: making cross-service and serverless transactions practical for multi-agent / collaborative AI systems</li>
  </ul>
  <p>This research is supported by NSF-funded projects at UB.</p>
</div>

<!-- Skills Section -->
<div class="section" id="skills">
  <h2>Skills</h2>
  <div class="skills-list">
    <p><strong>Core:</strong> Python, Go, C/C++, TypeScript/JavaScript, SQL · FastAPI / Flask / Node · Docker, Linux, AWS · MongoDB, CockroachDB, FoundationDB, Redis · distributed systems &amp; transactions</p>
  </div>
</div>

<!-- Featured Projects Section -->
<div class="section" id="projects">
  <h2>Featured Projects</h2>

  <div class="project-item">
    <h3>deadpush</h3>
    <p>Always-on guardian for AI coding agents — catches secrets, agent debris, and dangerous writes before they land in your repo.</p>
    <ul>
      <li><strong>Problem:</strong> Long-running agents leak keys, commit scratchpads, and pollute context while you're away.</li>
      <li><strong>Built:</strong> Real-time filesystem daemon, quarantine, git hooks, MCP proxy, and hardened / sandbox / CI enforcement tiers.</li>
    </ul>
    <p class="project-install">pip install deadpush</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/deadpush" target="_blank">GitHub</a>
      <a href="https://pypi.org/project/deadpush/" target="_blank">PyPI</a>
      <a href="/writing/deadpush-ai-coding-agent-guardrails/">Write-up</a>
    </div>
  </div>

  <div class="project-item">
    <h3>ChatLiberate</h3>
    <p>Open-source ChatGPT exporter that works where Settings → Export does not — including Business &amp; Teams accounts.</p>
    <ul>
      <li><strong>Problem:</strong> Business/Teams users can't use official export; third-party tools drop branches and images.</li>
      <li><strong>Built:</strong> Chrome extension + Node CLI that emit official <code>conversations.json</code>, full conversation trees, and attachments.</li>
    </ul>
    <p class="project-install">npx chatliberate -o ./my-backup</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/chatliberate" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="project-item">
    <h3>gitpull</h3>
    <p>Go CLI for multi-repo Git workflows — clone, sync, status, branch, and local AI helpers without context-switching.</p>
    <ul>
      <li><strong>Problem:</strong> Managing many clones means repetitive pull/status/commit across directories.</li>
      <li><strong>Built:</strong> Parallel clone/sync, workspace-wide status/diff/stash, plus optional Ollama-powered commit/standup/ask.</li>
    </ul>
    <p class="project-install">brew tap harris-ahmad/tap &amp;&amp; brew install gitpull</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/gitpull" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="project-item">
    <h3>Awaaz E Sehat</h3>
    <p>Flask + AWS Lambda eHealth platform: patient workflows, medical transcription, and a serverless data pipeline for 50K+ recordings.</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/awaaz-e-sehat" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="view-all-link">
    <a href="/projects">View All Projects →</a>
  </div>
</div>

<!-- Work Experience Section -->
<div class="section" id="experience">
  <h2>Work Experience</h2>

  <div class="experience-item">
    <h3>Graduate Researcher</h3>
    <p class="experience-meta">University at Buffalo (SUNY) • Buffalo, NY • January 2025 - Present</p>
    <ul>
      <li>Building a distributed transaction reordering and coordination layer on FoundationDB and CockroachDB in Go that reduces aborts, lock contention, and tail latency (work submitted to ACM SOSP 2026)</li>
      <li>Prototyped primary-backup, chain replication, and distributed two-phase locking in Go to stress-test protocol behavior for collaborative AI workloads on CloudLab</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>YC AI Startup School</h3>
    <p class="experience-meta">Y Combinator • San Francisco, CA • July 2026</p>
    <ul>
      <li>Selected participant at YC AI Startup School 2026 (Chase Center) from a pool of ~30,000 applicants — office hours and 1:1s with founders on AI products and systems</li>
    </ul>
    <div class="photo-gallery">
      <a href="/images/yc-ai-startup-school-2026/yc-badge.jpg" target="_blank" rel="noopener">
        <img src="/images/yc-ai-startup-school-2026/yc-badge.jpg" alt="At Y Combinator AI Startup School 2026">
      </a>
      <a href="/images/yc-ai-startup-school-2026/chase-center.jpg" target="_blank" rel="noopener">
        <img src="/images/yc-ai-startup-school-2026/chase-center.jpg" alt="Chase Center during YC AI Startup School 2026">
      </a>
    </div>
  </div>

  <div class="experience-item">
    <h3>Software Engineer</h3>
    <p class="experience-meta">Linq.io • Dallas, TX (Remote) • July 2024 - December 2024</p>
    <ul>
      <li>Shipped an on-demand media-generation API (FastAPI, MongoDB) that cut page load by 60% for 10K+ item inventories</li>
      <li>Integrated OAuth 2.0 SSO for enterprise accounts; built admin debugging dashboards that cut troubleshooting time for support tickets</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Engineer</h3>
    <p class="experience-meta">Interactive Media Lab, LUMS • Lahore, PK • October 2023 - March 2024</p>
    <ul>
      <li>Built Awaaz-e-Sehat on Flask and AWS Lambda (5s → 500ms API latency) with serverless ingest over 50K+ clinical recordings</li>
      <li>Productionized Whisper + GPT-4 transcription into structured clinical notes (95% accuracy, 1K+ recordings/day)</li>
    </ul>
  </div>

  <div class="view-all-link">
    <a href="/work-experience">View Full Experience →</a>
  </div>
</div>

<!-- Publications Section -->
<div class="section" id="publications">
  <h2>Publications</h2>

  <div class="publication-item">
    <h3>Uncovering the Hidden Data Costs of Mobile YouTube Video Ads</h3>
    <p class="publication-authors">Emaan Atique*, Saad Sher Alam*, <strong>Harris Ahmad</strong>, Ihsan Ayyub Qazi, Zafar Ayyub Qazi (*co-primary)</p>
    <p class="publication-venue">ACM Web Conference 2024 (WWW '24) • Singapore • May 2024 · <a href="https://doi.org/10.1145/3589334.3645496" target="_blank">doi:10.1145/3589334.3645496</a></p>
    <p class="publication-summary">First independent empirical study of mobile YouTube ad data costs from the user perspective. We streamed <strong>17,600</strong> main videos and <strong>46,600+</strong> ads (~8,225 hours) across 8 countries and showed latent buffer wastage — e.g. users still pay for 80–100% of a skippable ad's data ~31–53% of the time after skipping, mid-roll ads force re-download of ~71s of main-video on average, and excess losses average <strong>~6.7%</strong> of a 2GB plan. Public dataset and toolchain released.</p>
    <div class="project-links">
      <a href="/files/ytafford-www24.pdf" target="_blank">PDF</a>
      <a href="/writing/youtube-mobile-ad-data-costs/">Explainer</a>
      <a href="https://github.com/nsgLUMS/videoads-affordability-www24" target="_blank">Code &amp; data</a>
      <a href="https://scholar.google.com/citations?hl=en&user=4AY0nvEAAAAJ" target="_blank">Google Scholar</a>
    </div>
  </div>
</div>

<!-- Contact Section -->
<div class="section" id="contact">
  <h2>Get In Touch</h2>
  <p>I'm seeking <strong>software engineering / research internship</strong> opportunities for <strong>Spring / Summer 2027</strong> — especially backend, infrastructure, distributed systems, and research engineering roles. Feel free to reach out.</p>

  <p style="margin-top: 1rem;">
    <strong>Email:</strong> <a href="mailto:harrisah@buffalo.edu?subject=Spring%2FSummer%202027%20internship">harrisah@buffalo.edu</a><br>
    <strong>Location:</strong> Buffalo, New York<br>
    <strong>GitHub:</strong> <a href="https://github.com/harris-ahmad" target="_blank">github.com/harris-ahmad</a><br>
    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harris-ahmad1" target="_blank">linkedin.com/in/harris-ahmad1</a><br>
    <strong>ORCID:</strong> <a href="https://orcid.org/0009-0008-5402-8398" target="_blank">orcid.org/0009-0008-5402-8398</a>
  </p>
</div>
