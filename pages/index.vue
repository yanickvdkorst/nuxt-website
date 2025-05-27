<script setup lang="ts">
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";

const { $db } = useNuxtApp();

const documents = ref<any[]>([]);

const collectionsToFetch = ["pages"]; // voeg hier al je collecties toe

for (const colName of collectionsToFetch) {
  const querySnapshot = await getDocs(collection($db, colName));
  console.log(`Documents in collection '${colName}':`);
  querySnapshot.docs.forEach(doc => {
    documents.value.push(doc.data());
    console.log(doc.id, doc.data());
  });
}
</script>


<template>
  <div>
    <h1>Homepage content</h1>
    <!-- <div v-for="(doc, index) in documents" :key="index">
      <h2>{{ doc.section }}</h2>
      <p>{{ doc.content.title }}</p>
      <p>{{ doc.content.subtitle }}</p>
    </div> -->
  </div>
</template>
