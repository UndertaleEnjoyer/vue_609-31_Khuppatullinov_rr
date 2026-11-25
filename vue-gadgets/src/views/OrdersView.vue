<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>
<template><h1>Заказы</h1><div v-if="!cart.orders.length" class="empty">У вас пока нет заказов</div><article v-for="(order, index) in cart.orders" :key="order.id" class="order"><h2>Заказ № {{ cart.orders.length - index }}</h2><p>{{ new Date(order.date).toLocaleString('ru-RU') }}</p><p v-for="item in order.items" :key="item.id">{{ item.title }} — {{ item.quantity }} шт. × {{ item.price.toLocaleString('ru-RU') }} ₽</p><strong>Итого: {{ order.total.toLocaleString('ru-RU') }} ₽</strong></article></template>
