<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-16 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg">Blog Posts</h1>
      <div class="flex flex-col gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="group block bg-white/90 rounded-2xl shadow-xl border border-white/30 p-6 transition-all duration-200 hover:shadow-pink-400 hover:shadow-2xl hover:-translate-y-1 hover:border-pink-400"
        >
          <h2 class="text-2xl font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition">
            {{ post.title }}
          </h2>
          <p class="text-gray-700 text-base">{{ post.excerpt }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const { $db } = useNuxtApp();

const posts = ref<any[]>([]);

async function fetchPosts() {
  const querySnapshot = await getDocs(collection($db, "blog"));
  posts.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Initial fetch
await fetchPosts();
</script>