import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Pintola India Pvt. Ltd.</p>
          <p>Email: support@pintola.in</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Pintola. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
