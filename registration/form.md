---
title: Libera Chat account verification
layout: nohead
---

{::nomarkdown}
<!-- markdownlint-disable MD033 -->

<div class="verification">
  {%raw%}<form method="POST" action="/curite/verify/{{account}}/{{token}}">{%endraw%}
    <input type="submit" value="Verify">
  </form>
  <script>
    /*
    const form = document.getElementById('verification-form')
    form.submit()
    */
  </script>
</div>

{:/}

By clicking above your Libera Chat NickServ account
`{%raw%}{{account}}{%endraw%}` will be verified.

If you have JS enabled you should be automatically redirected.
