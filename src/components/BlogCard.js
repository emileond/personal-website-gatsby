import React from 'react';
import blogImg from '../images/blog/writting-ux-stories.png'

const BlogCard = ({ postTitle, postDate }) => {
    return (
        <div className="blog-item">
            <div className="blog-item__img">
                <img src={blogImg} />
            </div>
            <div className="blog-item__title"><h4>{postTitle}</h4></div>
            <div className="blog-item__date">{postDate}</div>
        </div>
    )
  };

export default BlogCard;