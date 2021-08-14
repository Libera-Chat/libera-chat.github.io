---
title: Sponsors
---

Libera Chat is run thanks to a number of people, projects, and organisations
who provide both time and resources to Libera Chat. Without them none of this
would be possible

{::nomarkdown}
<!-- markdownlint-disable MD013 MD033 -->

<div class="sponsors">
  {% assign current_sponsors = site.data.sponsors | where: 'current', true %}
  {% for sponsor in current_sponsors %}
  <a href="{{ sponsor.link }}" {% if sponsor.skip_htmlproofer %}data-proofer-ignore {% endif %}rel="noopener noreferrer">
    {% if sponsor.image %}
    {% if sponsor.sources %}
    <picture>
    {% for source in sponsor.sources %}
    <source
      srcset="{{ source.srcset }}"
      {% if source.type %}type="{{ source.type }}"{% endif %}
      {% if source.media %}media="{{ source.media }}"{% endif %}
    >
    {% endfor %}
    {% endif %}
    <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" loading="lazy" height="64" />
    {% if sponsor.sources %}
    </picture>
    {% endif %}
    {% else %}
    {{ sponsor.name }}
    {% endif %}
  </a>
  {% endfor %}
</div>

{:/}

{% assign past_sponsors = site.data.sponsors | where: 'current', false %}

{% if past_sponsors.size > 0 %}
In addition to those listed above, we also want to extend a huge thank you to
all our past sponsors: {% for sponsor in past_sponsors %}
<a href="{{ sponsor.link }}" {% if sponsor.skip_htmlproofer %}data-proofer-ignore {% endif %}rel="noopener noreferrer">{{ sponsor.name }}</a>{% unless forloop.last %},{% endunless %}{% endfor %}
{% endif %}
