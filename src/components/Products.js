import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Package, Zap, Shield, Leaf } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Grid },
    { id: 'cosmetics', name: 'Cosmetic Ingredients', icon: Package },
    { id: 'chemicals', name: 'Chemicals', icon: Zap },
    { id: 'herbal', name: 'Herbal Ingredients', icon: Leaf },
    { id: 'pharma', name: 'Pharmaceuticals', icon: Shield }
  ];

  const products = [
    {
      id: 1,
      name: 'Vitamin C (Ascorbic Acid)',
      category: 'cosmetics',
      supplier: 'ChemCorp Industries',
      rating: 4.8,
      reviews: 124,
      price: '$45.99/kg',
      image: '🧪',
      description: 'High-purity Vitamin C for cosmetic applications',
      certifications: ['ISO 9001', 'GMP'],
      inStock: true
    },
    {
      id: 2,
      name: 'Aloe Vera Extract',
      category: 'herbal',
      supplier: 'Natural Solutions Ltd',
      rating: 4.9,
      reviews: 89,
      price: '$32.50/kg',
      image: '🌿',
      description: 'Pure aloe vera extract for skincare products',
      certifications: ['Organic', 'USDA'],
      inStock: true
    },
    {
      id: 3,
      name: 'Sodium Hyaluronate',
      category: 'cosmetics',
      supplier: 'BioTech Pharma',
      rating: 4.7,
      reviews: 156,
      price: '$78.00/kg',
      image: '⚗️',
      description: 'Hyaluronic acid salt for anti-aging formulations',
      certifications: ['ISO 9001', 'FDA'],
      inStock: false
    },
    {
      id: 4,
      name: 'Citric Acid Monohydrate',
      category: 'chemicals',
      supplier: 'Chemical Solutions Inc',
      rating: 4.6,
      reviews: 203,
      price: '$12.75/kg',
      image: '🧬',
      description: 'Food-grade citric acid for various applications',
      certifications: ['ISO 9001', 'HACCP'],
      inStock: true
    },
    {
      id: 5,
      name: 'Green Tea Extract',
      category: 'herbal',
      supplier: 'Herbal Essence Co',
      rating: 4.8,
      reviews: 67,
      price: '$28.90/kg',
      image: '🍃',
      description: 'Antioxidant-rich green tea extract',
      certifications: ['Organic', 'Non-GMO'],
      inStock: true
    },
    {
      id: 6,
      name: 'Retinol Palmitate',
      category: 'pharma',
      supplier: 'PharmaTech Solutions',
      rating: 4.9,
      reviews: 92,
      price: '$156.00/kg',
      image: '💊',
      description: 'Vitamin A derivative for pharmaceutical use',
      certifications: ['USP', 'EP'],
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Catalog</h2>
          <p className="section-subtitle">
            Browse one of the world's largest digital catalogs of chemicals, ingredients, and herbals
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="products-controls">
          <div className="search-filter-bar">
            <div className="search-box">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search products, ingredients, or suppliers..."
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <button className="filter-btn">
                <Filter size={20} />
                Filters
              </button>
              
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent size={20} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`products-container ${viewMode}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-emoji">{product.image}</div>
                {!product.inStock && (
                  <div className="out-of-stock">Out of Stock</div>
                )}
              </div>
              
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <Star size={16} className="star-icon" />
                    <span>{product.rating}</span>
                    <span className="reviews">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-supplier">
                  <span className="supplier-label">Supplier:</span>
                  <span className="supplier-name">{product.supplier}</span>
                </div>
                
                <div className="product-certifications">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="certification-badge">
                      {cert}
                    </span>
                  ))}
                </div>
                
                <div className="product-footer">
                  <div className="product-price">{product.price}</div>
                  <button 
                    className={`btn ${product.inStock ? 'btn-primary' : 'btn-secondary'}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Notify When Available'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="load-more-section">
          <button className="btn btn-secondary btn-large">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products; 