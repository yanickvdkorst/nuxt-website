<template>
  <div class="max-w-3xl mx-auto py-8">
    <Head>
      <title>Projecten</title>
      <meta name="description" content="Overzicht van alle projecten" />
    </Head>
    <h1 class="text-3xl font-bold mb-6 text-indigo-700">Projecten</h1>
    <ul class="space-y-4">
      <li
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
      >
        <NuxtLink
          :to="`/projecten/${project.slug || project.id}`"
          class="text-xl text-indigo-600 hover:underline font-semibold"
        >
          {{ project.title || project.id }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();

function serialize(obj: any) {
  // Zet Firestore Timestamps om naar ISO strings
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