import React from 'react';
import { Users, Search, Headphones, FileText, Truck, Shield, Zap, Globe } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Users,
      title: '600+ Verified Suppliers',
      description: 'Connect with trusted suppliers from around the world, all verified and quality-assured.',
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      id: 2,
      icon: Search,
      title: 'Advanced Search & Filter',
      description: 'Find exactly what you need with our powerful search and filtering capabilities.',
      color: '#10b981',
      bgColor: '#d1fae5'
    },
    {
      id: 3,
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Get instant help from our team of industry experts whenever you need assistance.',
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      id: 4,
      icon: FileText,
      title: 'Comprehensive Documentation',
      description: 'Access detailed product specifications, safety data sheets, and technical documents.',
      color: '#8b5cf6',
      bgColor: '#ede9fe'
    },
    {
      id: 5,
      icon: Truck,
      title: 'Fast Global Shipping',
      description: 'Reliable logistics partners ensure your orders reach you quickly and safely.',
      color: '#ef4444',
      bgColor: '#fee2e2'
    },
    {
      id: 6,
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products undergo rigorous quality checks and meet international standards.',
      color: '#059669',
      bgColor: '#d1fae5'
    },
    {
      id: 7,
      icon: Zap,
      title: 'Instant Quotes',
      description: 'Get real-time pricing and quotes for bulk orders and custom formulations.',
      color: '#dc2626',
      bgColor: '#fee2e2'
    },
    {
      id: 8,
      icon: Globe,
      title: 'Global Network',
      description: 'Source from suppliers across 50+ countries with local expertise and support.',
      color: '#7c3aed',
      bgColor: '#ede9fe'
    }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Plavo</h2>
          <p className="section-subtitle">
            Experience the future of raw materials sourcing with our comprehensive platform
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-card">
                <div 
                  className="feature-icon"
                  style={{ 
                    backgroundColor: feature.bgColor,
                    color: feature.color
                  }}
                >
                  <IconComponent size={28} />
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="features-highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3>Digital Supply Chain Revolution</h3>
              <p>
                At Plavo, we're passionate about the digital transformation of the raw material supply chain. 
                We believe that embracing a digital supply ecosystem enhances efficiency, accelerates innovation, 
                and empowers you to craft a sustainable and impactful future.
              </p>
              <p>
                By digitizing the supply process, we aim to streamline your access to high-quality raw materials, 
                providing you the tools to work smarter and faster. Join us on this journey, and let's reshape 
                the landscape of your industry together.
              </p>
              <div className="highlight-actions">
                <a href="#learn-more" className="btn btn-primary">
                  Learn More
                </a>
                <a href="#demo" className="btn btn-secondary">
                  Request Demo
                </a>
              </div>
            </div>
            
            <div className="highlight-visual">
              <div className="visual-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🚀</div>
                  <h4>Innovation at Scale</h4>
                  <p>Transforming traditional supply chains into digital ecosystems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 