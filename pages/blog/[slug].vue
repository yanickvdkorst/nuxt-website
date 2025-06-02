<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-16 px-4 flex items-center justify-center">
    <div class="w-full max-w-3xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/40 animate-fade-in-up">
      <h1 v-if="post" class="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg">
        {{ post.title }}
      </h1>

      <!-- Flexibele blokken -->
      <div v-if="post && post.fieldgroups">
        <component
          v-for="(blok, index) in post.fieldgroups"
          :key="index"
          :is="resolveComponent(blok.type)"
          :blok="blok.value"
        />
      </div>

      <p v-else class="text-white text-center text-lg">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref, watch } from "vue";
import TekstAfbeelding from "~/components/blocks/TekstAfbeelding.vue";
// eventueel andere blok-componenten importeren

const { $db } = useNuxtApp();
const route = useRoute();

const post = ref<any>(null);

async function fetchPost(slug: string) {
  const q = query(collection($db, "blog"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => doc.data());
  post.value = docs.length > 0 ? docs[0] : null;
}

await fetchPost(route.params.slug as string);

watch(
  () => route.params.slug,
  async (newSlug) => {
    await fetchPost(newSlug as string);
  }
);

// Component resolver functie
function resolveComponent(type: string) {
  switch (type) {
    case "tekst_afbeelding":
      return TekstAfbeelding;
    // hier kun je andere blokken toevoegen:
    // case "text":
    //   return TextBlock;
    // case "image":
    //   return ImageBlock;
    default:
      return null;
  }
}
</script>
