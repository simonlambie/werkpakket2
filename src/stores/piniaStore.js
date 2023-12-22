import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '@/products.json'

const CART_STORAGE_KEY = 'cart';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartCount: 0,
    cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [],
    products,
  }),
  actions: {
    updateCartCount(newCount) {
      this.cartCount = newCount;
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    },
    addToCart(product, quantity) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem){
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
          thumbnail: product.thumbnail
        });
      }

      const newCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
      this.updateCartCount(newCount);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    },
    clearCartItem (itemId){
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      const newCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
      this.updateCartCount(newCount);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    },
    getCartItems(){
      return this.cartItems;
    }
  },
});

