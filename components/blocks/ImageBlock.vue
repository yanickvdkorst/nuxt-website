<template>
  <div class="image mb-20 mt-20">
    <div class="image-container w-full mx-auto aspect-[2/1] rounded-lg overflow-hidden shadow-lg">
        <NuxtImg :src="blok.image_url" :alt="blok.tag"  class="w-full h-full object-cover"/>
    </div>
    <p class="mt-2 text-white">{{ blok.tag }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    tag: string;
    image_url: string;
  };
}>();
</script>
