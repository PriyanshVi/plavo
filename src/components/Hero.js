import React from 'react';
import { ArrowRight, Play, Users, Globe, TrendingUp } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Reshaping Raw Materials Supply Chain
            </h1>
            <p className="hero-subtitle">
              Revolutionising the World's largest and oldest business through Technology – 
              <strong> every process & every product.</strong>
            </p>
            
            <div className="hero-actions">
              <a href="#browse" className="btn btn-primary btn-large">
                Browse Marketplace
                <ArrowRight size={20} />
              </a>
              <button className="btn btn-secondary btn-large">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <Users size={24} />
                <div>
                  <div className="stat-number">600+</div>
                  <div className="stat-label">Suppliers</div>
                </div>
              </div>
              <div className="stat-item">
                <Globe size={24} />
                <div>
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
              <div className="stat-item">
                <TrendingUp size={24} />
                <div>
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Products</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon">🧪</div>
                <div className="card-content">
                  <h4>Chemical Ingredients</h4>
                  <p>Premium quality chemicals</p>
                </div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-icon">🌿</div>
                <div className="card-content">
                  <h4>Herbal Extracts</h4>
                  <p>Natural & organic</p>
                </div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-icon">⚗️</div>
                <div className="card-content">
                  <h4>Lab Equipment</h4>
                  <p>Professional tools</p>
                </div>
              </div>
              
              <div className="main-hero-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">🏭</div>
                    <h3>Digital Supply Chain</h3>
                    <p>Connect • Source • Innovate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 