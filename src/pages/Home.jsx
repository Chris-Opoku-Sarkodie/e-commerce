import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, HeadphonesIcon, Star } from 'lucide-react';
import { useProducts } from '../context/product-context';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  
  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to ShopHub</h1>
          <p style={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices. Your satisfaction is our priority.
          </p>
          <Link to="/products" style={styles.heroButton}>
            <ShoppingBag size={20} />
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <Truck size={40} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>Free Shipping</h3>
            <p style={styles.featureText}>On orders over $50</p>
          </div>
          <div style={styles.featureCard}>
            <Shield size={40} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>Secure Payment</h3>
            <p style={styles.featureText}>100% secure transactions</p>
          </div>
          <div style={styles.featureCard}>
            <HeadphonesIcon size={40} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>24/7 Support</h3>
            <p style={styles.featureText}>Dedicated customer service</p>
          </div>
          <div style={styles.featureCard}>
            <Star size={40} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>Quality Products</h3>
            <p style={styles.featureText}>Carefully curated items</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} style={styles.productCard}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={styles.productImage}
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productCategory}>{product.category}</p>
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
        <div style={styles.viewAllContainer}>
          <Link to="/products" style={styles.viewAllButton}>
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  heroButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'white',
    color: '#667eea',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1.125rem',
    fontWeight: '600',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  features: {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 1rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#f9fafb',
    transition: 'transform 0.3s',
  },
  featureIcon: {
    color: '#667eea',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1f2937',
  },
  featureText: {
    color: '#6b7280',
  },
  productsSection: {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 1rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1f2937',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '1.5rem',
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
    marginBottom: '1rem',
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
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  viewAllButton: {
    display: 'inline-block',
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
};

export default Home;
