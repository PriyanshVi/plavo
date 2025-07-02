import React from 'react';
import { Calendar, Clock, ArrowRight, Factory, Globe, Sparkles } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unleashing Manufacturing 4.0: The Critical Role of Digital Supply Chain',
      excerpt: 'In the age of Industry 4.0, characterized by the convergence of digital technologies and manufacturing processes, the role of digital supply chains has become increasingly critical...',
      date: '20 February 2024',
      readTime: '5 min read',
      category: 'Manufacturing',
      image: '🏭',
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      id: 2,
      title: 'Navigating the Digital Supply Chain: Impact on Chemical Manufacturing Base',
      excerpt: 'In an era defined by rapid technological advancement and interconnected global markets, the chemical manufacturing industry is undergoing a profound transformation...',
      date: '20 February 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: '🌐',
      color: '#10b981',
      bgColor: '#d1fae5'
    },
    {
      id: 3,
      title: 'Transforming Beauty: Raw Material Innovation in the Beauty Industry',
      excerpt: 'The beauty industry is renowned for its relentless pursuit of innovation, constantly seeking new ingredients and formulations to meet evolving consumer demands...',
      date: '20 February 2024',
      readTime: '6 min read',
      category: 'Beauty',
      image: '✨',
      color: '#f59e0b',
      bgColor: '#fef3c7'
    }
  ];

  const categories = [
    { name: 'Manufacturing', icon: Factory, color: '#3b82f6' },
    { name: 'Technology', icon: Globe, color: '#10b981' },
    { name: 'Beauty', icon: Sparkles, color: '#f59e0b' }
  ];

  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recent Posts</h2>
          <p className="section-subtitle">
            Stay updated with the latest insights, trends, and innovations in the raw materials industry
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <div 
                  className="blog-emoji"
                  style={{ 
                    backgroundColor: post.bgColor,
                    color: post.color
                  }}
                >
                  {post.image}
                </div>
                <div className="blog-category">
                  {post.category}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <a href={`#blog-${post.id}`} className="blog-link">
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-categories">
          <h3>Explore by Category</h3>
          <div className="category-list">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <a key={index} href={`#category-${category.name.toLowerCase()}`} className="category-link">
                  <IconComponent size={20} style={{ color: category.color }} />
                  {category.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="blog-cta">
          <div className="cta-content">
            <h3>Stay Informed with Industry Insights</h3>
            <p>Get the latest updates on raw materials, supply chain innovations, and industry trends delivered to your inbox.</p>
            <div className="cta-actions">
              <a href="#subscribe" className="btn btn-primary btn-large">
                Subscribe to Newsletter
              </a>
              <a href="#blog" className="btn btn-secondary btn-large">
                View All Posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 