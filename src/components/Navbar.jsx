import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">❄️</span>
          <span>TechCool</span>
        </div>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#catalog" className="nav-link">Catalog</a>
          <a href="#bestsellers" className="nav-link">Bestsellers</a>
          <a href="#cooler-finds" className="nav-link">Cooler Finds</a>
          <a href="#reviews" className="nav-link">Reviews</a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}
