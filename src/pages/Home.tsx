import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/Home.css';

const products = [
  {
    id: 1,
    image: 'https://images.tcdn.com.br/img/img_prod/747002/camiseta_masculina_hoshwear_global_distortion_off_white_1151_2_b8fa642e589a12d3fc4bfa7591e760f1.jpg',
    name: 'Camisa hoshwear',
    price: 'R$350.00',
  },
  {
    id: 2,
    image: 'https://images.tcdn.com.br/img/img_prod/747002/camiseta_masculina_hoshwear_globe_preta_1313_1_5fbb7fec946f50cc4e2c435ac6a6ebfc.jpg',
    name: 'Camisa hoshwear',
    price: 'R$350.00',
  },
  {
    id: 3,
    image: 'https://cdn.awsli.com.br/600x1000/1100/1100536/produto/110542216/8dd90d1dcb.jpg',
    name: 'Travis x Nike',
    price: 'R$350.00',
  },
  {
    id: 4,
    image: 'https://overboard.vteximg.com.br/arquivos/ids/371914-1000-1000/Moletom-Masculino-Adidas-Shmoofoil-Monument-Royal-Blue-AZUL-IU0087-0.jpg?v=638442089174800000',
    name: 'Moletom Adidas',
    price: 'R$350.00',
  },
  {
    id: 5,
    image: 'https://images.tcdn.com.br/img/img_prod/747002/camiseta_masculina_hoshwear_global_distortion_off_white_1151_2_b8fa642e589a12d3fc4bfa7591e760f1.jpg',
    name: 'Camisa hoshwear',
    price: 'R$350.00',
  },
  {
    id: 6,
    image: 'https://images.tcdn.com.br/img/img_prod/747002/camiseta_masculina_hoshwear_globe_preta_1313_1_5fbb7fec946f50cc4e2c435ac6a6ebfc.jpg',
    name: 'Camisa hoshwear',
    price: 'R$350.00',
  },
  {
    id: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqIXxFuoZAIqIidu6rCgSLqQiB2MWdamt4w&s',
    name: 'Billie x Nike',
    price: 'R$350.00',
  },
  {
    id: 8,
    image: 'https://www.npvsneakers.com.br/cdn/shop/products/travis-scott-x-nike-sb-dunk-low.jpg?v=1669878828',
    name: 'Travis x Nike',
    price: 'R$350.00',
  },
  // Adicione mais produtos conforme necessário
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bem-vindo à Loja de Roupas!</h1>
      <p>Descubra as últimas tendências da moda.</p>
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

export default Home;