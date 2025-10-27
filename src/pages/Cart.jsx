import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <ShoppingBag size={64} style={styles.emptyIcon} />
        <h2 style={styles.emptyTitle}>Your cart is empty</h2>
        <p style={styles.emptyText}>Add some products to get started!</p>
        <Link to="/products" style={styles.shopButton}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>
      
      <div style={styles.cartLayout}>
        <div style={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              
              <div style={styles.itemInfo}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemCategory}>{item.category}</p>
                <p style={styles.itemPrice}>${item.price}</p>
              </div>

              <div style={styles.quantityControls}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.quantityButton}
                >
                  <Minus size={16} />
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.quantityButton}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div style={styles.itemTotal}>
                <p style={styles.totalPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeButton}
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          
          <div style={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          
          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span>{getCartTotal() > 50 ? 'FREE' : '$5.00'}</span>
          </div>
          
          <div style={styles.summaryRow}>
            <span>Tax (10%)</span>
            <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
          </div>
          
          <div style={styles.divider}></div>
          
          <div style={styles.summaryTotal}>
            <span>Total</span>
            <span>${(getCartTotal() * 1.1 + (getCartTotal() > 50 ? 0 : 5)).toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            style={styles.checkoutButton}
          >
            Proceed to Checkout
          </button>

          <Link to="/products" style={styles.continueButton}>
            Continue Shopping
          </Link>
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
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '2rem',
  },
  emptyCart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 200px)',
    textAlign: 'center',
    padding: '2rem',
  },
  emptyIcon: {
    color: '#9ca3af',
    marginBottom: '1rem',
  },
  emptyTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  emptyText: {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '2rem',
  },
  shopButton: {
    display: 'inline-block',
    backgroundColor: '#667eea',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '2rem',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr auto auto',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  itemImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  itemName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  itemCategory: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  itemPrice: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#667eea',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
  },
  quantityButton: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  quantity: {
    fontSize: '1rem',
    fontWeight: '600',
    minWidth: '30px',
    textAlign: 'center',
  },
  itemTotal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.5rem',
  },
  totalPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  removeButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#ef4444',
    border: '1px solid #ef4444',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all 0.3s',
  },
  summary: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1.5rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    fontSize: '1rem',
    color: '#4b5563',
  },
  divider: {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '1rem 0',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  checkoutButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background-color 0.3s',
  },
  continueButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    backgroundColor: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'center',
    textDecoration: 'none',
    marginTop: '1rem',
    transition: 'all 0.3s',
  },
};

export default Cart;
