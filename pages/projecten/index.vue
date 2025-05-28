<template>
  <div class="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-8 px-16 text-white">
    <Head>
      <title>Projecten</title>
      <meta name="description" content="Overzicht van alle projecten" />
    </Head>

    <h1 class="text-4xl font-extrabold text-center mb-32 text-white drop-shadow-lg tracking-tight">
      Mijn projecten
    </h1>
    <ul class="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
      <li
        v-for="project in projects"
        :key="project.id"
        class="group bg-white/90 rounded-xl shadow-xl hover:shadow-indigo-400 transition-all duration-300 transform hover:-translate-y-1 p-4 border border-white/30 relative overflow-hidden"
      >
        <span class="absolute top-3 right-3 bg-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow text-white uppercase tracking-widest  transition">
          Project
        </span>
        <NuxtLink
          :to="`/projecten/${project.slug || project.id}`"
          class="block focus:outline-none"
        >
          <h2 class="text-lg font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition">
            {{ project.title || project.id }}
          </h2>
          <p class="text-gray-700 text-sm mb-4 min-h-[32px]">
            {{ project.description || 'Geen beschrijving beschikbaar' }}
          </p>
          <span class="inline-block mt-2 px-4 py-1.5 bg-indigo-600 text-white rounded-full font-semibold shadow group-hover:bg-pink-600">
            Bekijk project &rarr;
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();

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

const { data: projects } = await useAsyncData('projects', async () => {
  const querySnapshot = await getDocs(collection($db, "projecten"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...serialize(doc.data())
  }));
});
</script>
