import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/Products.css';

const products = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
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
  {
    id: 4,
    image: 'path/to/image4.jpg',
    name: 'Product 4',
    price: '$40.00',
  },
  {
    id: 5,
    image: 'path/to/image5.jpg',
    name: 'Product 5',
    price: '$50.00',
  },
  // Adicione mais produtos conforme necessário
];

const ProductListPage: React.FC = () => {
  return (
    <div className="product-list-page">
      <h1>Lista de Produtos</h1>
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

export default ProductListPage;
