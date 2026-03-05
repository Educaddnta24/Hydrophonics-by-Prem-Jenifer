import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const Technologies = () => {

 
    return (
    <div >
      <h2 style={{padding:'30px'}}>Currently using technology:</h2>
<div className='tech'>
    
     <div className='row'>
      <div className='col'>
      <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1664475309585-4678fb66eb35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8'></img>
      <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1664299485621-a97ce194dd49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8'></img>
       <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1734554231742-872a5dedb18b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8'></img>
       <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1661776133856-fa589dc3d2bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8'></img>
       <center>
       <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1661772450885-2218006085ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D'></img>
      </center>
      </div>
      <div className='col'>
       <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1664475847989-8069e5f6ec95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D'></img>
       <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1682436376763-6abf180fb0e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2MHx8fGVufDB8fHx8fA%3D%3D'></img>
       <img style={{width:'420px'}} className='img-fluid' src='https://media.istockphoto.com/id/1382273499/photo/agriculture-robotic-and-autonomous-car-working-in-smart-farm-future-5g-technology-with-smart.jpg?s=612x612&w=0&k=20&c=NaZ1ef7bXhv-4tG5RmM6zLB30UXoDLFiJd5upMphmPs='></img>
       <img style={{width:'420px',height:'auto'}} className='img-fluid' src='https://media.istockphoto.com/id/1297815199/photo/hand-of-young-man-holding-a-white-hydroponic-pot-with-vegetable-seedlings-growing-on-a-sponge.jpg?s=612x612&w=0&k=20&c=5YRmrUHy7lIhxLS0PyibBohU4fBb7812Emzzv_ODb1M='></img>
       <center>
       <img style={{width:'420px'}}  className='img-fluid' src='https://media.istockphoto.com/id/1903979508/photo/two-asian-researcher-discussion-examining-plant-seedling.jpg?s=612x612&w=0&k=20&c=HAMBnRwW0oMUBqWvgn1w3x9louN6m3Ows-VgtAw4Q9A='></img>
   </center>
    </div>
      
</div>
    </div>  
      
       
 
    
    <Row>
        <Col>
      <div className='auto'>
        <h3>Automated Growing Systems</h3>
        <p>Use sensors to monitor and adjust temperature, humidity, light, pH, and nutrient levels.Enable hands-free farming with remote control via mobile app</p>
      </div>
      </Col>
       <Col>
 <div className='auto'>
        <h3>AI-Based Monitoring</h3>
        <p>Artificial intelligence analyzes plant health, predicts yield, and adjusts environmental conditions in real time.Helps optimize growth while reducing resource waste</p>
      </div>
      </Col>
      </Row>

      <Row>
        <Col>
       <div className='auto'>
        <h3>IoT-Enabled Smart Systems</h3>
        <p>Internet of Things (IoT) sensors track water quality, nutrient delivery, and climate conditions.Ideal for remote farm management and commercial scalability</p>
      </div>
      </Col>
       <Col>
       <div className='auto' >
        <h3>LED Grow Lighting</h3>
        <p>Energy-efficient lights that emit specific wavelengths to boost photosynthesis.Lower heat output and longer lifespan compared to traditional lighting</p>
      </div>
      </Col>
      </Row>

      <Row>
        <Col>
       <div className='auto'>
        <h3>Smart Nutrient Delivery</h3>
        <p>Precision systems tailor mineral and organic compound mixes to each plant’s needs.Promotes faster growth and higher yields</p>
      </div>
      </Col>
       <Col>
       <div className='auto'>
        <h3>Vertical & Urban Farming Structures</h3>
        <p>Multi-tiered racks and container farms maximize space in urban environments.Support year-round production with climate-controlled setups</p>
      </div>
         </Col>
      </Row>

    </div>
  )
}

export default Technologies