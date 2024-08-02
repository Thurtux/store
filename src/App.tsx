import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* O Header estará visível em todas as páginas */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
