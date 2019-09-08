import React from "react"
import BlogCard from "./BlogCard"
import ButtonSecondary from "./ButtonSecondary"
import { Link } from "gatsby"

const BlogFeatured = () => {
  return (
    <div className="blog-featured">
      <div className="container">
        <div className="content-padding-3">
          <h2 id="pruebaTime">Featured Posts</h2>
          <div className="featured-grid">
            <BlogCard
              postTitle="A List of the Most Used Git Commands"
              postDate="10 Jul, 2019 · 6 min"
            />
            <BlogCard
              postTitle="Learning Usability Heuristic Principles"
              postDate="10 Jul, 2019 · 5 min"
            />
            <BlogCard
              postTitle="How To Achieve Better UI Design With CSS Grid Layout"
              postDate="10 Jul, 2019 · 5 min"
            />
          </div>
        </div>
        <Link to="/blog/">
        <ButtonSecondary buttonText="More Articles" />
        </Link>
      </div>
    </div>
  )
}

export default BlogFeatured