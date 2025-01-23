<template>
  <div class="flex h-screen">
    <Check />

    <div class="w-2/3 p-5">
      <h1 class="text-3xl font-bold mb-4">Касса</h1>

      <!-- Компонент поиска -->
      <Search
        :searchQuery="searchQuery"
        @update:searchQuery="searchQuery = $event" />

      <!-- Компонент с отображением товаров -->
      <ProductList :searchQuery="searchQuery" :products="cartStore.products" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Check from "~/components/Check.vue";
import Search from "~/components/Search.vue";
import ProductList from "~/components/ProductList.vue";
import { useCartStore } from "~/store/useCart";

const searchQuery = ref("");
const cartStore = useCartStore();

onMounted(async () => {
  await cartStore.fetchProducts(); // Загружаем товары при монтировании компонента
});
</script>
