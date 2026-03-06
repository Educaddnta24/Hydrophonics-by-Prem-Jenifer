import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <MyNavbar />

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <Home />
      <Technologies />
      <About />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
