<template>
  <div class="category-container">
    <div v-if="categories && categories.length > 0">
      <div v-for="(category, index) in categories" :key="index" class="category-item">
        <h1>{{ category.category_name }}</h1>
        <p>{{ category.category_description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Data on the way...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref<{ category_name: string; category_description: string }[]>([]);

const fetchCategoryData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('API fetch error:', error);
  }
};

onMounted(() => {
  fetchCategoryData();
});
</script>

<style scoped>
.category-container {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 400px;
  margin: 20px auto;
  text-align: center;
}

h1 {
  color: #333;
}

p {
  color: #666;
}
</style>
