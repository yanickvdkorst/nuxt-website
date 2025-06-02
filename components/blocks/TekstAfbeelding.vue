<template>
<div class="my-6 flex flex-col mb-20 mt-20 md:flex-row gap-8 items-center animate-fade-in-up">
  <img v-if="blok.image" :src="blok.image" class="w-full md:w-1/3 rounded-xl shadow-md" />
  <div class="flex-1 md:ml-16">
    <h2 class="text-2xl font-bold text-white">{{ blok.title }}</h2>
    <p class="mt-2 text-white">{{ blok.text }}</p>
  </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    title: string;
    text: string;
    image: string;
  };
}>();
</script>
