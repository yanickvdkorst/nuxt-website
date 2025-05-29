<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  </head>
  <header class="">
    <NuxtLink to="/" class="fixed left-6 top-6 hover:text-white transition-colors scale-115 z-50 group">
      <img src="/assets/images/golfcar.svg" alt="Golfcar Logo" class="w-8 h-8 inline-block mr-2 transition-transform duration-300 group-hover:scale-115">
    </NuxtLink>
     <FullScreenNav />
     <Analytics/>
     <SpeedInsights/>
  </header>
  <NuxtPage />
      <div
      class="custom-cursor"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import FullScreenNav from "~/components/FullScreenNav.vue";
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const cursorX = ref(0);
const cursorY = ref(0);

function handleMouseMove(event: MouseEvent) {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>