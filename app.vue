<template>
  <header class="py-8 px-16 flex items-center justify-between">
   <!-- <NuxtLink to="/" class="group text-2xl font-bold text-white hover:text-white transition-colors scale-115">
      <img src="/assets/images/golfcar.svg" alt="Golfcar Logo" class="w-12 h-12 inline-block mr-2 transition-transform duration-300 group-hover:scale-115">
    </NuxtLink> -->
    <!-- <nav>
      <ul class="flex space-x-6">
        <li>
          <NuxtLink
            to="/projecten"
            class="text-lg text-white hover:text-white font-medium transition-colors"
            active-class="underline text-white"
          >
            Projecten
          </NuxtLink>
        </li>
      </ul>
    </nav> -->
     <FullScreenNav />
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