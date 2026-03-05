import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'
import { Container } from 'react-bootstrap';



const Contact = () => {

  return (
    <div style={{marginBottom:'500px'}}>
      
    
    <h1>For contacting us</h1>
    
    <center>
    <p>While contacting our group will gives your full supporting.</p></center>
      
      <Container>
      <Card className='Cardstyle'
      >
      
      <Card.Title className='title'>Fill this let us help you</Card.Title>
    <form className="p-5 border rounded bg-light">
        <div className="">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control"  />
        </div>
        <div className="">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control"  />
        </div>
        <div className="">
          <label className="form-label">Subject</label>
          <input type="text" name="subject" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" rows="5" className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">Send Message</button>
      </form>
    
      </Card>
      </Container>
      <p>We’re passionate about transforming agriculture through sustainable hydroponics. Whether you're a curious grower, a potential partner, or someone looking to bring fresh, soil-free produce to your community, we’d love to hear from you. Reach out to us with your questions, ideas, or collaboration proposals—we’re here to support your journey into clean, efficient, and future-ready farming. Let’s cultivate innovation together.</p>
    
    </div>
    
  )
}

export default Contact
