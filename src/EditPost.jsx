/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h1>Edit post</h1>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Edit Title:</label>
            <input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="editBody">Edit Post:</label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button onClick={() => handleEdit(post.id)} type="submit">
              Submit
            </button>
          </form>
        </>
      )}

      {!editTitle && <>
        <h2>Post Not Found</h2>
        <p>Well, that is disappointing</p>
        <p>
          <Link to="/" >Visit Our Homepage</Link>
        </p>
      </>}
    </main>
  );
};

export default EditPost;
