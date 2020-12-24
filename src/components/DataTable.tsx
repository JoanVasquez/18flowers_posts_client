import React, { useState } from "react";
import Post from "../models/Post";
import { Form } from "./Form";
import { Modal } from "./Modal";

type TableProps = {
  posts: Array<Post>;
};

export const DataTable = ({ posts }: TableProps) => {
  const [post, setPost] = useState({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead className="text-center table-dark">
          <tr>
            <th scope="col" className="col-1">
              ID
            </th>
            <th scope="col" className="col-1">
              USER ID
            </th>
            <th scope="col" className="col-4">
              TITLE
            </th>
            <th scope="col" className="col-4">
              BODY
            </th>
            <th scope="col" className="2">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {posts.map((post: Post) => {
            return (
              <tr>
                <th>{post.id}</th>
                <th>{post.userId}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => setPost(post)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <Modal title="Edit Post">
          <Form post={post} />
        </Modal>
      </div>
    </div>
  );
};
