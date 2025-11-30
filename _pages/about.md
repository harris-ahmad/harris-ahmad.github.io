---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* Hero Section */
.hero-section {
  text-align: center;
  padding: 2rem 0 3rem 0;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero-section .tagline {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.hero-buttons a {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #2c5aa0;
  color: white;
}

.btn-primary:hover {
  background-color: #1e3d6b;
  color: white;
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
  border: 2px solid #ddd;
}

.btn-secondary:hover {
  background-color: #e0e0e0;
  border-color: #bbb;
}

/* Section Styles */
.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #2c5aa0;
  display: inline-block;
}

/* Skills Section */
.skills-list {
  margin-top: 1rem;
}

.skills-list p {
  margin: 0.5rem 0;
  line-height: 1.7;
  color: #555;
}

.skills-list strong {
  color: #2c5aa0;
  font-weight: 600;
}

/* Projects List */
.project-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c5aa0;
}

.project-item p {
  color: #555;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-links a {
  padding: 0.4rem 1rem;
  background-color: #f5f5f5;
  color: #2c5aa0;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid #ddd;
  transition: all 0.2s ease;
}

.project-links a:hover {
  background-color: #2c5aa0;
  color: white;
  border-color: #2c5aa0;
}

/* Experience Timeline */
.experience-item {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid #2c5aa0;
}

.experience-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  color: #333;
}

.experience-meta {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.experience-item ul {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

.experience-item li {
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.6;
}

/* Publication Item */
.publication-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.publication-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.publication-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c5aa0;
}

.publication-authors {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.publication-venue {
  font-style: italic;
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

/* View All Link */
.view-all-link {
  text-align: center;
  margin-top: 2rem;
}

.view-all-link a {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #f5f5f5;
  color: #2c5aa0;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  border: 2px solid #2c5aa0;
  transition: all 0.3s ease;
}

.view-all-link a:hover {
  background-color: #2c5aa0;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section .tagline {
    font-size: 1.1rem;
  }

  .skills-container,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
  <h1>Harris Ahmad</h1>
  <p class="tagline">PhD Student @ University at Buffalo | Software Engineer | Distributed Systems Researcher</p>
  <p style="font-size: 1.1rem; color: #2c5aa0; font-weight: 600; margin-top: 0.5rem;">Seeking Software Engineering PhD Research Internships for Summer 2026</p>

  <div class="hero-buttons">
    <a href="/files/Final_Resume-3.pdf" class="btn-primary" target="_blank">Download Resume</a>
    <a href="https://github.com/harris-ahmad" class="btn-secondary" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/harris-ahmad-9a6266214" class="btn-secondary" target="_blank">LinkedIn</a>
    <a href="mailto:harrisah@buffalo.edu" class="btn-secondary">Contact</a>
  </div>
</div>

<!-- About Section -->
<div class="section">
  <h2>About Me</h2>
  <p>I'm a PhD student in Computer Science at the <strong>University at Buffalo (SUNY)</strong>, where I work under the guidance of <a href="https://sites.google.com/view/haonanlu/home" target="_blank">Dr. Haonan Lu</a>. My research focuses on distributed systems, database optimization, and scalable backend architectures.</p>

  <p>Before starting my PhD, I gained 2+ years of professional software engineering experience building systems for companies like <strong>Walmart, Starbucks, and JLL</strong>, where I specialized in backend development using FastAPI, MongoDB, Redis, and modern cloud technologies.</p>

  <p>During my undergraduate studies at LUMS, I was advised by <a href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a>, <a href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a>, and <a href="https://lums.edu.pk/lums_employee/516" target="_blank">Dr. Mian Muhammad Awais</a>. I conducted research on internet affordability and YouTube ad costs, publishing at <strong>ACM WebConf 2024</strong>.</p>

  <p>I'm passionate about solving complex problems at scale, whether through cutting-edge research or building production systems that impact millions of users.</p>
</div>

<!-- Skills Section -->
<div class="section">
  <h2>Skills & Technologies</h2>

  <div class="skills-list">
    <p><strong>Programming:</strong> Python, C/C++, JavaScript, TypeScript, Go, Haskell, Bash, SQL, GraphQL</p>
    <p><strong>Frameworks:</strong> Flask, Django, Express.js, React, Next.js, FastAPI</p>
    <p><strong>Tools & Platforms:</strong> AWS, Azure, Git/GitHub, Linux, Docker, Postman</p>
    <p><strong>Databases:</strong> MongoDB, CockroachDB, ScyllaDB, MySQL, Oracle</p>
    <p><strong>Research Focus:</strong> Distributed Systems, Concurrency Protocols, Database Optimization</p>
  </div>
</div>

<!-- Featured Projects Section -->
<div class="section">
  <h2>Featured Projects</h2>

  <div class="project-item">
    <h3>SimpleAuth</h3>
    <p>npm authentication package built on Passport.js, providing easy-to-use authentication strategies for Node.js applications.</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/SimpleAuth" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/simpleauth" target="_blank">npm Package</a>
    </div>
  </div>

  <div class="project-item">
    <h3>Data Structures & Algorithms</h3>
    <p>Comprehensive implementations of fundamental DSA in multiple languages covering trees, graphs, sorting, and dynamic programming.</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/DSA" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="project-item">
    <h3>Crypto Telegram Bot</h3>
    <p>Real-time cryptocurrency price monitoring bot in Go with live alerts, portfolio tracking, and market analysis via CoinGecko API.</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/Crypto-Telegram-Bot-GO" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="project-item">
    <h3>Awaaz E Sehat</h3>
    <p>Flask-based eHealth platform improving healthcare accessibility with patient management, appointments, and telemedicine capabilities.</p>
    <div class="project-links">
      <a href="https://github.com/harris-ahmad/awaaz-e-sehat" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="view-all-link">
    <a href="/projects">View All Projects →</a>
  </div>
</div>

<!-- Work Experience Section -->
<div class="section">
  <h2>Work Experience</h2>

  <div class="experience-item">
    <h3>Research Software Engineer</h3>
    <p class="experience-meta">CPI-NS, UBuffalo • Buffalo, NY • January 2025 - Present</p>
    <ul>
      <li>Implemented 3 concurrency and replication protocols (primary backup, chain replication, two phase locking) in Go to test their effectiveness in systems suited for collaborative AI as part of an ongoing NSF grant</li>
      <li>Testing protocols using CloudLab's 4-node architecture showed existing protocols are unfit for nodes that collaborate in real-time</li>
      <li>Developing a distributed transaction reordering & coordination system for NSF funded project by designing a snapshot-based architecture in C++ and Go that reduces lock contention and minimizes transaction abort rate, achieving significant throughput improvement (submitting to OSDI'26)</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Software Engineer</h3>
    <p class="experience-meta">Linq.io • Dallas, TX (Remote) • July 2024 - December 2024</p>
    <ul>
      <li>Built on-the-fly media generation API using FastAPI and MongoDB that reduced page load time by 60%, dynamically generating asset thumbnails as users scroll through 10K+ item inventories</li>
      <li>Deployed SSO authentication using OAuth 2.0 & FusionAuth enabling enterprise users to access systems with existing credentials</li>
      <li>Created admin debugging and playground dashboards that exposed system metrics via direct OS calls, reducing troubleshooting time from hours to minutes for 50+ support tickets</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3>Research Software Engineer</h3>
    <p class="experience-meta">Interactive Media Lab, LUMS • Lahore, PK • October 2023 - March 2024</p>
    <ul>
      <li>Built Awaaz-e-Sehat health platform using Python Flask on AWS Lambda, reducing API response time from 5s to 500ms handling 10K+ daily medical queries</li>
      <li>Designed serverless data pipeline AWS (Lambda, DynamoDB, S3) to store and index 50K+ medical recordings, eliminating server costs while scaling automatically</li>
      <li>Built medical transcription service using Whisper API and GPT-4, converting consultations to structured clinical notes with 95% accuracy, processing 1K+ recordings daily</li>
    </ul>
  </div>

  <div class="view-all-link">
    <a href="/work-experience">View Full Experience →</a>
  </div>
</div>

<!-- Publications Section -->
<div class="section">
  <h2>Publications</h2>

  <div class="publication-item">
    <h3>Uncovering the Hidden Data Costs of Mobile YouTube Ads</h3>
    <p class="publication-authors">Emaan Atique, Saad Sher Alam, Harris Ahmad, Zafar Ayyub Qazi, Ihsan Ayyub Qazi</p>
    <p class="publication-venue">ACM Web Conference 2024 (TheWebConf'24) • Singapore • May 2024</p>
    <div class="project-links">
      <a href="/files/ytafford-www'24.pdf" target="_blank">PDF</a>
      <a href="https://github.com/NSG-LUMS/Youtube-Affordability" target="_blank">GitHub</a>
      <a href="https://scholar.google.com/citations?hl=en&user=4AY0nvEAAAAJ" target="_blank">Google Scholar</a>
    </div>
  </div>

  <div class="view-all-link">
    <a href="/publications">View All Publications →</a>
  </div>
</div>

<!-- Contact Section -->
<div class="section">
  <h2>Get In Touch</h2>
  <p>I'm currently seeking <strong>software engineering PhD research internship opportunities</strong> for Summer 2026. Feel free to reach out!</p>

  <p style="margin-top: 1rem;">
    <strong>Email:</strong> <a href="mailto:harrisah@buffalo.edu">harrisah@buffalo.edu</a> | <a href="mailto:harrisah@buffalo.edu">harrisah@buffalo.edu</a><br>
    <strong>Location:</strong> Buffalo, New York<br>
    <strong>GitHub:</strong> <a href="https://github.com/harris-ahmad" target="_blank">github.com/harris-ahmad</a><br>
    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harris-ahmad-9a6266214" target="_blank">linkedin.com/in/harris-ahmad</a>
  </p>
</div>
