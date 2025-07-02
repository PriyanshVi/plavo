import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Package } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    materials: 0,
    countries: 0,
    customers: 0,
    startups: 0
  });

  const stats = [
    {
      id: 1,
      icon: Package,
      number: 50000,
      suffix: 'K+ MT',
      label: 'Raw Materials Supplied',
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      id: 2,
      icon: Globe,
      number: 50,
      suffix: '+',
      label: 'Countries',
      color: '#10b981',
      bgColor: '#d1fae5'
    },
    {
      id: 3,
      icon: Users,
      number: 10000,
      suffix: '+',
      label: 'Active Customers',
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      id: 4,
      icon: TrendingUp,
      number: 500,
      suffix: '+',
      label: 'D2C Startups Empowered',
      color: '#8b5cf6',
      bgColor: '#ede9fe'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        materials: Math.floor(50000 * progress),
        countries: Math.floor(50 * progress),
        customers: Math.floor(10000 * progress),
        startups: Math.floor(500 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section className="section bg-gradient stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Plavo's 6 Year Exponential Record</h2>
          <p className="section-subtitle">
            Our journey of transforming the raw materials supply chain through technology
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentCount = counts[Object.keys(counts)[index]];
            
            return (
              <div key={stat.id} className="stat-card">
                <div 
                  className="stat-icon"
                  style={{ 
                    backgroundColor: stat.bgColor,
                    color: stat.color
                  }}
                >
                  <IconComponent size={32} />
                </div>
                
                <div className="stat-content">
                  <div className="stat-number">
                    {currentCount.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="stats-highlight">
          <div className="highlight-content">
            <h3>This is more than a shift; it's a revolution.</h3>
            <p>Let's create the future together.</p>
            <div className="highlight-actions">
              <a href="#join" className="btn btn-primary btn-large">
                Join the Revolution
              </a>
              <a href="#contact" className="btn btn-secondary btn-large">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 