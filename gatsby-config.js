require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'The Price of Life',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `the-price-of-life`, 
        accessToken: `${process.env.API_KEY}`,
        linkResolver:({ node, key, value }) => post => `/${post.uid}`,
      },
    },
   
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',

  ],
  
}
