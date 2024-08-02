import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/ProductList..css';

const products = [
  {
    id: 1,
    image: 'https://acdn.mitiendanube.com/stores/002/912/130/products/moletom-frente-3ff8825aa1946eb34a17111401226876-640-0.webp',
    name: 'Product 1',
    price: '$10.00',
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    name: 'Product 2',
    price: '$20.00',
  },
  {
    id: 3,
    image: 'path/to/image3.jpg',
    name: 'Product 3',
    price: '$30.00',
  },
];

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <h1>Produtos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
