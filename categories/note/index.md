---
layout: page
title: Note
sidebar: true
sidebar_order: 2
---

# Note

{% assign notes = site.categories.note %}
{% if notes.size > 0 %}
*{{ notes.size }} posts*

{% comment %} Get unique sub-categories {% endcomment %}
{% assign subcats = "" | split: "" %}
{% for post in notes %}
  {% for cat in post.categories %}
    {% if cat != "note" %}
      {% unless subcats contains cat %}
        {% assign subcats = subcats | push: cat %}
      {% endunless %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% for subcat in subcats %}
### {{ subcat }}

{% for post in notes %}
{% if post.categories contains subcat %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}
{% endfor %}

{% comment %} Posts without sub-category {% endcomment %}
{% assign uncategorized = notes | where_exp: "post", "post.categories.size == 1" %}
{% if uncategorized.size > 0 %}
### Uncategorized

{% for post in uncategorized %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}
{% endif %}

{% else %}
*No posts yet.*
{% endif %}
