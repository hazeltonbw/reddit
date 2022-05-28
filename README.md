# Reddit clone using React
Hosted with Netlify

## Known issues

- The [react-markdown](https://www.npmjs.com/package/react-markdown) module does not properly handle zero-width spaces `&#x200b`
- Reddit JSON API has a few issues:
  - Videos don't contain audio
  - `num_comments` and the actual number of comments don't equate
