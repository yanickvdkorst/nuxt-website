<template>
  <div class="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-8 px-4 text-white">
    <Head>
      <title>Projecten</title>
      <meta name="description" content="Overzicht van alle projecten" />
    </Head>

    <h1 class="text-4xl font-extrabold text-center mb-16 md:mb-32 mt-16 text-white drop-shadow-lg tracking-tight">
      Mijn projecten
    </h1>
    <div class="w-full px-4 flex justify-center">
    <ul class="grid grid-cols-1 gap-10 animate-fade-in-up">
      <li
        v-for="project in projects"
        :key="project.id"
        class="group relative"
      >
        <!-- Hele kaart klikbaar -->
        <NuxtLink
          :to="`/projecten/${project.slug || project.id}`"
          class="absolute inset-0 z-10 rounded-2xl focus:outline-none"
          tabindex="0"
          aria-label="Bekijk project"
        />
        <!-- Kaart content -->
        <div
          class="bg-white/90 max-w-7xl rounded-2xl shadow-2xl p-10 border border-white/40 flex flex-col md:flex-row gap-10 overflow-hidden relative z-0 transition-all duration-200 group-hover:shadow-pink-400 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-pink-400 cursor-pointer"
        >
          <!-- Tekst links -->
          <div class="flex-1 flex flex-col justify-center gap-4">
            <h2 class="text-3xl md:text-4xl font-extrabold text-indigo-800 drop-shadow-lg group-hover: transition">
              {{ project.title || project.id }}
            </h2>
            <p class="text-gray-700 text-lg">
              {{ project.description || 'Geen beschrijving beschikbaar' }}
            </p>
            <div class="flex flex-wrap gap-2 ">
              <span
                v-for="(tag, idx) in project.tags"
                :key="idx"
                class="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-2 items-center ">
              <span class="inline-block w-fit px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow group-hover:bg-pink-600 transition">
                Bekijk project &rarr;
              </span>
            </div>
          </div>
          <!-- Afbeelding rechts -->
          <div class="flex-1 flex items-center justify-center">
            <img
              v-if="project.image_url"
              :src="project.image_url"
              alt="Project afbeelding"
              class="rounded-2xl shadow-lg max-h-96 object-cover w-full"
            />
          </div>
        </div>
      </li>
      </ul>
    </div>
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