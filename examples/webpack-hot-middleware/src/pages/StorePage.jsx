import { useState } from 'react';
import ChatModal from '../components/ChatModal';

const StorePage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 29.99, stock: 10 },
    { id: 2, name: 'Product B', price: 39.99, stock: 5 },
    { id: 3, name: 'Product C', price: 19.99, stock: 15 },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Store</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
            <p style={{ margin: '5px 0', color: '#007bff', fontSize: '1.2em' }}>
              ${product.price}
            </p>
            <p style={{ margin: '5px 0', color: product.stock < 6 ? '#dc3545' : '#28a745' }}>
              Stock: {product.stock}
            </p>
            <button
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
              onClick={() => alert(`Added ${product.name} to cart`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ChatModal />
    </div>
  );
};

export default StorePage;