<template>
  <header class="py-8 px-16 flex items-center justify-between">
    <NuxtLink to="/" class="text-2xl font-bold text-white hover:text-white transition-colors">
      <img src="/assets/images/golfcar.svg" alt="Golfcar Logo" class="w-12 h-12 inline-block mr-2">
    </NuxtLink>
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
  </header>
  <NuxtPage />
</template>