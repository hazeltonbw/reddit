# Reddit clone using React

Hosted with Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/7fd90b78-50bd-4115-a1b9-881d9176b4d4/deploy-status)](https://app.netlify.com/sites/adversary/deploys)

## Known issues

- The [react-markdown](https://www.npmjs.com/package/react-markdown) module does not properly handle zero-width spaces `&#x200b`
- Reddit JSON API has a few issues:
  - Videos don't contain audio
  - `num_comments` and the actual number of comments don't equate
