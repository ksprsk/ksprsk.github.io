---
layout: page
title: Article
---

{% for post in site.categories.article %}
- [{{ post.title }}]({{ post.url }}) <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}

{% if site.categories.article == nil %}
*No posts yet.*
{% endif %}
