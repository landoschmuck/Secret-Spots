export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/Cards.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-cards" */ 'src/components/Cards.mdx'
    ),
  'src/components/Headline.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-headline" */ 'src/components/Headline.mdx'
    ),
}
