import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">Sobre Nós</h2>
          <p>
            Somos uma loja de roupas dedicada a oferecer os melhores produtos para nossos clientes.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Links Úteis</h2>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contato</h2>
          <p>Email: contato@loja.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Loja de Roupas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
