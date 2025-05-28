<template>
  <header class="bg-white shadow-md py-4 px-8 flex items-center justify-between">
    <NuxtLink to="/" class="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition-colors">Home</NuxtLink>
    <nav>
      <ul class="flex space-x-6">
        <li>
          <NuxtLink
            to="/projecten"
            class="text-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            active-class="underline text-indigo-700"
          >
            Projecten
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <NuxtPage />
</template>