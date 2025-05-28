<template>
  <div>
     <Head>
      <title>{{ hero?.title || 'Homepage' }}</title>
      <meta name="description" :content="hero?.description || 'Homepage description'" />
    </Head>
    <div
      v-if="hero"
      class="hero bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white rounded-lg p-12 max-w-4xl mx-auto shadow-lg"
    >
      <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">{{ hero.title }}</h1>
      <p class="text-xl max-w-3xl mx-auto drop-shadow-md">{{ hero.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();

const { data: hero } = await useAsyncData('hero', async () => {
  const querySnapshot = await getDocs(collection($db, "pages"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  if (docs.length > 0 && docs[0].hero_section) {
    return docs[0].hero_section;
  }
  return null;
});
</script>

