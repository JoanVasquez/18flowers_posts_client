import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Post from "../models/Post";
import { updatePost } from "../store/actions/postAction";

type FormProps = {
  post: Post;
};

export const Form = ({ post }: FormProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post, setTitle, setBody]);

  const onSubmit = () => {
    if (!title.length || !body.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
      post.title = title;
      post.body = body;
      dispatch(updatePost(post));
    }
  };

  return (
    <form>
      {isValid ? (
        <div className="alert alert-warning">Title or body cannot be empty</div>
      ) : null}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          id="body"
          rows={6}
          onChange={(event) => setBody(event.target.value)}
          value={body}
        ></textarea>
      </div>

      <button
        onClick={onSubmit}
        data-bs-dismiss="modal"
        className="btn btn-primary"
      >
        Send
      </button>
    </form>
  );
};
