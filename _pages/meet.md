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
  var calTheme = document.documentElement.getAttribute("data-theme");
  if (calTheme !== "light" && calTheme !== "dark") { calTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
  Cal("init", "meet", { origin: "https://app.cal.com" });
  var calConfig = { layout: "month_view", theme: calTheme };
  Cal.ns.meet("inline", { elementOrSelector: "#cal-inline", calLink: {{ site.cal_link | jsonify }}, config: calConfig });
  Cal.ns.meet("ui", { theme: calTheme, layout: "month_view", hideEventTypeDetails: false, cssVarsPerTheme: { light: { "cal-brand": "#2c5aa0" }, dark: { "cal-brand": "#7aa7e6" } } });
  /* Cal.com ignores live theme changes sent through "ui", so reload the calendar frame with the new theme, but only when the visitor clicked the toggle here: an OS or other-tab change shouldn't wipe a booking in progress. */
  document.addEventListener("themechange", function (e) { var frame = document.querySelector("#cal-inline iframe"); if (!frame) { calConfig.theme = e.detail.theme; return; } if (e.detail.source !== "toggle") { return; } var url = new URL(frame.src); if (url.searchParams.get("theme") === e.detail.theme) { return; } url.searchParams.set("theme", e.detail.theme); url.searchParams.set("ui.color-scheme", e.detail.theme); frame.src = url.toString(); });
</script>
<p>Calendar not loading? Book at <a href="https://cal.com/{{ site.cal_link }}">cal.com/{{ site.cal_link }}</a> or email <a href="mailto:harrisah@buffalo.edu?subject=Meeting%20request">harrisah@buffalo.edu</a>.</p>
{% else %}
Online booking isn't open right now. Email me at [harrisah@buffalo.edu](mailto:harrisah@buffalo.edu?subject=Meeting%20request) and we'll find a time.
{% endif %}
