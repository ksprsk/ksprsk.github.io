---
layout: page
title: Home
sidebar: true
sidebar_order: 1
---

{% assign notes = site.categories.note %}
{% assign articles = site.categories.article %}
{% assign note_found = "" %}
{% assign article_found = "" %}

**[Note](/categories/note/)** ({{ notes.size }}): {% for post in notes %}{% for cat in post.categories %}{% if cat != "note" %}{% capture subcat_check %},{{ cat }},{% endcapture %}{% unless note_found contains subcat_check %}{% capture note_found %}{{ note_found }}{{ subcat_check }}{% endcapture %}[{{ cat }}](/categories/note/#{{ cat | slugify }}) {% endunless %}{% endif %}{% endfor %}{% endfor %}

**[Article](/categories/article/)** ({{ articles.size }}): {% for post in articles %}{% for cat in post.categories %}{% if cat != "article" %}{% capture subcat_check %},{{ cat }},{% endcapture %}{% unless article_found contains subcat_check %}{% capture article_found %}{{ article_found }}{{ subcat_check }}{% endcapture %}[{{ cat }}](/categories/article/#{{ cat | slugify }}) {% endunless %}{% endif %}{% endfor %}{% endfor %}

---

## About

**ks/ksprsk** · 지병찬 (Chi, Byoungchan)<br>
Born May 24, 2002

글쓰기에 좀 많이 약해서, 어떻게든 늘어놓으려고 시작한 블로그입니다.


### Interests

*For Fun*

- Supporting Arsenal since 2020
- Vocaloid (Jin, iyowa), rhythm game music
- BMS/rhythm games, Project Sekai
- Some manga/anime
- Football Manager, Team Fortress 2, Persona 3/4, FFX, etc.

*Tedious*

- Math
- Bridging abstract concepts and applications
- Cryptography, Cryptanalysis
- Mathematical/Computational Psychology(but not Psychology)
- Late Wittgenstein
- LLMs and other AI(but not agents, prompt engineering, etc.)

*...and things I've forgotten*

---

### Contact

Social: [X](https://x.com/ksprsk_) · [Instagram](https://instagram.com/ks_byoungchan) · Discord (ksprsk)<br>
Work: [GitHub](https://github.com/ksprsk) · bchan052415@gmail.com

[CV](/cv.pdf)


---


> "Die Begründung aber, die Rechtfertigung der Evidenz kommt zu einem Ende; – das Ende aber ist nicht, daß uns gewisse Sätze unmittelbar als wahr einleuchten, also eine Art *Sehen* unsrerseits, sondern unser *Handeln*, welches am Grunde des Sprachspiels liegt."
>
> — Wittgenstein, *On Certainty*, §204
