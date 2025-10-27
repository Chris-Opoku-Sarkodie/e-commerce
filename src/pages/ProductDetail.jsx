import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useProducts } from '../context/product-context';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id);

  if (!product) {
    return (
      <div style={styles.container}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')} style={styles.backButton}>
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        <ArrowLeft size={20} />
        Back
      </button>

      <div style={styles.productContainer}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        <div style={styles.infoSection}>
          <span style={styles.category}>{product.category}</span>
          <h1 style={styles.title}>{product.name}</h1>
          
          <div style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                color="#fbbf24"
              />
            ))}
            <span style={styles.ratingText}>({product.rating})</span>
          </div>

          <p style={styles.price}>${product.price}</p>
          
          <p style={styles.description}>{product.description}</p>

          <div style={styles.stockInfo}>
            <span style={styles.stockLabel}>Availability:</span>
            <span style={styles.stockValue}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <div style={styles.quantitySection}>
            <label style={styles.quantityLabel}>Quantity:</label>
            <div style={styles.quantityControls}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.quantityButton}
              >
                -
              </button>
              <span style={styles.quantityValue}>{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                style={styles.quantityButton}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              ...styles.addToCartButton,
              ...(product.stock === 0 ? styles.disabledButton : {})
            }}
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
    minHeight: 'calc(100vh - 200px)',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '2rem',
    transition: 'background-color 0.3s',
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  category: {
    color: '#667eea',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  ratingText: {
    fontSize: '1rem',
    color: '#6b7280',
    marginLeft: '0.5rem',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#667eea',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#4b5563',
  },
  stockInfo: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '1rem',
  },
  stockLabel: {
    fontWeight: '600',
    color: '#1f2937',
  },
  stockValue: {
    color: '#10b981',
  },
  quantitySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  quantityLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  quantityButton: {
    width: '40px',
    height: '40px',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  quantityValue: {
    fontSize: '1.25rem',
    fontWeight: '600',
    minWidth: '40px',
    textAlign: 'center',
  },
  addToCartButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.125rem',
    fontWeight: '600',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },
};

export default ProductDetail;
