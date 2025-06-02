<template>
      <div class="project-detail-overview mb-20 mt-20 animate-fade-in-up">
        <h2 class="text-3xl max-w-7xl mx-auto text-white md:text-4xl font-bold text-indigo-800">{{ blok.title }}</h2>
        <div class="content-container flex flex-col max-w-7xl mx-auto mt-8 p-8  rounded-2xl shadow-2xl">
          <p class="text-white text-lg">{{ blok.text || 'Geen overzicht beschikbaar' }}</p>
          <div class="text-white text-lg mt-6">
            <span class="font-bold">Date: </span>
            <span>{{ new Date(blok.date).toLocaleDateString('nl-NL', { year: 'numeric' }) }}</span>
        </div>
        </div>
    
      </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    title: string;
    text: string;
    date: string;
  };
}>();
</script>

<style scoped>
    .content-container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
</style>
