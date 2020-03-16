require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Justin Rainbow',
  },
  pathPrefix: '/',
  plugins: [
    // {
    //   resolve: `gatsby-plugin-ts`,
    //   options: {
    //     tsLoader: {
    //       logLevel: 'warn',
    //     },
    //     forkTsCheckerPlugin: {
    //       eslint: true,
    //     },
    //     fileName: `src/generated/graphql.ts`,
    //     codegen: true,
    //     codegenDelay: 250,
    //     alwaysCheck: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `graphql-types.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        // webFontsConfig: {
        //   fonts: {
        //     google: [
        //       {
        //         family: `Montserrat`,
        //         variants: [`300`, `400`, `500`],
        //       },
        //     ],
        //   },
        // },
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
