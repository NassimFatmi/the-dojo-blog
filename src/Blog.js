import React from "react";
import { Link } from "react-router-dom";

function Blog(props) {
  const blog = props.blog;
  return (
    <div className="blog-preview" key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </Link>
    </div>
  );
}

export default Blog;
