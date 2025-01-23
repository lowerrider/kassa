import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cart: [],
  }),

  getters: {
    total(state) {
      return state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },

  actions: {
    async fetchProducts() {
      console.log("Загрузка товаров...");
      this.products = [
        { id: 1, name: "Кофе", price: 150, category: "Напитки" },
        { id: 2, name: "Чай", price: 100, category: "Напитки" },
        { id: 3, name: "Пирожное", price: 200, category: "Десерты" },
        { id: 4, name: "Пицца", price: 200, category: "Десерты" },
        { id: 5, name: "Пиво", price: 200, category: "Десерты" },
      ];
      console.log("Товары загружены:", this.products);
    },

    addToCart(product) {
      const item = this.cart.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      } else {
        this.cart.push({ ...product, quantity: 1, totalPrice: product.price });
      }
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },

    checkout() {
      alert(`Оплачено: ${this.total}₽`);
      this.cart = [];
    },
  },
});
