import React from 'react';
import { ArrowRight, Sparkles, Leaf, Heart, Home, Coffee, Flower } from 'lucide-react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: 'Personal Care & Beauty',
      description: 'Premium ingredients for cosmetics, skincare, and beauty products',
      icon: Sparkles,
      color: '#f59e0b',
      bgColor: '#fef3c7',
      products: ['Emulsifiers', 'Preservatives', 'Fragrances', 'Vitamins']
    },
    {
      id: 2,
      name: 'Food and Beverage',
      description: 'High-quality ingredients for food processing and beverage production',
      icon: Coffee,
      color: '#10b981',
      bgColor: '#d1fae5',
      products: ['Flavors', 'Colors', 'Preservatives', 'Sweeteners']
    },
    {
      id: 3,
      name: 'Perfumery',
      description: 'Exclusive fragrance ingredients and essential oils',
      icon: Flower,
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      products: ['Essential Oils', 'Synthetic Fragrances', 'Fixatives', 'Diluents']
    },
    {
      id: 4,
      name: 'Healthcare & Pharma',
      description: 'Pharmaceutical-grade ingredients and active compounds',
      icon: Heart,
      color: '#ef4444',
      bgColor: '#fee2e2',
      products: ['APIs', 'Excipients', 'Vitamins', 'Minerals']
    },
    {
      id: 5,
      name: 'Home & Industrial Care',
      description: 'Ingredients for cleaning, maintenance, and industrial applications',
      icon: Home,
      color: '#3b82f6',
      bgColor: '#dbeafe',
      products: ['Surfactants', 'Enzymes', 'Disinfectants', 'Polishes']
    },
    {
      id: 6,
      name: 'Ayurvedic & Herbal',
      description: 'Traditional and natural ingredients for holistic wellness',
      icon: Leaf,
      color: '#059669',
      bgColor: '#d1fae5',
      products: ['Herbal Extracts', 'Essential Oils', 'Botanicals', 'Spices']
    }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Connect with suppliers across diverse industries and discover the perfect ingredients for your business
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div key={industry.id} className="industry-card">
                <div 
                  className="industry-icon"
                  style={{ 
                    backgroundColor: industry.bgColor,
                    color: industry.color
                  }}
                >
                  <IconComponent size={32} />
                </div>
                
                <div className="industry-content">
                  <h3 className="industry-title">{industry.name}</h3>
                  <p className="industry-description">{industry.description}</p>
                  
                  <div className="industry-products">
                    <h4>Popular Products:</h4>
                    <div className="product-tags">
                      {industry.products.map((product, index) => (
                        <span key={index} className="product-tag">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a href={`#industry-${industry.id}`} className="industry-link">
                    Explore Industry
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="industries-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Supply Chain?</h3>
            <p>Join thousands of businesses already using our platform to source quality ingredients</p>
            <div className="cta-actions">
              <a href="#browse" className="btn btn-primary btn-large">
                Browse All Industries
              </a>
              <a href="#contact" className="btn btn-secondary btn-large">
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 