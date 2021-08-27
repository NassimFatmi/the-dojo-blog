import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };

    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={handleTitle} />
        <label>Blog content:</label>
        <textarea required value={body} onChange={handleBody}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={handleAuthor}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}

export default Create;
