<script setup>
defineProps({
  imgUrl: String,
  title: String,
  price: String,
});
</script>
<template>
  <div class="p-5 bg-slate-100 rounded-xl flex flex-col justify-between gap-2">
    <div>
      <img :src="imgUrl" alt="" class="mb-4" />
      <h3 class="text-xl font-semibold">
        {{ title }}
      </h3>
    </div>
    <div class="flex items-center justify-between gap-2">
      <div>
        <p class="text-slate-500">Цена</p>
        <b class="text-xl">{{ price }} ₽</b>
      </div>
      <div class="flex items-center gap-3"><!-- Свернутые строки 27-69 --></div>
    </div>
  </div>
</template>
