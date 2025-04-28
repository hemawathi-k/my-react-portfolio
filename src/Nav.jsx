import './Nav.css';
import logo from './assets/logo.jpeg';  // << Import the logo image

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" /> {/* use the imported logo */}
        <nav>
          <ul className="Navbar-list">
            <li className="list-item"><a href="#home" className="Nav-link">Home</a></li>
            <li className="list-item"><a href="#about" className="Nav-link">About</a></li>
            <li className="list-item"><a href="#skills" className="Nav-link">Skills</a></li>
            <li className="list-item"><a href="#projects-section" className="Nav-link">Projects</a></li>
            <li className="list-item"><a href="#contact" className="Nav-link">Contact</a></li>
          </ul>
        </nav>
      </nav>
    </>
  )
}
