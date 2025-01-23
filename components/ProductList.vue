<template>
  <div>
    <!-- Все товары, отображаемые по поиску -->
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="product in filteredProducts"
        :key="product.id"
        @click="addToCart(product)"
        class="p-3 bg-white shadow rounded-lg flex justify-between items-center hover:bg-gray-200">
        <span class="font-medium">{{ product.name }}</span>
        <span class="text-blue-500 font-semibold">{{ product.price }}₽</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "~/store/useCart";

// Принимаем пропсы от родительского компонента
const props = defineProps({
  searchQuery: String,
  products: Array,
});

// Ссылка на cartStore
const cartStore = useCartStore();

// Фильтруем товары по поисковому запросу
const filteredProducts = computed(() =>
  props.products.filter((p) =>
    p.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
);

// Добавление товара в корзину
function addToCart(product) {
  cartStore.addToCart(product);
}
</script>

<style scoped>
/* Применим стили для карточек товаров */
button {
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-5px);
}
</style>
