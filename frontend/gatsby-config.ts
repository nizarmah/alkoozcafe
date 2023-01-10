import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Al Kooz Café`,
    siteUrl: `https://alkoozcafe.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        'projectId': 'hg675kdy',
        'dataset': 'production'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.svg',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    }
  ]
}

export default config;
