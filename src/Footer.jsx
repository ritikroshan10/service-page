import "./footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaDribbble } from "react-icons/fa";
import Logo from "./assets/Logo.png";


const Footer = () => {
  return (
    <footer className="footer">

      {/* footer-content */}
      <div className="footer-content">

        <div className="footer-logo">
          <img src={Logo} alt="Imperial Logo" className="footer-logo" />
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">USEFUL LINKS</h4>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>ROOM</li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h4 className="footer-heading">SUBSCRIBE</h4>
          <p>Don’t miss to subscribe our news, kindly fill the form bellow</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your Email Here" />
            <button>{'>'}</button>
          </div>
        </div>

      </div>

      {/* social-media */}
      <div className="social-media">

        <div className="socials-line"></div>

        <div className="socials-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FaDribbble />
        </div>

        <div className="socials-line"></div>
      </div>

      {/* copyright */}
      <div className="copyright">
        <p>&copy; 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="policy">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>

    </footer>

  );
};

export default Footer;