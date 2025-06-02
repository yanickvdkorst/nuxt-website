<template>
  <div class="my-6 flex flex-col md:flex-row gap-4 items-center">
    <img v-if="blok.afbeelding" :src="blok.afbeelding" class="w-full md:w-1/3 rounded-xl shadow-md" />
    <div class="flex-1">
      <h2 class="text-2xl font-bold text-indigo-800">{{ blok.titel }}</h2>
      <p class="mt-2 text-gray-700">{{ blok.tekst }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    titel: string;
    tekst: string;
    afbeelding: string;
  };
}>();
</script>
