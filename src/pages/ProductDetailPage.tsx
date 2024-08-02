import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetailPage.css';

const products = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$10.00',
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.00',
  },
  // Adicione mais produtos conforme necessário
];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === parseInt(productId || '', 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
