import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    industries: [
      'Ayurvedic and Herbal',
      'Food and Beverage',
      'Healthcare and Pharma',
      'Home and Industrial Care',
      'Perfumery',
      'Personal Care and Beauty'
    ],
    products: [
      'Chemicals',
      'Cosmetic Ingredients',
      'Food Ingredients',
      'Fragrance Ingredients',
      'Herbal Ingredients',
      'Nutraceuticals',
      'Pharmaceuticals'
    ],
    company: [
      'About Us',
      'Contact Us',
      'FAQs'
    ],
    legal: [
      'Privacy Policy',
      'Terms and Conditions'
    ],
    learning: [
      'Get Expert Assistance',
      'Industry Events',
      'Blog'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#facebook' },
    { name: 'Twitter', icon: Twitter, url: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, url: '#linkedin' },
    { name: 'Instagram', icon: Instagram, url: '#instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer */}
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">Plavo</h3>
              <p className="footer-description">
                Revolutionizing the world's largest and oldest business through technology – 
                every process & every product.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+91 971 729 9954</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>support@plavo.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>For Industries</h4>
                <ul>
                  {footerLinks.industries.map((industry, index) => (
                    <li key={index}>
                      <a href={`#industry-${index}`}>{industry}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>For Products</h4>
                <ul>
                  {footerLinks.products.map((product, index) => (
                    <li key={index}>
                      <a href={`#product-${index}`}>{product}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  {footerLinks.company.map((item, index) => (
                    <li key={index}>
                      <a href={`#company-${index}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  {footerLinks.legal.map((item, index) => (
                    <li key={index}>
                      <a href={`#legal-${index}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Learning</h4>
                <ul>
                  {footerLinks.learning.map((item, index) => (
                    <li key={index}>
                      <a href={`#learning-${index}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; {currentYear} Plavo. All Rights Reserved.</p>
              </div>
              
              <div className="footer-bottom-links">
                <a href="#terms">Terms of Use</a>
                <a href="#cookies">Cookies</a>
                <a href="#settings">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        <div className="floating-contact">
          <button className="contact-btn">
            <MessageCircle size={20} />
            <span>Talk to experts</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 