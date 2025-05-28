<template>
  <div class="min-h-screen flex items-center flex-col justify-center bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-12 px-4">
    <div class="text-center text-white animate-fade-in-up delay-800 flex items-center gap-x-32">
      <div class="left">
        <h1 class="text-5xl font-bold">Neem contact op</h1>
        <div class="mt-8 flex gap-4 justify-center animate-fade-in delay-300">
          <a
            class="px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition"
            href="mailto:yanick.van.der.korst@kpnmail.nl"
          >
            Stuur een mail
          </a>
          <a
            class="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition"
            href="https://www.linkedin.com/in/yanickvdk/"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img src="../assets/images/Yanick_small.jpg" class="w-128 h-128 object-cover rounded-lg shadow" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Je script hier, of leeg als niet nodig
</script>

<style scoped>
/* Hier alleen CSS, geen template tags! */
</style>
