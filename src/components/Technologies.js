import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import './Style.css';

const Technologies = () => {
  return (
    <Container style={{ padding: '30px 0' }}>
      <h2 className="mb-4">Currently Using Technology:</h2>

      {/* Image Grid */}
      <Row className="mb-5">
        <Col md={6}>
          <img
            className="img-fluid mb-3"
            src="https://plus.unsplash.com/premium_photo-1664475309585-4678fb66eb35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8"
            alt="Hydroponic greenhouse overview"
          />
          <img
            className="img-fluid mb-3"
            src="https://plus.unsplash.com/premium_photo-1664299485621-a97ce194dd49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
            alt="Hydroponic system close-up"
          />
        </Col>

        <Col md={6}>
          <img
            className="img-fluid mb-3"
            src="https://plus.unsplash.com/premium_photo-1664475847989-8069e5f6ec95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Automated greenhouse system"
          />
          <img
            className="img-fluid mb-3"
            src="https://plus.unsplash.com/premium_photo-1682436376763-6abf180fb0e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2MHx8fGVufDB8fHx8fA%3D%3D"
            alt="IoT-enabled hydroponics"
          />
        </Col>
      </Row>

      {/* Technology Descriptions */}
      <Row className="mb-4">
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>Automated Growing Systems</h3>
            <p>
              Sensors monitor and adjust temperature, humidity, light, pH, and nutrient levels. Enables hands-free farming with remote app control.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>AI-Based Monitoring</h3>
            <p>
              AI analyzes plant health, predicts yield, and adjusts environmental conditions in real time. Optimizes growth and reduces resource waste.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>IoT-Enabled Smart Systems</h3>
            <p>
              IoT sensors track water quality, nutrient delivery, and climate conditions. Ideal for remote management and commercial scalability.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>LED Grow Lighting</h3>
            <p>
              Energy-efficient lights emitting specific wavelengths to boost photosynthesis. Lower heat output and longer lifespan than traditional lights.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>Smart Nutrient Delivery</h3>
            <p>
              Precision systems tailor mineral and organic mixes to each plant’s needs. Promotes faster growth and higher yields.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="tech-card p-3 mb-3">
            <h3>Vertical & Urban Farming Structures</h3>
            <p>
              Multi-tiered racks and container farms maximize urban space. Supports year-round production with climate-controlled setups.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
