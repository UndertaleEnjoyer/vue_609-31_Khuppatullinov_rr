<script setup>
import { useFavoritesStore } from '../stores/favorites'
import VProduct from '../components/VProduct.vue'
const favorites = useFavoritesStore()
</script>
<template><h1>Избранное</h1><div v-if="favorites.items.length" class="product-grid"><VProduct v-for="item in favorites.items" :key="item.id" :product="item" /></div><div v-else class="empty"><p>В избранном пока ничего нет 🤍</p><RouterLink :to="{name: 'catalog'}">Перейти в каталог</RouterLink></div></template>
