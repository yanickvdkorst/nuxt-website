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
      class="fixed px-16 py-8 inset-0 bg-indigo-900 bg-opacity-95 flex flex-col justify-center text-white text-3xl font-bold transform transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <nav class="space-y-6  flex flex-col">
        <NuxtLink  @click="toggleNav" to="/" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-pink-400 hover:-translate-y-4 hover:translate-x-2">Home</NuxtLink>
        <NuxtLink @click="toggleNav" to="/projecten" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-yellow-300 hover:-translate-y-4 hover:translate-x-2">Projecten</NuxtLink>
        <NuxtLink  @click="toggleNav" to="/contact" class="text-4xl md:text-8xl xl:text-[12rem] transition-all duration-300 hover:text-green-300 hover:-translate-y-4 hover:translate-x-2">Contact</NuxtLink>
      </nav>
<div class="socials absolute  translate-x-1/2 md:translate-x-0 md:right-0 bottom-0 md:bottom-auto bg-white p-3 shadow flex flex-row md:flex-col gap-4">
        <a href="https://www.linkedin.com/in/yanickvdk/"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18" fill="none">
        <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="#4F39F6"/>
        </svg></a>
                <a href="mailto:yanick.van.der.korst@kpnmail.nl"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 16" fill="none">
        <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#4F39F6"/>
        </svg></a>
        <a href="https://github.com/yanickvdkorst"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="#4F39F6"/>
          </svg></a>
      </div>
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

.socials { border-radius: 1rem 0 0 1rem;}



@media screen and (max-width: 768px) {
  .socials { border-radius: 1rem 1rem 0 0;}
}
</style>
