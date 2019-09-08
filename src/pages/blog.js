import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"
import Img from "gatsby-image"
import Hero from "../components/Hero"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
    <Hero h1Title="Blog" date="I write about UX design, coding, javascript, and more..."/>
      <div className="container">
        <div className="content-padding-3">
          <div className="featured-grid">
            {posts.map(post => (
              <>
              <Link style={{ textDecoration: 'none' }} to={post.node.fields.slug}>
                <BlogCard
                  key={post.node.id}
                  imgSource={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                  postTitle={post.node.frontmatter.title}
                  postDate={post.node.frontmatter.date}
                >
                <Img
                  fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                </BlogCard>
              </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item">
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
            <div className="post-list__excerpt">
              <p>{post.node.excerpt}></p>
            </div>
            <Link to={post.node.fields.slug}>Read More</Link>
          </div>
        ))}
      </div> */}
    </Layout>
  )
}

export default BlogPage

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
