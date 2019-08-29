import React from "react"
import BlogCard from "./BlogCard"
import ButtonSecondary from "./ButtonSecondary"

const BlogFeatured = () => {
  return (
    <div className="blog-featured">
      <div className="container">
        <div className="content-padding-3">
          <h2>Featured Posts</h2>
          <div className="featured-grid">
            <BlogCard
              postTitle="Writting UX Case Stories"
              postDate="10 Jul, 2019 · 5 min"
            />
            <BlogCard
              postTitle="How To Achieve Better UI Design With CSS Grid Layout"
              postDate="10 Jul, 2019 · 5 min"
            />
            <BlogCard
              postTitle="How To Achieve Better UI Design With CSS Grid Layout"
              postDate="10 Jul, 2019 · 5 min"
            />
          </div>
        </div>
        <ButtonSecondary buttonText="More Articles" />
      </div>
    </div>
  )
}

export default BlogFeatured
