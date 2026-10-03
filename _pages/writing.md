---
permalink: /writing/
title: ""
seo_title: "Writing — Harris Ahmad"
description: "Notes on distributed systems, internet measurement, AI tooling, and research from Harris Ahmad — Computer Science PhD student at University at Buffalo."
author_profile: true
---

# Writing

Short technical notes and explainers. Newest first.

{% assign writing_posts = site.posts | where_exp: "p", "p.categories contains 'writing'" %}
{% if writing_posts.size == 0 %}
{% assign writing_posts = site.posts %}
{% endif %}

<ul class="writing-list">
{% for post in writing_posts %}
  <li>
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <span class="writing-meta"> · {{ post.date | date: "%b %-d, %Y" }}{% if post.read_time %} · {{ post.content | number_of_words | divided_by: 160 | plus: 1 }} min read{% endif %}</span>
    {% if post.excerpt %}
    <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>

<style>
.writing-list { --writing-rule: #e8e8e8; --writing-meta: #707070; --writing-excerpt: #555; list-style: none; padding-left: 0; }
@media screen { html[data-theme="dark"] .writing-list { --writing-rule: #2b3037; --writing-meta: #9aa2a9; --writing-excerpt: #c9cdd2; } }
@media screen and (prefers-color-scheme: dark) { html:not([data-theme="light"]) .writing-list { --writing-rule: #2b3037; --writing-meta: #9aa2a9; --writing-excerpt: #c9cdd2; } }
.writing-list li { margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--writing-rule); }
.writing-list li:last-child { border-bottom: none; }
.writing-meta { color: var(--writing-meta); font-size: 0.9rem; }
.writing-list p { margin: 0.4rem 0 0; color: var(--writing-excerpt); line-height: 1.55; }
</style>
