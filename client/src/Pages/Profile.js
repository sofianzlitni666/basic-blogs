import React from 'react';
import { useSelector } from 'react-redux';
import {Card, Button} from 'react-bootstrap';

const Profile = () => {
    const user = useSelector((state)=> state.userReducer.user)
    return <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user && user.firstname}</Card.Title>
        <Card.Text>{user && user.email}</Card.Text>
        <Button variant="primary">Go anywhere</Button>
      </Card.Body>
    </Card>
    </div>
  
}

export default Profile