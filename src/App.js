import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import Features from './components/Features';
import Stats from './components/Stats';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Industries />
      <Products />
      <Features />
      <Stats />
      <Blog />
      <Footer />
    </div>
  );
}

export default App; 