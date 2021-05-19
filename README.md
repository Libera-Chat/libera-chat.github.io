# Libera Chat's website

## Style guide

### Content

- Use british english
- Channel names, channel modes, IRC verbs, IRC commands should be escaped
  as code, for example: `/join #libera`
- Filenames will be the url slug, use lowercase alphanumeric characters
  and no underscores.
- In examples, mark required arguments with `<>` and optional arguments
  with `[]`
- Lines should be no longer than 80 characters

## Code

- 2 spaces of indentation in code
- Be mindful about making the site accessible, to normal users, to people with
  screen readers, and to people with text-only browsers.
- For CSS
  - Prefer logical properties (for example, `margin-inline-start`
    rather than `margin-left`)
  - In general, lengths should be defined in `rem` units
  - CSS that is absolutely necessary to generate the layout should go in the
    appropriate inlined css, other css should be loaded separately
- For JS
  - You probably don't need JavaScript
  - Format JS with standard.js
- For HTML
  - Prefer elements with semantic meaning (for example, `<main>`, `<article>`)

## License

The content of this project itself is licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License](./LICENSE-content.txt),
and the underlying source code used to format and display that content is
licensed under the [MIT license](./LICENSE-code.txt).
