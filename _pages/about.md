---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

About Me
======
I'm Lize Shao, a first year CS PhD student at the [University of Virginia (UVA)](https://www.virginia.edu/) and I am fortunate to be advised by [Prof. Wenxi Wang](https://wenxiwang.github.io/).  I completed my undergraduate degree from [Rice University](https://www.rice.edu/) in 2025, where I completed a dual degree in Mathematics and Computer Science. I had the privilege of working with [Prof. Xia Hu](https://cs.rice.edu/~xh37/index.html) and [Prof. Tegawendé F. Bissyandé](https://bissyande.github.io/) during my undergraduate studies.

From 2021 to 2025, I was honored to be a recipient of the [Rice Trustee Distinguished Scholarship](https://engineering.rice.edu/academics/student-awards-scholarships).

My research focuses on **LLMs for Software Engineering**, **Safe Code Generation**, and **Formal Methods**. I study how to integrate formal constraints, program semantics, and verification techniques into LLM-based code generation and reasoning systems, with the goal of producing code that is not only functional, but also safe, correct, and aligned with formal specifications.

In another line of my work so far, my research on [RFCScope](https://github.com/HIPREL-Group/RFCScope) has uncovered 31 previously unknown logical ambiguities across 14 recent [RFCs](https://www.ietf.org/process/rfcs/). Eight of these findings have been confirmed, with three officially verified as technical [errata](https://www.rfc-editor.org/errata.php).

Selected Publications
======
{% include base_path %}
{% assign selected_pubs = site.publications | where_exp: "pub", "pub.selected == true" %}
{% if selected_pubs.size > 0 %}
  {% for post in selected_pubs reversed limit: 5 %}
    {% include archive-single-pub.html %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed limit: 5 %}
    {% include archive-single-pub.html %}
  {% endfor %}
{% endif %}

