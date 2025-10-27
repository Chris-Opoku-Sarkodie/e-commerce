import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.section}>
            <h3 style={styles.heading}>About ShopHub</h3>
            <p style={styles.text}>
              Your one-stop destination for quality products at great prices. 
              We're committed to providing the best shopping experience.
            </p>
          </div>
          
          <div style={styles.section}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
              <li><a href="/" style={styles.link}>Home</a></li>
              <li><a href="/products" style={styles.link}>Products</a></li>
              <li><a href="/cart" style={styles.link}>Cart</a></li>
            </ul>
          </div>
          
          <div style={styles.section}>
            <h3 style={styles.heading}>Contact Us</h3>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <Mail size={16} />
                <span>support@shophub.com</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={styles.contactItem}>
                <MapPin size={16} />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2025 ShopHub. All rights reserved. Made with <Heart size={16} style={styles.heart} /> by ShopHub Team
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1f2937',
    color: '#9ca3af',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1rem 1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  text: {
    lineHeight: '1.6',
    fontSize: '0.875rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
  },
  bottom: {
    borderTop: '1px solid #374151',
    paddingTop: '1.5rem',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
  },
  heart: {
    color: '#ef4444',
  },
};

export default Footer;
