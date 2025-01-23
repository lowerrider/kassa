<template>
  <input
    :value="searchQuery"
    @input="updateSearchQuery"
    type="text"
    placeholder="Поиск товаров..."
    class="w-full p-2 mb-4 border rounded" />
</template>

<script setup>
defineProps(["searchQuery"]);

const emit = defineEmits();

// Функция для обновления searchQuery
function updateSearchQuery(event) {
  emit("update:searchQuery", event.target.value); // передаем значение из поля ввода
}
</script>
