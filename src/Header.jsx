import './header.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="slider">
        <Navbar />
      
      <button className="arrow left"><FaChevronLeft /></button>
      <button className="arrow right"><FaChevronRight /></button>

      {/* Dots */}
      <div className="dots">
        <span className="dot" />
        <span className="dot active" />
        <span className="dot" />
      </div>
    </div>
  );
};

export default Header;
