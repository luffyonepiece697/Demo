import { useState } from "react";
import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";
import Modal from "./Modal.jsx";

export default function PostsList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onClose={onStopPost} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 ? (
        <ul className="posts">
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
