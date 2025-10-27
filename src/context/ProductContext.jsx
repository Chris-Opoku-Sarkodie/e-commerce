import { ProductContext } from './product-context';
import { useState } from 'react';

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
      rating: 4.5,
      stock: 15
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 399.99,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description: 'Advanced smartwatch with health tracking, GPS, and long battery life.',
      rating: 4.7,
      stock: 20
    },
    {
      id: 3,
      name: 'Designer Backpack',
      price: 89.99,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      description: 'Stylish and durable backpack perfect for daily use and travel.',
      rating: 4.3,
      stock: 30
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 129.99,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      description: 'Comfortable running shoes with excellent cushioning and support.',
      rating: 4.6,
      stock: 25
    },
    {
      id: 5,
      name: 'Coffee Maker Deluxe',
      price: 149.99,
      category: 'Home',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
      description: 'Premium coffee maker with programmable settings and thermal carafe.',
      rating: 4.4,
      stock: 12
    },
    {
      id: 6,
      name: 'Yoga Mat Premium',
      price: 49.99,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
      description: 'Extra thick yoga mat with non-slip surface for all types of yoga.',
      rating: 4.8,
      stock: 40
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      price: 79.99,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      description: 'Portable waterproof speaker with 360-degree sound and 12-hour battery.',
      rating: 4.5,
      stock: 18
    },
    {
      id: 8,
      name: 'Sunglasses Classic',
      price: 159.99,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
      description: 'UV protection sunglasses with polarized lenses and timeless design.',
      rating: 4.2,
      stock: 22
    }
  ]);

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const getProductsByCategory = (category) => {
    if (!category || category === 'All') return products;
    return products.filter(product => product.category === category);
  };

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <ProductContext.Provider value={{ products, getProductById, getProductsByCategory, categories }}>
      {children}
    </ProductContext.Provider>
  );
};
