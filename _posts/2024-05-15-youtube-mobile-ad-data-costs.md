---
title: "The hidden mobile data cost of YouTube video ads"
date: 2024-05-15
permalink: /writing/youtube-mobile-ad-data-costs/
categories:
  - writing
tags:
  - internet-measurement
  - youtube
  - affordability
  - www24
description: "YouTube in-stream ads can waste mobile data even after you skip them. Summary of our WWW '24 study of 17.6K videos and 46.6K ads across eight countries."
excerpt: "Users often still download most of a skippable YouTube ad after hitting skip — and mid-roll ads can force re-download of main-video buffer. What our WWW ’24 measurement found."
header:
  og_image: /images/profile-pic.png
author_profile: true
share: true
---

Mobile YouTube is free in price, but not always free in **data**. That matters most where prepaid mobile broadband is expensive relative to income.

In our paper at The ACM Web Conference 2024 (WWW ’24), we measured the **hidden data cost of in-stream YouTube video ads** from the user's perspective — not advertiser CPM, and not platform revenue.

**Paper:** [Uncovering the Hidden Data Costs of Mobile YouTube Video Ads](https://doi.org/10.1145/3589334.3645496) ([PDF](/files/ytafford-www24.pdf), [code & data](https://github.com/nsgLUMS/videoads-affordability-www24))

## What we measured

We built a crawl/stream pipeline and released a public corpus covering:

- **17,600** main videos  
- **46,600+** in-stream ad videos  
- ~**8,225 hours** of streamed content  
- **8 countries** (four developing, four developed)

We then analyzed client **buffer state** around ad placement — which is where latent waste shows up.

## Key findings (short version)

1. **Skipping is not free.** Users frequently still download **80–100%** of a skippable ad's data after skipping (~31% of cases in developing regions, ~52.6% in developed regions in our data).
2. **Mid-roll ads disrupt the main video buffer.** A mid-roll can force re-download of as much as **~71 seconds** of main-video on average early in playback.
3. **Affordability impact is real.** Excess losses averaged about **6.7% of a 2GB mobile plan** in our affordability analysis.

Put differently: ad playback policies interact with buffering in ways that charge users for bytes they never asked to consume.

## Why this matters for builders

If you work on video players, ABR, ad insertion, or mobile products in emerging markets:

- Treat **skip** as a hard stop on further ad media fetch when possible.  
- Avoid policies that discard large main-video buffers on mid-roll insert.  
- Measure **user-paid bytes**, not only completion rate or fill rate.  
- Publish buffer/ad interaction metrics the way we publish latency SLOs.

## What we released

The dataset and toolchain are public so others can reproduce and extend the measurement:

- [Paper PDF](/files/ytafford-www24.pdf)  
- [Code & data on GitHub](https://github.com/nsgLUMS/videoads-affordability-www24)  
- [DOI](https://doi.org/10.1145/3589334.3645496)

## Citation

Emaan Atique, Saad Sher Alam, Harris Ahmad, Ihsan Ayyub Qazi, Zafar Ayyub Qazi. *Uncovering the Hidden Data Costs of Mobile YouTube Video Ads.* WWW ’24.

If you're studying video affordability, ABR/ad interaction, or mobile QoE in developing regions and want to compare notes, [email me](mailto:harrisah@buffalo.edu).
