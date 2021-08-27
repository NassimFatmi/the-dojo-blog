import React from "react";
import BlogsList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  const { data:blogs, isPending, error } = useFetch(`http://localhost:8000/blogs`);
  return (
    <div className="home">
      {error && <div>{error.message}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogsList blogList={blogs} title="All Blogs!" />}
    </div>
  );
}
