import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>🎨 Mbongwa Creatives</h2>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
