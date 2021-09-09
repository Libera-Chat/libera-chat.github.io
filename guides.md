---
title: Guides
layout: guides
---

{% for category in site.data.guide_categories %}
{% assign guides = site.guides
  | sort: "weight"
  | where: "category", category.slug %}

## {{ category.name }}

{% for guide in guides %}

- [{{ guide.title }}]({{ guide.url }})
{% endfor %}
{% endfor %}
