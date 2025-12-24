---
layout: page
title: Daily
sidebar: true
sidebar_order: 2
---

# Daily

{% assign dailies = site.categories.daily %}
{% if dailies.size > 0 %}
{% for post in dailies %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
{% else %}
*No posts yet.*
{% endif %}
