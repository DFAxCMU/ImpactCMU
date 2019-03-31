module.exports = {
    siteMetadata: {
        title: 'ImpactCMU',
        url: 'impactcmu.com'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-csv`,
        }
    ],
};
