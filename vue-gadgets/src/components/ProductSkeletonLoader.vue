<template>
  <div class="product-grid" role="status" aria-label="Загрузка товаров">
    <div v-for="n in 5" :key="n" class="product-card skeleton"><div class="skeleton-image"></div><div class="skeleton-line"></div><div class="skeleton-line"></div></div>
    <span class="sr-only">Загрузка товаров...</span>
  </div>
</template>
