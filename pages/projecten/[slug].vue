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
              <!-- GitHub SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                <path d="..." fill="#4F39F6"/>
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

      <!-- Flexibele blokken dynamisch renderen -->
      <div v-if="project.fieldgroups" class="mt-16 max-w-7xl mx-auto space-y-10">
        <component
          v-for="(blok, index) in project.fieldgroups"
          :key="index"
          :is="resolveComponent(blok.type)"
          :blok="blok.value"
        />
      </div>

      <div v-else class="mt-16 text-white text-center">
        <p>Geen blokken beschikbaar voor dit project.</p>
      </div>

     <!-- Footer Projecten -->
      <div v-if="project.footer == true" class="mt-20 flex flex-col items-center text-center text-white">
        <h3 class="text-2xl font-bold mb-2">Interested in this project?</h3>
        <p class="mb-6 text-gray-100">Explore the source code on GitHub</p>


           <ButtonBlue
               :to="project.github_link || '#'"
                target="_blank"
                 rel="noopener"
              >
                  Open GitHub
            </ButtonBlue>
      </div>

    </div>

    <div v-else class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center">
      <p>Project niet gevonden.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { collection, getDocs, Firestore } from "firebase/firestore";

import TekstAfbeelding from "~/components/blocks/TekstAfbeelding.vue";
import ProjectOverview from "~/components/blocks/ProjectOverview.vue";
import ImageBlock from "~/components/blocks/ImageBlock.vue";
import imagesMultiple from "~/components/blocks/imagesMultiple.vue";
// importeer hier je andere blokken als je die hebt, bijv:
// import TextBlock from "~/components/blocks/TextBlock.vue";

const { $db } = useNuxtApp();
const db = $db as Firestore;

const route = useRoute();

function serialize(obj: any): any {
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
  const querySnapshot = await getDocs(collection(db, "projecten"));
  const allProjects = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...serialize(doc.data())
  }));

  const slug = route.params.slug as string;
  return allProjects.find(p => p.slug === slug || p.id === slug) || null;
});

// Component resolver functie
function resolveComponent(type: string) {
  switch (type) {
    case "tekst_afbeelding":
      return TekstAfbeelding;
    case "overview_text":
      return ProjectOverview;
    case "image":
      return ImageBlock;
    case "images":
      return imagesMultiple;
    // Voeg hier meer bloktypen toe, bijvoorbeeld:
    // case "text":
    //   return TextBlock;
    default:
      return null;
  }
}
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