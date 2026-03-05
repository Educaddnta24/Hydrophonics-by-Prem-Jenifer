
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <div>
      < footer className="bg-success  text-light pt-4 pb-2">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We’re committed to revolutionizing agriculture through sustainable hydroponics. From urban rooftops to rural farms, our systems empower communities to grow fresh produce efficiently and responsibly.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/Home" className="text-light">Home</a></li>
              <li><a href="/About" className="text-light">About</a></li>
              <li><a href="/Technologies" className="text-light">Technologies</a></li>
              <li><a href="/Contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: future hydro@gmail.com</p>
            <p>Phone: +91 93486 34587</p>
            <p>Location: Chennai, Tamilnadu, India</p>
          </div>

        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 HydroFarm. All rights reserved.</p>
        </div>
      </div>
    </footer> 
    </div>
  )
}

export default Footer
