/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Ignacio Avas",
    author: "Ignacio Avas",
    description: "Ignacio Avas website",
    siteUrl: "http://ignacioavas.com/",
    image: "/social.png",
    social: {
      twitter: "ignacioavas"
    }
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: path.join(__dirname, "src", "assets")
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
