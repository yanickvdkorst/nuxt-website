<template>
  <div>
    <Head>
      <title>{{ hero?.title || 'Homepage' }}</title>
      <meta name="description" :content="hero?.description || 'Homepage description'" />
    </Head>

    <section
      v-if="hero"
      class="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 overflow-hidden"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <!-- Content -->
      <div class="relative z-10 p-8">
        <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-4 animate-fade-in-up">
          {{ hero.title }}
        </h1>
        <p class="text-lg md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
          {{ hero.description }}
        </p>
       <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">

          <ButtonWhite to="/projecten">
            Bekijk projecten
          </ButtonWhite>
          <ButtonGhost to= "/contact">
             Neem contact op
          </ButtonGhost>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs, query, where, Firestore } from "firebase/firestore";


const { $db } = useNuxtApp();
const db = $db as Firestore;

const { data: hero } = await useAsyncData('hero', async () => {
  // Query voor pagina met slug 'homepage'
  const q = query(collection(db, "pages"), where("slug", "==", "homepage"));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => doc.data());
  if (docs.length > 0 && docs[0].hero_section) {
    return docs[0].hero_section;
  }
  return null;
});
</script>

<style>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
