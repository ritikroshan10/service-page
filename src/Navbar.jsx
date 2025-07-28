import { NavLink } from "react-router-dom";
import logo from "./assets/Logo.png";
import "./navbar.css";

const Navbar = () => {
  return (

    <header className="navbar">

      {/* logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* links  */}
      <nav className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? "nav-active" : ""}>Service</NavLink>

        <div className="dropdown">
          <span>Pages ▾</span>
          <div className="dropdown-content">
            <NavLink to="/room" className={({ isActive }) => isActive ? "nav-active" : ""}>Room</NavLink>
            <NavLink to="/single-room" className={({ isActive }) => isActive ? "nav-active" : ""}>Single Room</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-active" : ""}>Blog</NavLink>
            <NavLink to="/single-blog" className={({ isActive }) => isActive ? "nav-active" : ""}>Single Blog</NavLink>
            <NavLink to="/404" className={({ isActive }) => isActive ? "nav-active" : ""}>404 Page</NavLink>
          </div>
        </div>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""}>Contact Us</NavLink>
      </nav>

    </header>
  );
};

export default Navbar;