import React from "react";
import Blog from "./Blog";

function BlogList(props) {
  const blogs = props.blogList;
  return (
    <div>
      <h2>{props.title}</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
