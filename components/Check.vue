<template>
  <div class="w-1/3 bg-white p-6 shadow-lg rounded-lg flex flex-col">
    <!-- Заголовок -->
    <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800">Чек</h2>

    <!-- Список товаров в корзине -->
    <div
      v-for="item in cartStore.cart"
      :key="item.id"
      class="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
      <!-- Название товара (фиксированная ширина) -->
      <span class="flex-1 text-gray-700 text-lg truncate">{{ item.name }}</span>

      <!-- Кнопки для изменения количества товара и цена -->
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-2">
          <button
            @click="updateQuantity(item, -1)"
            :disabled="item.quantity === 1"
            class="text-gray-600 hover:text-gray-800 disabled:opacity-50 transition-colors">
            ➖
          </button>
          <span class="font-semibold text-gray-800 text-lg">{{
            item.quantity
          }}</span>
          <button
            @click="updateQuantity(item, 1)"
            class="text-gray-600 hover:text-gray-800 transition-colors">
            ➕
          </button>
        </div>

        <!-- Цена товара и кнопка удаления (фиксированная ширина) -->
        <div class="flex items-center space-x-3 w-24">
          <span class="font-semibold text-gray-800 text-lg"
            >{{ item.totalPrice }}₽</span
          >
          <button
            @click="cartStore.removeFromCart(item.id)"
            class="text-red-500 hover:text-red-700 transition-colors text-lg">
            ❌
          </button>
        </div>
      </div>
    </div>

    <!-- Общая сумма -->
    <div class="flex justify-between mt-4">
      <h3 class="text-lg font-semibold text-gray-800">Итого:</h3>
      <span class="font-bold text-2xl text-gray-900"
        >{{ cartStore.total }}₽</span
      >
    </div>

    <!-- Кнопка оплатить -->
    <div class="mt-auto">
      <button
        @click="cartStore.checkout"
        :disabled="cartStore.cart.length === 0"
        class="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-all duration-200 ease-in-out hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400">
        Оплатить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/useCart";

// Используется для изменения количества товара в корзине
const cartStore = useCartStore();

// Функция для обновления количества товара
function updateQuantity(item, change) {
  if (item.quantity + change <= 0) {
    cartStore.removeFromCart(item.id); // Удаляем товар, если количество <= 0
  } else {
    item.quantity += change;
    item.totalPrice = item.quantity * item.price;
  }
}
</script>
