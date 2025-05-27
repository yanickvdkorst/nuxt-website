<script setup lang="ts">
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();

const documents = ref<any[]>([]);
const hero = ref<{ title: string; description: string } | null>(null);

onMounted(async () => {
  const querySnapshot = await getDocs(collection($db, "pages"));
  querySnapshot.docs.forEach(doc => {
    documents.value.push(doc.data());
  });
  if (documents.value.length > 0 && documents.value[0].hero_section) {
    hero.value = documents.value[0].hero_section;
  }
});
</script>

<template>
  <div>
    <Head>
      <title>{{ hero?.title || 'Homepage' }}</title>
      <meta name="description" :content="hero?.description || 'Homepage description'" />
    </Head>
    <header
      v-if="hero"
      class="hero bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white rounded-lg p-12 max-w-4xl mx-auto shadow-lg"
    >
      <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">{{ hero.title }}</h1>
      <p class="text-xl max-w-3xl mx-auto drop-shadow-md">{{ hero.description }}</p>
    </header>
  </div>
</template>