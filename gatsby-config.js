module.exports = {
    pathPrefix: '/ImpactCMU',
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `orgs`,
                path: `${__dirname}/src/images/orgs/`,
            },
        },
        {
            resolve: `gatsby-transformer-csv`,
            options: {
                noheader: true
            }
        }
    ],
};
