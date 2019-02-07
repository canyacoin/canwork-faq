module.exports = {
    pathPrefix: `/canwork-blog`,
    siteMetadata: {
        title: `CanWork Blog`,
        description: `The CanWork Blog.`,
        logoUrl: `https://www.canwork.io/assets/img/logo.svg`,
        author: `CanYa`
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/faqs`,
                name: "posts",
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `CanWork Blog`,
                short_name: `CanWork Blog`,
                start_url: `/`,
                icon: `./static/favicon.jpg`
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        }
    ],
}