import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/user';

const Login = () => {
  const [user, setUser]= useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate('/')
  };
  return (
    <div>
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" name='email' onChange={handleChange} />
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter your password" name='password' onChange={handleChange} />
        <Button onClick={handleUser} >LogIn</Button>

    </div>
  )
}

export default Login