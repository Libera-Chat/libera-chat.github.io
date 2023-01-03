---
title: Libera Chat account verification
absolutify: true
---

{% raw %}
{::nomarkdown}
<!-- markdownlint-disable MD033 -->

<div class="verification">
  <form method="POST" action="{{target}}" id="verification-form">
    <input type="submit" value="Verify">
  </form>
  <script>
    const form = document.getElementById('verification-form')
    form.submit()
  </script>
</div>

{:/}
{% endraw %}

By clicking above your Libera Chat NickServ account
`{% raw %}{{account}}{% endraw %}` will be verified.

If you have JS enabled you should be automatically redirected.
