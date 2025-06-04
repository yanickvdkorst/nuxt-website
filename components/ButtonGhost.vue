<template>
  <NuxtLink
    :to="to"
    class="px-6 py-3 rounded-full  border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition"
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
