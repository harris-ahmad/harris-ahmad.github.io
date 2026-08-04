---
permalink: /writing/
title: "Writing"
description: "Notes on distributed systems, internet measurement, AI tooling, and research from Harris Ahmad — PhD CSE at University at Buffalo."
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
.writing-list { list-style: none; padding-left: 0; }
.writing-list li { margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid #e8e8e8; }
.writing-list li:last-child { border-bottom: none; }
.writing-meta { color: #777; font-size: 0.9rem; }
.writing-list p { margin: 0.4rem 0 0; color: #555; line-height: 1.55; }
</style>
