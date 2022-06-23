import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Address from './Address'
import FullName from './FullName'



function ProfileCard() {
  return (
    <div style={{textAlign: 'center'}}>
        <Card style={{ width: '18rem'}} border='info'>
      <Card.Body>
        <Card.Title><FullName /></Card.Title>
        <Card.Text><Address /></Card.Text>
        <Button variant="primary">Contact Me!</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProfileCard