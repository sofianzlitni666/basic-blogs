import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register} from '../JS/Actions/user'

const Register = () => {
  const [newUser, setNewUser] = useState({}); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange= (e) => {
    setNewUser({...newUser, [e.target.name] : e.target.value})
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
    navigate('/profile')
    
  }
  return (
    <div>
      <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" name='firstname' onChange={handleChange}/>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" name='lastname' onChange={handleChange}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" name='email' onChange={handleChange}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter your password" name='password' onChange={handleChange}/>
        <Button onClick={handleUser}>Register</Button>
    </div>
  )
}

export default Register