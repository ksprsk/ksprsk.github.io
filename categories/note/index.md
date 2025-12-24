---
layout: page
title: Note
---

{% for post in site.categories.note %}
- [{{ post.title }}]({{ post.url }}) <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}

{% if site.categories.note == nil %}
*No posts yet.*
{% endif %}
