---
layout: page
title: "Note: On Certainty"
---

# Note: On Certainty

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'note'" | where_exp: "post", "post.categories contains 'on-certainty'" %}
{% if posts.size > 0 %}
*{{ posts.size }} posts*

{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}
{% else %}
*No posts yet.*
{% endif %}
