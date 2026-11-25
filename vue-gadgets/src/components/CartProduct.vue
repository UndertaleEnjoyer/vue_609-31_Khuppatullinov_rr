<script setup>
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
defineProps({ product: { type: Object, required: true } })
const cart = useCartStore()
const favorites = useFavoritesStore()
</script>
<template>
  <article class="cart-product">
    <img :src="product.imageUrl" :alt="product.title"><div class="grow"><h3>{{ product.title }}</h3><p>{{ product.price.toLocaleString('ru-RU') }} ₽ за штуку</p><button :aria-pressed="favorites.has(product.id)" @click="favorites.toggle(product)">{{ favorites.has(product.id) ? 'Убрать из избранного' : 'В избранное' }}</button></div>
    <div class="quantity"><button aria-label="Уменьшить количество" :disabled="product.quantity <= 1" @click="cart.changeQuantity(product.id, -1)">−</button><span>{{ product.quantity }}</span><button aria-label="Увеличить количество" @click="cart.changeQuantity(product.id, 1)">+</button></div>
    <strong>{{ (product.price * product.quantity).toLocaleString('ru-RU') }} ₽</strong><button aria-label="Удалить товар" @click="cart.remove(product.id)"><img class="icon" src="/trash-icon.svg" alt=""></button>
  </article>
</template>
