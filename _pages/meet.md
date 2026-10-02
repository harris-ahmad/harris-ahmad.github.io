---
permalink: /meet
title: ""
seo_title: "Book a 1:1 — Harris Ahmad"
description: "Book a 1:1 call with Harris Ahmad, PhD CSE at University at Buffalo, about Spring/Summer 2027 internships, research, or referrals."
---

# Book a 1:1

{% if site.cal_link and site.cal_link != "" %}
Pick a time to chat about internships, research, or referrals. Times are shown in your time zone, and you'll get a calendar invite once you book.

<div id="cal-inline" style="width:100%;min-height:640px"></div>
<script>
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "meet", { origin: "https://app.cal.com" });
  Cal.ns.meet("inline", { elementOrSelector: "#cal-inline", calLink: {{ site.cal_link | jsonify }}, config: { layout: "month_view", theme: "light" } });
  Cal.ns.meet("ui", { theme: "light", layout: "month_view", hideEventTypeDetails: false, cssVarsPerTheme: { light: { "cal-brand": "#2c5aa0" } } });
</script>
<p>Calendar not loading? Book at <a href="https://cal.com/{{ site.cal_link }}">cal.com/{{ site.cal_link }}</a> or email <a href="mailto:harrisah@buffalo.edu?subject=Meeting%20request">harrisah@buffalo.edu</a>.</p>
{% else %}
Online booking isn't open right now. Email me at [harrisah@buffalo.edu](mailto:harrisah@buffalo.edu?subject=Meeting%20request) and we'll find a time.
{% endif %}
