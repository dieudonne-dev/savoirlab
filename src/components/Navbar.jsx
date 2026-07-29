import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
            <img src="/src/assets/savoir.png" alt="SavoirLab" className="logo-img" />
            <span className="logo-text">Savoir<span className="logo-accent">Lab</span></span>
        </Link>

        {/* Menu desktop */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/formations" onClick={() => setMenuOpen(false)}>Formations</Link></li>
          <li><Link to="/produits" onClick={() => setMenuOpen(false)}>Produits</Link></li>
          <li><Link to="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li className="mobile-auth">
            <Link to="/login" className="btn-login-mobile" onClick={() => setMenuOpen(false)}>Connexion</Link>
            <Link to="/register" className="btn-register-mobile" onClick={() => setMenuOpen(false)}>S'inscrire</Link>
          </li>
        </ul>

        {/* Boutons droite */}
        <div className="navbar-actions">
          <Link to="/login" className="btn-login">Connexion</Link>
          <Link to="/register" className="btn-register">S'inscrire</Link>
        </div>

        {/* Burger menu mobile */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar