---
permalink: /
title: ""
excerpt: "PhD Student at University at Buffalo specializing in Distributed Systems and Database Optimization. Seeking Software Engineering / Research Internships for Summer 2027."
description: "Harris Ahmad is a PhD student at University at Buffalo researching transactional support for microservices, distributed databases, and serverless systems for collaborative AI. Seeking SWE/research internships for Summer 2027."
seo_title: "Harris Ahmad | Distributed Systems PhD @ University at Buffalo"
author_profile: true
redirect_from:
  - /about/
  - /about.html
header:
  og_image: /images/profile-pic.png
keywords: "Harris Ahmad, PhD student, software engineer, distributed systems, transactional databases, microservices, serverless, collaborative AI, University at Buffalo, UBuffalo, research internship, software engineering internship, summer 2027"
---

<!-- Hero Section -->
<div class="hero-section">
  <h1>Harris Ahmad</h1>
  <p class="tagline">PhD student in distributed systems · building concurrency &amp; transaction systems · previously shipped production backends</p>
  <p class="hero-cta">Seeking Software Engineering / Research Internships for Summer 2027.</p>
  <p class="hero-email">Email me about internships or referrals: <a href="mailto:harrisah@buffalo.edu?subject=Summer%202027%20internship">harrisah@buffalo.edu</a></p>

  <div class="hero-buttons">
    <a href="/files/Resume.pdf" class="btn-primary" target="_blank">Download Resume</a>
    <a href="https://github.com/harris-ahmad" class="btn-secondary" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/harris-ahmad1" class="btn-secondary" target="_blank">LinkedIn</a>
    <a href="mailto:harrisah@buffalo.edu?subject=Summer%202027%20internship" class="btn-secondary">Contact</a>
    {% if site.cal_link and site.cal_link != "" %}<a href="/meet" class="btn-secondary">Book a 1:1</a>{% endif %}
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

  <p>Before my PhD, I built production backends as a Software Engineer at Linq.io (FastAPI, MongoDB, OAuth 2.0 SSO), a System Engineer at Its IT Group (a real-time WebSocket backend in Node.js), and a Software Engineer at the Interactive Media Lab at LUMS (a serverless e-health platform on Flask and AWS Lambda).</p>

  <p>During my undergraduate studies at LUMS, I was advised by <a href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a> and <a href="https://lums.edu.pk/lums_employee/516" target="_blank">Dr. Mian Muhammad Awais</a>. As a Research Software Engineer in the Network and Systems Group, I worked on internet affordability and YouTube ad data costs, publishing at <strong>WWW '24</strong>.</p>
</div>

<!-- Research Section -->
<div class="section" id="research">
  <h2>Research</h2>
  <p>Collaborative AI workloads put many writers on shared state, and that is where distributed transactions struggle: under contention they abort, wait on locks, or serialize behind a central coordinator, and tail latency climbs. I'm building transactional support for microservices, distributed databases, and serverless systems that keeps transactions correct without that cost. Current work:</p>
  <ul>
    <li>A transaction reordering and coordination layer over Apple's FoundationDB and CockroachDB, in Go, that reduces aborts, lock contention, and tail latency by 70% — in preparation for USENIX OSDI 2027</li>
    <li>A coordination-free concurrency protocol for microservices, in Java, that drops the central coordinator and global row locks Apache Seata holds across a commit — in preparation for USENIX OSDI 2027</li>
    <li>Prototypes of primary-backup, chain replication, and distributed two-phase locking in Go that stress-test protocol behavior for collaborative AI workloads on CloudLab</li>
  </ul>
  <p>This research is supported by NSF-funded projects at UB.</p>
</div>

<!-- Skills Section -->
<div class="section" id="skills">
  <h2>Skills</h2>
  <div class="skills-list">
    <p><strong>Core:</strong> Python, Go, Java, C/C++, TypeScript/JavaScript, SQL · FastAPI / Flask / Node.js · FoundationDB, CockroachDB, PostgreSQL, MongoDB, Redis · Docker, Kubernetes, Linux, AWS · distributed systems &amp; transactions</p>
  </div>
</div>

<!-- Featured Projects Section -->
<div class="section" id="projects">
  <h2>Featured Projects</h2>

  <div class="project-item">
    <h3>BlastRadius</h3>
    <p>Cross-repo dependency memory for coding agents — tells an agent which other repositories break before it bumps a shared Docker image, Terraform module, GitHub Action, Helm chart, or npm package.</p>
    <ul>
      <li><strong>Problem:</strong> A coding agent sees one repository at a time, so nothing warns it about the other repos pinning the artifact it is about to change.</li>
      <li><strong>Built:</strong> MCP server (336 installs on PyPI) and Claude Code plugin whose hooks fire unprompted, plus an OSV daemon that surfaces shared CVEs.</li>
      <li><strong>Result:</strong> 39/39 recall with 39/39 version specs intact and 0 false positives on a planted 6-repo corpus, backed by 376 tests.</li>
    </ul>
    <p class="project-install">pip install blastradius-mcp</p>
    <div class="project-links">
      <a href="/blastradius/">Overview</a>
      <a href="https://github.com/harris-ahmad/blastradius-mcp" target="_blank">GitHub</a>
      <a href="https://pypi.org/project/blastradius-mcp/" target="_blank">PyPI</a>
    </div>
  </div>

  <div class="project-item">
    <h3>deadpush</h3>
    <p>Guardian daemon that stops an AI coding agent from destroying your work — it checkpoints every file a destructive command would touch, then blocks the command.</p>
    <ul>
      <li><strong>Problem:</strong> An unattended agent can wipe out work with a single destructive command.</li>
      <li><strong>Built:</strong> Content-addressed SHA-256 journal with two-phase preflight restore, 22 MCP tools plus an MCP proxy, and 13 formally specified guarantees over 679 tests (502 installs on PyPI).</li>
      <li><strong>Result:</strong> A 48-run ablation doubled the block rate (0.33 → 0.67) and raised work preserved from 0.92 to 1.00 at zero false positives.</li>
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
    <p class="project-install">git clone https://github.com/harris-ahmad/<wbr>chatliberate &amp;&amp; cd chatliberate &amp;&amp; npm install &amp;&amp; npm run build</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/chatliberate" target="_blank">GitHub</a>
      <a href="https://github.com/harris-ahmad/chatliberate#quick-start-chrome-extension" target="_blank">Quick start</a>
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
    <h3>Awaaz-e-Sehat</h3>
    <p>HIPAA-aligned e-health platform on Flask and AWS Lambda with Whisper + GPT-4 clinical transcription.</p>
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
    <h3>Research Software Engineer</h3>
    <p class="experience-meta">University at Buffalo (SUNY) • Buffalo, NY • January 2025 - Present</p>
    <ul>
      <li>Transactional support for microservices and distributed databases (FoundationDB, CockroachDB, Apache Seata); see <a href="#research">Research</a></li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Engineer</h3>
    <p class="experience-meta">Linq.io • Dallas, TX (Remote) • July 2024 - December 2024</p>
    <ul>
      <li>Shipped an on-demand media-generation API (FastAPI, MongoDB) that cut page load by 60% by generating asset thumbnails as users browsed 10K+ inventories</li>
      <li>Integrated OAuth 2.0 SSO for enterprise accounts and built a playground and diagnostics platform for workflow simulation, API testing, and observability; on call twice a week for production pipelines</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>System Engineer</h3>
    <p class="experience-meta">Its IT Group • Lahore, PK (Contract, Remote) • May 2024 - December 2024</p>
    <ul>
      <li>Redesigned the Node.js / MongoDB backend of an AR app for VTuber/karaoke 3D avatars, using WebSockets for real-time comments, notifications, and likes across 5K+ daily active users</li>
      <li>Built a 3D model pipeline for LiDAR scans with a USDZ → GLB converter for Unity that cut manual measurement time by 80%</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Engineer</h3>
    <p class="experience-meta">Interactive Media Lab, LUMS • Lahore, PK • October 2023 - March 2024</p>
    <ul>
      <li>Built Awaaz-e-Sehat, a HIPAA-aligned e-health platform on Flask and AWS Lambda, improving API latency from 5s → 500ms for 20K+ daily active users</li>
      <li>Productionized Whisper + GPT-4 transcription into structured clinical notes (95% accuracy, 1K+ recordings/day); Redis caching cut API latency by ~30%</li>
    </ul>
  </div>

  <div class="view-all-link">
    <a href="/work-experience">View Full Experience →</a>
  </div>
</div>

<!-- Education Section -->
<div class="section" id="education">
  <h2>Education</h2>

  <div class="experience-item">
    <h3>PhD, Computer Science</h3>
    <p class="experience-meta">University at Buffalo (SUNY) • Buffalo, NY • January 2025 - May 2028 (expected)</p>
    <ul>
      <li>Advised by Dr. Haonan Lu · TA for Modern Networking Concepts (CSE 489/589)</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>BS, Computer Science</h3>
    <p class="experience-meta">Lahore University of Management Sciences (LUMS) • Lahore, PK • September 2020 - May 2024</p>
    <ul>
      <li>TA for Object Oriented Design in C++ and Distributed Systems</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>YC AI Startup School</h3>
    <p class="experience-meta">Y Combinator • San Francisco, CA • July 2026</p>
    <ul>
      <li>Selected from a pool of 30,000 applications to attend YC AI Startup School 2026 at Chase Center</li>
    </ul>
    <div class="photo-gallery">
      <a href="/images/yc-ai-startup-school-2026/yc-badge.jpg" target="_blank" rel="noopener">
        <img src="/images/yc-ai-startup-school-2026/yc-badge-thumb.jpg" alt="At Y Combinator AI Startup School 2026" width="520" height="693" loading="lazy" decoding="async">
      </a>
      <a href="/images/yc-ai-startup-school-2026/chase-center.jpg" target="_blank" rel="noopener">
        <img src="/images/yc-ai-startup-school-2026/chase-center-thumb.jpg" alt="Chase Center during YC AI Startup School 2026" width="520" height="693" loading="lazy" decoding="async">
      </a>
    </div>
  </div>
</div>

<!-- Publications Section -->
<div class="section" id="publications">
  <h2>Publications</h2>

  <div class="publication-item">
    <h3>Uncovering the Hidden Data Costs of Mobile YouTube Video Ads</h3>
    <p class="publication-authors">Emaan Atique*, Saad Sher Alam*, <strong>Harris Ahmad</strong>, Ihsan Ayyub Qazi, Zafar Ayyub Qazi (*co-primary)</p>
    <p class="publication-venue">The ACM Web Conference 2024 (WWW '24) • Singapore • May 2024 · <a href="https://doi.org/10.1145/3589334.3645496" target="_blank">doi:10.1145/3589334.3645496</a></p>
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
  <p>I'm seeking <strong>software engineering / research internship</strong> opportunities for <strong>Summer 2027</strong>, returning to my PhD afterwards — especially backend, infrastructure, distributed systems, and research engineering roles. Feel free to reach out.</p>

  <p style="margin-top: 1rem;">
    <strong>Email:</strong> <a href="mailto:harrisah@buffalo.edu?subject=Summer%202027%20internship">harrisah@buffalo.edu</a><br>
    {% if site.cal_link and site.cal_link != "" %}<strong>Book a 1:1:</strong> <a href="/meet">pick a time on my calendar</a><br>{% endif %}
    <strong>Location:</strong> Buffalo, New York<br>
    <strong>GitHub:</strong> <a href="https://github.com/harris-ahmad" target="_blank">github.com/harris-ahmad</a><br>
    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harris-ahmad1" target="_blank">linkedin.com/in/harris-ahmad1</a><br>
    <strong>ORCID:</strong> <a href="https://orcid.org/0009-0008-5402-8398" target="_blank">orcid.org/0009-0008-5402-8398</a>
  </p>
</div>
