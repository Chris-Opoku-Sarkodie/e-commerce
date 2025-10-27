import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProducts } from '../context/product-context';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { categories, getProductsByCategory } = useProducts();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = getProductsByCategory(selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Products</h1>
        <p style={styles.subtitle}>Browse our collection of quality products</p>
      </div>

      <div style={styles.filterSection}>
        <label style={styles.filterLabel}>Filter by Category:</label>
        <div style={styles.categoryButtons}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category ? styles.categoryButtonActive : {})
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.productGrid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.productCard}>
            <Link to={`/product/${product.id}`} style={styles.productLink}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={styles.productImage}
              />
            </Link>
            <div style={styles.productInfo}>
              <Link to={`/product/${product.id}`} style={styles.productNameLink}>
                <h3 style={styles.productName}>{product.name}</h3>
              </Link>
              <p style={styles.productCategory}>{product.category}</p>
              <div style={styles.ratingContainer}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                    color="#fbbf24"
                  />
                ))}
                <span style={styles.ratingText}>({product.rating})</span>
              </div>
              <div style={styles.productFooter}>
                <span style={styles.productPrice}>${product.price}</span>
                <button 
                  onClick={() => handleAddToCart(product)}
                  style={styles.addButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
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
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  filterSection: {
    marginBottom: '2rem',
  },
  filterLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    display: 'block',
  },
  categoryButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  categoryButton: {
    padding: '0.5rem 1.5rem',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#6b7280',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  categoryButtonActive: {
    backgroundColor: '#667eea',
    color: 'white',
    borderColor: '#667eea',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  productLink: {
    textDecoration: 'none',
  },
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '1.5rem',
  },
  productNameLink: {
    textDecoration: 'none',
  },
  productName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1f2937',
  },
  productCategory: {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    marginBottom: '1rem',
  },
  ratingText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginLeft: '0.5rem',
  },
  productFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#667eea',
  },
  addButton: {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
};

export default ProductList;
