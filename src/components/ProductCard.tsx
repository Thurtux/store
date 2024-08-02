import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCard.css';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
