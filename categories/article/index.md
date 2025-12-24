---
layout: page
title: Article
sidebar: true
sidebar_order: 3
---

# Article

{% assign articles = site.categories.article %}
{% if articles.size > 0 %}
*{{ articles.size }} posts*

{% comment %} Get unique sub-categories {% endcomment %}
{% assign subcats = "" | split: "" %}
{% for post in articles %}
  {% for cat in post.categories %}
    {% if cat != "article" %}
      {% unless subcats contains cat %}
        {% assign subcats = subcats | push: cat %}
      {% endunless %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% for subcat in subcats %}
### {{ subcat }}

{% for post in articles %}
{% if post.categories contains subcat %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}
{% endfor %}

{% comment %} Posts without sub-category {% endcomment %}
{% assign uncategorized = articles | where_exp: "post", "post.categories.size == 1" %}
{% if uncategorized.size > 0 %}
### Uncategorized

{% for post in uncategorized %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}
{% endif %}

{% else %}
*No posts yet.*
{% endif %}
