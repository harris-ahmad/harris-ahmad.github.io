---
permalink: /work-experience
title: ""
description: "Professional software engineering experience including work at University at Buffalo, Linq.io, Its IT Group, and research positions. Expertise in distributed systems, backend development, and database optimization."
keywords: "work experience, software engineer, research engineer, University at Buffalo, distributed systems, backend development, Python, Go, FastAPI"
---

# Work Experience

## Professional Experience

**Research Software Engineer** <br />
**CPI-NS, UBuffalo - Buffalo, NY** <br />
_January 2025 to Present_

- Implemented 3 concurrency and replication protocols such as primary backup, chain replication and two phase locking in Go to test their effectiveness in systems that are suited for collaborative AI. This work is a part of an ongoing NSF grant.
- Testing the protocols using CloudLab's 4-node architecture showed these existing protocols are unfit for nodes that collaborate in real-time.
- Currently developing a distributed transaction reordering & coordination system for another NSF funded project by designing and implementing a snapshot-based architecture in C++ and Go that reduces lock contention and minimizes transaction abort rate, achieving a significant throughput improvement. We're submitting this to OSDI'26.

---

**Software Engineer** <br />
**Linq.io - Dallas, TX (Remote)** <br />
_July 2024 to December 2024_

- Built on-the-fly media generation API using FastAPI and MongoDB that reduced page load time by 60%, dynamically generating asset thumbnails as users scroll through 10K+ item inventories.
- Deployed successful SSO authentication using OAuth 2.0 & FusionAuth enabling enterprise users to access systems with existing credentials.
- Created admin debugging and playground dashboards that exposed system metrics via direct OS calls, reducing troubleshooting time from hours to minutes for 50+ support tickets.

---

**System Engineer** <br />
**Its IT Group - Lahore, PK** <br />
_May 2024 to August 2024_

- Redesigned the backend in node.js and MongoDB of an AR app for VTuber/karaoke 3D avatars leveraging WebSockets for real-time comments, notifications and likes across 5K+ daily active users.
- Implemented 3D model pipeline to process LiDAR scans, building USDZ to GLB converter enabling Unity integration, reducing manual measurement time by 80%.

---

**Research Software Engineer** <br />
**Interactive Media Lab, LUMS - Lahore, PK** <br />
_October 2023 to March 2024_

- Built Awaaz-e-Sehat health platform using Python Flask framework on AWS Lambda, reducing API response time from 5s to 500ms handling 10K+ daily medical queries.
- Designed serverless data pipeline AWS (Lambda, DynamoDB, S3) to store and index 50K+ medical recordings, eliminating server costs while scaling automatically.
- Built medical transcription service using Whisper API and GPT-4, converting doctor consultations and medical history recordings to structured clinical notes with 95% accuracy, processing 1K+ recordings daily.

---

**Backend Developer** <br />
**LUMS - Lahore** <br />
_January 2023 to December 2023_

- Built a resilient P2P file sharing app using Python and socket programming.
- Implemented distributed hash tables and consistent hashing for optimized file retrieval.

---

**Frontend Developer** <br />
**LUMS - Lahore** <br />
_May 2023 to June 2023_

- Developed and designed a dynamic course website for a 5-day Internet Architecture course at LUMS.
- Enhanced accessibility and resource management for over 60 participants.

---

**Backend Developer** <br />
**LUMS - Lahore** <br />
_June 2022 to December 2022_

- Developed a robust full stack speech therapy web application using MERN stack.
- Designed a user-centric platform to enhance therapy sessions and exercises.
- Integrated 3rd-party APIs such as Calendly and RapidAPI's quote generator.

---

**Machine Learning Developer** <br />
**Fiverr - Lahore** <br />
_January 2021 to December 2021_

- Conducted experiments with various ML models and frameworks.
- Cleaned and analyzed a large dataset, comparing model performances using F1-score and accuracy.
- Developed an end-to-end system and considered future advancements with GPT-4 or LLaMA 2.

## Research Experience

**Research Software Engineer** <br />
**Networks and Systems Group, LUMS - Lahore, PK** <br />
_May 2022 to December 2023_

- Discovered the impact of varying video bitrates across main-video resolutions: 720p causes ~3× higher latent buffer loss than 360p (10.1 MB vs 3.4 MB), finding led to recommendations for adaptive ad-insertion/ABR changes to cut loss and cost.
- Collected data for 17600 YouTube videos and 46600 YouTube ads across 8 countries. This is the first large corpus of YouTube data, with 15+ features, that includes buffer data for each video. The dataset and codebase are publicly available.
- Published findings in Proceedings of the ACM Web Conference 2024 (WWW'24).
- Built distributed scraper using Selenium/PyTube to collect YouTube metrics, parallelizing across 20 machines gathering 2TB+ of performance data over a year.

## Teaching Experience

**Teaching Assistant** <br />
**University at Buffalo - Buffalo, NY** <br />
_Spring 2025_

- Modern Networking Concepts (CSE 489/589)

---

**Teaching Assistant** <br />
**Lahore University of Management Sciences - Lahore, PK** <br />
_Spring 2023, Fall 2023_

- CS200: Object Oriented Programming in C++ (Spring'23, Fall'23)
- CS582: Distributed Systems (Fall'23)
