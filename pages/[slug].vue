<template>
  <div class="min-h-screen flex items-center flex-col md:justify-center py-16 px-4">
    <div class="text-center text-white animate-fade-in-up delay-800 flex items-center flex-col-reverse lg:flex-row gap-x-32">
      <div class="left mt-5 lg:mt-0">
        <h1 class="text-5xl font-bold">{{ hero?.title || '...' }}</h1>
        <div class="mt-4 lg:mt-8 flex gap-4 justify-center animate-fade-in delay-300">
          <a
            class="px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition"
            href="mailto:yanick.van.der.korst@kpnmail.nl"
          >
            Stuur een mail
          </a>
          <a
            class="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition"
            href="https://www.linkedin.com/in/yanickvdk/"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img src="../assets/images/Yanick_small.jpg" class="w-128 h-128 object-cover rounded-lg shadow" alt="" />

    </div>
  </div>
</template>


<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { collection, getDocs, query, where, Firestore } from "firebase/firestore";
import { ref, watch } from "vue";

const { $db } = useNuxtApp();
const db = $db as Firestore;

const route = useRoute();

const hero = ref<any>(null);

async function fetchHero(slug: string) {
  const q = query(collection(db, "pages"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => doc.data());
  hero.value = docs.length > 0 && docs[0].hero_section ? docs[0].hero_section : null;
}

// Initial fetch
await fetchHero(route.params.slug as string);

// Watch for slug changes
watch(
  () => route.params.slug,
  async (newSlug) => {
    await fetchHero(newSlug as string);
  }
);
</script>

<style scoped>
/* Hier alleen CSS, geen template tags! */
</style>
