<script setup>
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
defineProps({ product: { type: Object, required: true } })
const cart = useCartStore()
const favorites = useFavoritesStore()
</script>
<template>
  <article class="product-card">
    <img class="product-image" :src="product.imageUrl" :alt="product.title">
    <h3>{{ product.title }}</h3>
    <p class="muted">Цена</p><strong>{{ product.price.toLocaleString('ru-RU') }} ₽</strong>
    <div class="actions">
      <button :aria-label="favorites.has(product.id) ? 'Убрать из избранного' : 'В избранное'" :aria-pressed="favorites.has(product.id)" @click="favorites.toggle(product)">{{ favorites.has(product.id) ? '♥' : '♡' }}</button>
      <button class="primary" @click="cart.add(product)">В корзину</button>
    </div>
  </article>
</template>
