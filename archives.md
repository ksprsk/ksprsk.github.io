---
layout: page
title: Archives
sidebar: true
sidebar_order: 5
---

{% assign filtered_posts = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.categories contains "daily" %}
    {% assign filtered_posts = filtered_posts | push: post %}
  {% endunless %}
{% endfor %}
{% assign postsByYear = filtered_posts | group_by_exp:"post", "post.date | date: '%Y'" %}
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
