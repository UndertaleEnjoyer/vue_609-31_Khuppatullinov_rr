<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import CartProduct from '../components/CartProduct.vue'
const cart = useCartStore()
const ordered = ref(false)
function checkout() { cart.checkout(); ordered.value = true }
</script>
<template>
  <h1>Корзина</h1><p v-if="ordered" role="status" class="success">Заказ оформлен. Он доступен на странице «Заказы».</p>
  <template v-if="cart.items.length"><CartProduct v-for="item in cart.items" :key="item.id" :product="item" /><div class="checkout"><strong>Итого: {{ cart.total.toLocaleString('ru-RU') }} ₽</strong><button class="primary" @click="checkout">Оформить заказ</button></div></template>
  <div v-else class="empty"><p>Корзина пуста 🛒</p><RouterLink :to="{name: 'catalog'}">Перейти в каталог</RouterLink></div>
</template>
