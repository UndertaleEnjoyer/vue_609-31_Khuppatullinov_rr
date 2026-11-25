import { defineStore } from 'pinia'
export const useFavoritesStore = defineStore('favorites', {
  state: () => ({ items: [] }),
  actions: {
    has(id) { return this.items.some(item => item.id === id) },
    toggle(product) {
      if (this.has(product.id)) this.items = this.items.filter(item => item.id !== product.id)
      else this.items.push({ ...product })
    },
  },
  persist: true,
})
