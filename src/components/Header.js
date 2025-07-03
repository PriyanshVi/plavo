import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const industries = [
    'Personal Care and Beauty',
    'Perfumery',
    'Home and Industrial Care',
    'Healthcare and Pharma',
    'Food and Beverage',
    'Ayurvedic and Herbal'
  ];

  const products = [
    'Antioxidants & Preservatives',
    'Aroma Ingredients',
    'Butters & Waxes',
    'Chemicals',
    'Conditioners & Emollients',
    'Cosmetic Ingredients',
    'Emulsifiers',
    'Fats',
    'Film Formers',
    'Food Ingredients',
    'Fragrance Ingredients',
    'Herbal Ingredients',
    'Nutraceuticals',
    'Pharmaceuticals',
    'Solubilizers & Dispersants',
    'Solvents & Carriers',
    'Stabilizers'
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <img src="/logo.png" alt="Plavo Logo" style={{ height: '40px' }} />
            </div>

            {/* WhatsApp and Call Actions */}
            <div className="contact-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '16px' }}>
              <a href="https://wa.me/918076727536" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
                <FaWhatsapp size={28} color="#25D366" />
              </a>
              <a href="tel:8076727536" title="Call">
                <FaPhone size={26} color="#007bff" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <div className="nav-item dropdown">
                <span className="nav-link">
                  Industry <ChevronDown size={16} />
                </span>
                <div className="dropdown-menu">
                  {industries.map((industry, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {industry}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="nav-item dropdown">
                <span className="nav-link">
                  Products <ChevronDown size={16} />
                </span>
                <div className="dropdown-menu">
                  {products.map((product, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {product}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button 
                className="search-toggle"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>
              
              <a href="#cart" className="cart-icon">
                <ShoppingCart size={20} />
                <span className="cart-badge">0</span>
              </a>
              
              <a href="#signin" className="btn btn-secondary">Sign in</a>
              <a href="#signup" className="btn btn-primary">Sign up</a>
              
              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="search-bar">
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search for products, suppliers, or ingredients..."
                  className="search-input"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-nav">
                <div className="mobile-nav-section">
                  <h3>Industry</h3>
                  {industries.map((industry, index) => (
                    <a key={index} href="#" className="mobile-nav-item">
                      {industry}
                    </a>
                  ))}
                </div>
                
                <div className="mobile-nav-section">
                  <h3>Products</h3>
                  {products.slice(0, 8).map((product, index) => (
                    <a key={index} href="#" className="mobile-nav-item">
                      {product}
                    </a>
                  ))}
                </div>
                
                <div className="mobile-nav-section">
                  <a href="#about" className="mobile-nav-item">About</a>
                  <a href="#contact" className="mobile-nav-item">Contact</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Google Map Embed */}
      <div style={{ width: '100%', height: '300px', marginTop: '10px' }}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=South%20Extension%2C%20Arjun%20Nagar%2C%20Kotla%20Mubarakpur%2C%20South%20Extension%20I%2C%20New%20Delhi%2C%20Delhi%20110003%2C%20India&hl=en&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Header; 