/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Bürde Digital',
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/tei`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-theme-ceteicean"
  ],
}
