# personal-blog

## Deploy

Build and deploy with vercel. [Install vercel](https://vercel.com/download) if you haven’t already

```
npm install && vercel deploy
```

## Notes

- add more metadata: add more fields to the [front matter](https://jekyllrb.com/docs/front-matter/) in the mdx files & field names to the `getStaticProps` function for the various pages that display posts.
- add or change components: `src/components/ui` or edit or create new pages in `src/pages` and `src/components/views`. 
- draft a post (don't publish): `draft: true` to the front matter
