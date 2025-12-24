---
layout: page
title: Home
sidebar: true
sidebar_order: 1
---

{% assign notes = site.categories.note %}
{% assign articles = site.categories.article %}

**[Note](/categories/note/)** ({{ notes.size }}): {% for post in notes %}{% for cat in post.categories %}{% if cat != "note" %}{% capture subcat_check %},{{ cat }},{% endcapture %}{% unless note_found contains subcat_check %}{% capture note_found %}{{ note_found }}{{ subcat_check }}{% endcapture %}[{{ cat }}](/categories/note/{{ cat }}/) {% endunless %}{% endif %}{% endfor %}{% endfor %}

**[Article](/categories/article/)** ({{ articles.size }}): {% for post in articles %}{% for cat in post.categories %}{% if cat != "article" %}{% capture subcat_check %},{{ cat }},{% endcapture %}{% unless article_found contains subcat_check %}{% capture article_found %}{{ article_found }}{{ subcat_check }}{% endcapture %}[{{ cat }}](/categories/article/{{ cat }}/) {% endunless %}{% endif %}{% endfor %}{% endfor %}

---

## About

**ks** · 지병찬 (Chi, Byoungchan)<br>
Born May 24, 2002

> "Die Begründung aber, die Rechtfertigung der Evidenz kommt zu einem Ende; – das Ende aber ist nicht, daß uns gewisse Sätze unmittelbar als wahr einleuchten, also eine Art *Sehen* unsrerseits, sondern unser *Handeln*, welches am Grunde des Sprachspiels liegt."
>
> — Wittgenstein, *On Certainty*, [§204](/OC_204)

---

### Interests

*Tedious*

- Bridging abstract concepts and applications
- Math (abstraction & structure, not computation)
- Cryptography, Cryptanalysis
- Mathematical/Computational Psychology ([Why not Psychology?](https://ksprsk.me))
- Self-control and habit formation (due to ADHD)
- Late Wittgenstein, especially *On Certainty*
- LLMs and other AI as tools

*For Fun*

- Supporting Arsenal since 2020
- Vocaloid (Jin, iyowa), rhythm game music
- BMS/rhythm games, Project Sekai
- Some manga/anime
- Football Manager, Team Fortress 2, Persona 3/4, FFX, etc.

*...and things I've forgotten*

---

### Contact

Social: [X](https://x.com/ksprsk_) · [Instagram](https://instagram.com/ks_byoungchan) · Discord (ksprsk)<br>
Work: [GitHub](https://github.com/ksprsk) · bchan052415@gmail.com

[CV](/cv.pdf)
