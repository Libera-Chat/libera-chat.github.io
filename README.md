# Libera Chat's website

## Style guide

### Content

- Use British English. Exceptions apply to content:
  - copied verbatim from external sources (notably the LICENSE files); or
  - that must comply with technical standards
- Channel names, nicknames, channel modes, user modes, IRC verbs, and IRC
  commands should be escaped (as code), for example: `/join #libera`
- Filenames will be the URL slug; use lowercase alphanumeric characters and
  no underscores
- In examples, mark required arguments with `<>`, and optional arguments with
  `[]`
- Lines should be no longer than 78 characters, so that people in 80-column
  terminals can edit the text without their editor "paging over" horizontally
  when their cursor reaches the end of the line
- Internal links must be root-relative

### Code

- Use 2 spaces of indentation in code
- Be mindful about making the site accessible to all users, including those
  with screen readers or text-only web browsers
- For CSS
  - Prefer logical properties (for example, `margin-inline-start` rather
    than `margin-left`)
  - In general, lengths should be defined in `rem` units
  - CSS that is absolutely necessary to generate the layout should go in the
    appropriate inlined CSS; other CSS should be loaded separately
- For JS
  - You probably don't need JavaScript
  - Format JS with standard.js
- For HTML
  - Prefer elements with semantic meaning (for example, `<main>`, `<article>`)

## Licensing

The content of this project itself is licensed under the
[CC BY-NC-SA 4.0 International Public License](./LICENSE-content.txt), and the
underlying source code used to format and display that content is licensed
under the [MIT license](./LICENSE-code.txt).
