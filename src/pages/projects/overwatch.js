import React from "react"
import Layout from "../../components/layout"
import HeroProject from "../../components/HeroProject"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "./images/heuristics.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return (
    <Layout>
        <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </Layout>
    )
}