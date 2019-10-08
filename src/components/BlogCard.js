import React from 'react';

const BlogCard = ({ postTitle, postDate, children, readTime }) => {
    return (
        <div className="blog-item">
            <div className="blog-item__img">
                <main>{children}</main>
            </div>
            <div className="blog-item__title"><h4>{postTitle}</h4></div>
            <div className="blog-item__date">{postDate} · {readTime}</div>
        </div>
    )
  };

export default BlogCard;