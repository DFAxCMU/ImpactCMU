module.exports = {
    siteMetadata: {
        title: `ImpactCMU`,
        pathPrefix: `/ImpactCMU`,
        description: `Impact CMU 2023 is an annual showcase of CMU student-led social impact projects. Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus.`,
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
