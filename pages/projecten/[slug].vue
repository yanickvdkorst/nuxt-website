<template>
  <div class="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen pt-24 pb-16 px-4 flex ">
    <div v-if="project" class="project-detail">
      <div class="project-detail-banner w-full bg-white/90 rounded-2xl shadow-2xl p-10 border border-white/40 animate-fade-in-up flex flex-col md:flex-row gap-10" >
        <!-- Tekst links -->
        <div class=" w-full flex-1 flex flex-col gap-4 justify-center relative">
        <NuxtLink
          to="/projecten"
          class="inline-block px-0 py-2 text-indigo-700 bg-transparent rounded-none font-semibold shadow-none transition hover:underline"
        >
          &larr; Terug naar projecten
        </NuxtLink>
          <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-800  drop-shadow-lg">{{ project.title }}</h1>
          <p class="text-gray-700 text-lg">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, idx) in project.tags"
              :key="idx"
              class="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex gap-4 items-center">
            <a
              class="group flex items-center rounded-full text-indigo-600 bg-transparent font-semibold transition relative"
              :href="project.github_link || '#'"
              target="_blank"
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="#4F39F6"/>
              </svg>
              <span
                class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-700 whitespace-nowrap typewriter"
              >
                Open GitHub
              </span>
            </a>
          </div>
        </div>
        <!-- Afbeelding rechts -->
        <div class="flex-1 flex items-center justify-center">
          <img
            v-if="project.image_url"
            :src="project.image_url"
            alt="Project afbeelding"
            class="rounded-2xl shadow-lg object-cover h-full"
          />
        </div>
      </div>
      <div class="project-detail-overview mb-16 mt-16">
        <h2 class="text-3xl max-w-7xl mx-auto text-white md:text-4xl font-bold text-indigo-800">Project Overzicht</h2>
        <div class="flex flex-col max-w-7xl mx-auto mt-8 p-8 bg-white/90 rounded-2xl shadow-2xl border border-white/40">
          <p class="text-gray-700 text-lg">{{ project.description || 'Geen overzicht beschikbaar' }}</p>
          <div class="text-gray-700 text-sm mt-6">
            <span>Date: </span>
            <span>{{ new Date(project.publish_date).toLocaleDateString('nl-NL', { year: 'numeric' }) }}</span>
        </div>
        </div>
    
      </div>
    </div>
    <div v-else class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center">
      <p>Project niet gevonden.</p>
    </div>
  </div>
</template>

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

<style scoped>
.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: .15em solid white;
  width: 0;
}

.group:hover .typewriter {
  animation: typing 1s steps(12, end) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 6.5rem }
}
</style>