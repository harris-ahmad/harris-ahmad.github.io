---
permalink: /publications
title: ""
seo_title: "Publications — Harris Ahmad"
description: "Research publications by Harris Ahmad, including ACM WWW '24 work on the hidden mobile data costs of YouTube video ads."
---

# Publications

## Uncovering the Hidden Data Costs of Mobile YouTube Video Ads

**Emaan Atique\*, Saad Sher Alam\*, Harris Ahmad, Ihsan Ayyub Qazi, Zafar Ayyub Qazi**  
\*Co-primary authors  

*Proceedings of the ACM Web Conference 2024 (WWW '24)*, Singapore, May 13–17, 2024  
[doi:10.1145/3589334.3645496](https://doi.org/10.1145/3589334.3645496)

[[PDF](/files/ytafford-www24.pdf){:target="_blank"}, [explainer](/writing/youtube-mobile-ad-data-costs/), [code &amp; data](https://github.com/nsgLUMS/videoads-affordability-www24){:target="_blank"}, [Google Scholar](https://scholar.google.com/citations?hl=en&user=4AY0nvEAAAAJ){:target="_blank"}]

### Summary

Video platforms monetize via ads, but users also pay in **mobile data** — especially costly in developing regions. This paper presents the first independent empirical analysis of YouTube **in-stream video ad** data costs from the user perspective.

We built a crawl/stream pipeline and released a public corpus of **17,600** main videos and **46,600+** ads (~**8,225** hours) across **eight** countries (four developing, four developed). Buffer-state analysis surfaces latent wastage:

- Users often still download **80–100%** of a skippable ad's data even after skipping (~31% of cases in developing regions, ~52.6% in developed regions).
- Mid-roll ads can force re-download of as much as **~71 seconds** of main-video on average early in playback.
- Excess losses average about **6.7%** of a 2GB mobile plan.

We discuss implications for platforms, ABR/ad-insertion policies, and affordability/inclusion.

**Longer write-up:** [The hidden mobile data cost of YouTube video ads](/writing/youtube-mobile-ad-data-costs/)

<div style="border: 1px solid var(--card-border-color); border-radius: 8px; padding: 16px; margin-top: 10px; max-width: 300px;">
  <a href="https://github.com/nsgLUMS/videoads-affordability-www24" target="_blank">
    <img src="https://opengraph.githubassets.com/1/nsgLUMS/videoads-affordability-www24" alt="GitHub Repo" style="width:100%; border-radius: 8px;">
  </a>
  <div style="margin-top: 8px; text-align: center;">
    <a href="https://github.com/nsgLUMS/videoads-affordability-www24" target="_blank">
      <img src="https://img.shields.io/github/stars/nsgLUMS/videoads-affordability-www24?style=social" alt="GitHub stars">
    </a>
  </div>
</div>
