import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Style.css'
const About = () => {
  return (
    <div>
        <section className='about'>
      <h1>About Us</h1><hr></hr>
      <h2>We have started this farming before 5 years.This is the developing farming field without the use off soil .Which is best useful to the peoples who are living at the cities and at the big buildings. We started this future farming technique to enhance our countries economy and to avoid food deficiency.Those who needs our service contact us.</h2>
        </section>
        <div>
            <h3 className='hefer' >We are providing some off the services for our regular and the newly customers.</h3>
        </div>

  
       

 <Container>
      <Row>
        <Row className='one' style={{backgroundColor:'#bef8a8ff'}}>
        <h3>Direct installation:</h3>
        <p>Our team will directly install the required equipments for this farming.By integrating modular units, nutrient delivery systems, and controlled lighting directly into the designated space—whether it's a rooftop, greenhouse, or indoor facility—growers can begin cultivating crops almost immediately.This method reduces setup time, ensures optimal resource use, and allows for rapid scalability. With proper planning and expert guidance, direct installation empowers individuals and communities to embrace sustainable farming with precision and efficiency.</p>
        </Row>
 </Row>
        
        <Row>
        <Col className='two' style={{backgroundColor:'#64d339ff'}}>
        <h3>warrenty Card:</h3>
        <p>There is a warrenty card given to the customers till 2 years after installation.The warranty includes protection against manufacturing defects in components such as pumps, grow trays, nutrient delivery systems, and LED lighting units.For warranty claims, customers must provide proof of purchase and installation records. Our support team is committed to ensuring your system operates efficiently and sustainably throughout the warranty period.</p>
        </Col>
        </Row>
        <Row>
        <Col className='one'  style={{backgroundColor:'#bef8a8ff'}}>
        <h3>Maintanence:</h3>
        <p> Our team will provide the maintanence and the Key tasks include monitoring pH and nutrient levels, cleaning grow trays and reservoirs to prevent algae buildup, and inspecting pumps, tubing, and filters for blockages or wear.Maintaining a sterile environment helps reduce the risk of pests and diseases, while timely replacement of consumables like nutrient solutions ensures consistent crop yield. </p>
        </Col>
      </Row>
    </Container>
<center>
<card className='fee'>There is no extra fees for the installation</card></center>
    </div>
  )
}

export default About
