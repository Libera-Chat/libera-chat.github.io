{::nomarkdown}<div class="table">{:/}

<table>
  <thead>
    <tr>
      <th>Mode (name)</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for mode in include.modes %}
    <tr>
      <td>{{ mode.mode }}<br/>({{ mode.name }})</td>
      <td>{{ mode.description | markdownify }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{::nomarkdown}</div>{:/}
