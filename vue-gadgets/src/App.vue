<script setup>
import { useCartStore } from './stores/cart'
import { useFavoritesStore } from './stores/favorites'
const cart = useCartStore()
const favorites = useFavoritesStore()
</script>
<template>
  <div class="app-shell">
    <header><RouterLink :to="{ name: 'catalog' }" aria-label="Каталог Behoof"><img class="logo" src="/logo.svg" alt="Behoof" /></RouterLink><span class="tagline">Лучшие цены<br>в интернет-магазинах</span>
      <nav aria-label="Основная навигация">
        <RouterLink :to="{ name: 'catalog' }"><img src="/catalog-icon.svg" alt="">Каталог</RouterLink>
        <RouterLink :to="{ name: 'favorites' }"><img src="/like-outline.svg" alt="">Избранное ({{ favorites.items.length }})</RouterLink>
        <RouterLink :to="{ name: 'cart' }"><img src="/cart-icon.svg" alt="">Корзина ({{ cart.count }})</RouterLink>
        <RouterLink :to="{ name: 'orders' }"><img src="/orders-icon.svg" alt="">Заказы</RouterLink>
      </nav>
    </header>
    <main class="page"><RouterView /></main>
    <footer>Copyright © 2026 Behoof, Inc. Все права защищены</footer>
  </div>
</template>
