import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Al Kooz Café & Restaurant`,
    description: (
      `Lebanese family friend place in Barouk, Chouf District.`
      + ` Lebanese Mezza, Saj, Sandwiches, and more...`
    ),
    keywords: (
      `alkooz,cafe,restaurant,food,saj,lebanese,mezza,sandwich,sandwiches,`
      + `plates,hotplate,desserts,hotdrink,softdrink,alcohol,argile,snacks,`
      + `family,friendly,cozy,vibes,delicious,service,intimate,experience,`
      + `barouk,chouf,arz,cedar,forest,nature,view,sunset,breeze,summer,winter`
    ),
    siteUrl: `https://alkoozcafe.com`,
    og: {
      siteName: `Al Kooz Café & Restaurant`
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        'projectId': 'hg675kdy',
        'dataset': 'production'
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'tracedSVG',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://alkoozcafe.com`,
      },
    }
  ]
}

export default config;
