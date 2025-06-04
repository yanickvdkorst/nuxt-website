<template>
  <NuxtLink
    :to="to"
    class="inline-block w-fit px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string,
  label?: string
}>();
</script>
