<template>
  <div>
    <!-- Knop om menu te openen -->
    <button @click="toggleNav" class="fixed top-6 right-6 z-50 text-white">
      <svg
        v-if="!isOpen"
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <svg
        v-else
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Fullscreen overlay -->
    <div
      class="fixed px-16 py-8 inset-0 bg-indigo-900 bg-opacity-95 flex flex-col justify-center text-white text-3xl font-bold transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <nav class="space-y-6  flex flex-col">
        <NuxtLink  @click="toggleNav" to="/" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-pink-400 hover:-translate-y-4 hover:translate-x-2">Home</NuxtLink>
        <NuxtLink @click="toggleNav" to="/projecten" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-yellow-300 hover:-translate-y-4 hover:translate-x-2">Projecten</NuxtLink>
        <NuxtLink  @click="toggleNav" to="/contact" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-green-300 hover:-translate-y-4 hover:translate-x-2">Contact</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const toggleNav = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Transition class to hide/show fullscreen nav */
.translate-x-full {
  transform: translateX(100%);
}
.translate-x-0 {
  transform: translateX(0);
}
</style>
