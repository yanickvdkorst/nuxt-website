<template>
  <NuxtLink
    :to="to"
    class="px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition"    
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
