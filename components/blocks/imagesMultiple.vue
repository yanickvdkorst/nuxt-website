<template>
  <div class="image-multiple mb-20 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(img, idx) in blok.image_url"
      :key="idx"
      class="image-container w-full mx-auto aspect-[2/3] rounded-lg overflow-hidden shadow-lg"
    >
      <img
        :src="img"
        alt="images"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    image_url: string[];
  };
}>();
</script>