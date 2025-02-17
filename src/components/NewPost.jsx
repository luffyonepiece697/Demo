import { useState } from "react";

function NewPost({ onClose, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [authorName, setAuthorName] = useState("");

  function handleAuthorChange(e) {
    setAuthorName(e.target.value);
  }

  function handleBodyChange(e) {
    setEnteredBody(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const postData = {
      body: enteredBody,
      author: authorName,
    };
    onAddPost(postData);
    onClose();
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthorChange} />
      </p>
      <p className="actions">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
