import { Link } from 'react-router-dom'
import { config } from '../constants/config'
import cityOfAfricaLogo from '../assets/images/city-of-africa-thumb.png'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src={cityOfAfricaLogo} alt="Mbongwa Creatives" />
        </Link>

        <ul className="nav-links">
          {config.navigation.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
