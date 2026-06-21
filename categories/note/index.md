---
layout: page
title: Note
sidebar: true
sidebar_order: 3
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
<section class="category-section" id="{{ subcat | slugify }}" data-category="{{ subcat | slugify }}">
<h3>{{ subcat }}</h3>

<ul>
{% for post in notes %}
{% if post.categories contains subcat %}
<li>{{ post.date | date: "%Y-%m-%d" }} — <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
</section>
{% endfor %}

{% comment %} Posts without sub-category {% endcomment %}
{% assign uncategorized = notes | where_exp: "post", "post.categories.size == 1" %}
{% if uncategorized.size > 0 %}
<section class="category-section" id="uncategorized" data-category="uncategorized">
<h3>Uncategorized</h3>

<ul>
{% for post in uncategorized %}
<li>{{ post.date | date: "%Y-%m-%d" }} — <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
</section>
{% endif %}

{% else %}
*No posts yet.*
{% endif %}
