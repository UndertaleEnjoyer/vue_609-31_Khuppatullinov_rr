import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({ items: [], orders: [] }),
  getters: {
    total: state => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    count: state => state.items.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    add(product) {
      const item = this.items.find(item => item.id === product.id)
      if (item) item.quantity++
      else this.items.push({ ...product, quantity: 1 })
    },
    remove(id) { this.items = this.items.filter(item => item.id !== id) },
    changeQuantity(id, delta) {
      const item = this.items.find(item => item.id === id)
      if (item) item.quantity = Math.max(1, item.quantity + delta)
    },
    checkout() {
      if (!this.items.length) return
      this.orders.unshift({ id: crypto.randomUUID(), date: new Date().toISOString(), items: this.items.map(item => ({ ...item })), total: this.total })
      this.items = []
    },
  },
  persist: true,
})
