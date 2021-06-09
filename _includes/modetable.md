<!-- markdownlint-disable MD033 MD041 -->
{::nomarkdown}<div class="table">{:/}

<table>
  <thead>
    <tr>
      {% if include.modes[0].type %}
      <th>Type (name)</th>
      {% else %}
      <th>Mode (name)</th>
      {% endif %}
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for mode in include.modes %}
    <tr>
      <td>
        {% if mode.type %}
        <code>{{ mode.type }}</code>
        {% else %}
        <code>{{ mode.mode }}</code>
        {% endif %}
        <br/>
        {{ mode.name }}
      </td>
      <td>{{ mode.description | markdownify }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{::nomarkdown}</div>{:/}
