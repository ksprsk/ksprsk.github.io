---
layout: page
title: Archives
sidebar: true
sidebar_order: 4
---

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
## {{ year.name }}

{% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%m월'" %}
{% for month in postsByMonth %}
### {{ month.name }}

{% for post in month.items %}
- {{ post.date | date: "%d일" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}
{% endfor %}
{% endfor %}
