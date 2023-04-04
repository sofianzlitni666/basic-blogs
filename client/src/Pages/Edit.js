import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editPost, getPost } from "../JS/Actions/post";

const Edit = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    summary: "",
    content: "",
  });
  const dispatch = useDispatch();
  const onePost = useSelector((state) => state.postReducer.onePost);
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getPost(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editPost(match.params.id, newPost));
    ;
  };
  return (
    <div>
      <Form.Label>title</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${onePost.title}`}
        name="title"
        value={newPost.title}
        onChange={handleChange}
      />
      <Form.Label>summary</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${onePost.summary}`}
        name="summary"
        value={newPost.summary}
        onChange={handleChange}
      />
      <Form.Label>content</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${onePost.content}`}
        name="content"
        value={newPost.content}
        onChange={handleChange}
      />
      <Link to={`/`}>
      <Button variant="danger" type="submit" onClick={handleEdit}>
        Submit
      </Button>
      </Link>
    </div>
  );
};

export default Edit;
