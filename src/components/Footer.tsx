import React from 'react'
import { Link } from 'react-router-dom'

const Footer:React.FC = () => {
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h2>Hotel Management System</h2>
      <p>
        We offer a luxurious booking experience with the best hotels and rooms. 
        Enjoy high-quality services and excellent amenities.
      </p>
    </div>

    <div className="footer-section links">
      <h2>Important Links</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="hotels">Hotels</Link></li>
        <li><Link to="rooms">Rooms</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="#">ContLinkct Us</Link></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h2>Contact Us</h2>
      <p><i className="fas fa-phone"></i> + 792 592 565 808</p>
      <p><i className="fas fa-envelope"></i> info@hotel.com</p>
      <p><i className="fas fa-map-marker-alt"></i> palestine, Hebron</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2024 Hotel System | All Rights Reserved</p>
  </div>
</footer>

  )
}

export default Footer