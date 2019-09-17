import React from "react"
import BlogCard from "./BlogCard"
import ButtonSecondary from "./ButtonSecondary"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogFeatured = () => {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.edges
  return (
    <div className="blog-featured">
      <div className="container">
        <div className="content-padding-3">
          <h2 id="pruebaTime">Recent Posts</h2>
          <div className="featured-grid">
            {posts.map(post => (
              <>
              <Link style={{ textDecoration: 'none' }} to={post.node.fields.slug}>
                <BlogCard
                  key={post.node.id}
                  imgSource={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                  postTitle={post.node.frontmatter.title}
                  postDate={post.node.frontmatter.date}
                  readTime={post.node.fields.readingTime.text}
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
        <Link to="/blog/">
        <ButtonSecondary buttonText="See All" />
        </Link>
      </div>
    </div>
  )
}

export default BlogFeatured

const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
        ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            readingTime {
                text
            }
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
