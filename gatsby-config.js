module.exports = {
    siteMetadata: {
        title: 'ImpactCMU',
        pathPrefix: '/ImpactCMU',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-csv`,
    ],
};
