import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../JS/Actions/post";
import {Link} from 'react-router-dom';

const Add = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    summary: "",
    content: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addPost(newPost));
  };
  return (
    <div>
      <Form.Label>title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter title"
        name="title"
        value={newPost.title}
        onChange={handleChange}
      />
      <Form.Label>summary</Form.Label>
      <Form.Control
        type="text"
        placeholder="summary"
        name="summary"
        value={newPost.summary}
        onChange={handleChange}
      />
      <Form.Label>content</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter content"
        name="content"
        value={newPost.content}
        onChange={handleChange}
      />
      <Link to="/">
        <Button variant="danger" type="submit" onClick={() => add()}>
          Create Post
        </Button>
      </Link>
    </div>
  );
};

export default Add;