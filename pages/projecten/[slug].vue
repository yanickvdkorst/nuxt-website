<script setup lang="ts">
import { useRoute } from "vue-router";
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();
const route = useRoute();

function serialize(obj: any) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== "object") return obj;
  if (obj.toDate) return obj.toDate().toISOString();
  if (Array.isArray(obj)) return obj.map(serialize);
  const out: any = {};
  for (const key in obj) {
    out[key] = serialize(obj[key]);
  }
  return out;
}

const { data: project } = await useAsyncData('project', async () => {
  const querySnapshot = await getDocs(collection($db, "projecten"));
  const allProjects = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...serialize(doc.data())
  }));

  const slug = route.params.slug as string;
  return allProjects.find(p => p.slug === slug || p.id === slug) || null;
});
</script>

<template>
  <div v-if="project" class="max-w-2xl mx-auto py-10">
    <div class="bg-white rounded-lg shadow p-8">
      <h1 class="text-3xl font-bold text-indigo-700 mb-4">{{ project.title }}</h1>
    </div>
  </div>
  <div v-else class="max-w-2xl mx-auto py-10">
    <div class="bg-red-50 text-red-700 rounded-lg shadow p-8">
      <p>Project niet gevonden.</p>
    </div>
  </div>
</template>