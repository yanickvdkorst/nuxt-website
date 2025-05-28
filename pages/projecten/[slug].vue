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
  <div class="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-16 px-4 flex items-center justify-center">
    <div v-if="project" class="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-10 border border-white/40 relative overflow-hidden animate-fade-in-up">
      <span class="absolute top-6 right-6 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow text-white uppercase tracking-widest">
        Project
      </span>
      <h1 class="text-4xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg">{{ project.title }}</h1>
      <p class="text-gray-700 text-lg mb-8">{{ project.description }}</p>
      <div v-if="project.content" class="prose max-w-none">
        <div v-for="(item, idx) in project.content" :key="idx">
          <p v-if="item.type === 'text'">{{ item.value }}</p>
        </div>
      </div>
      <NuxtLink
        to="/projecten"
        class="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition"
      >
        &larr; Terug naar projecten
      </NuxtLink>
    </div>
    <div v-else class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center">
      <p>Project niet gevonden.</p>
    </div>
  </div>
</template>