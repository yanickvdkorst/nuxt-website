<template>
<section class="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700">

  <!-- Achtergrond afbeeldingen container -->
  <div class="image">
    <img
      v-for="(project, i) in projects"
      :key="project.id"
      :src="project.image_url"
      alt=""
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      :class="{
        'opacity-100 z-20': i === activeIndex,
        'opacity-0 z-10': i !== activeIndex
      }"
    />
  </div>

  <!-- Swiper over de achtergrond -->
  <swiper
    direction="vertical"
    :mousewheel="{ forceToAxis: true, releaseOnEdges: true, sensitivity: 1 }"
    :modules="modules"
    class="relative z-10 h-screen"
    :speed="700"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="(project, index) in projects"
      :key="project.id"
      class="h-screen flex  p-8 bg-transparent"
    >
      <NuxtLink
        :to="`/projecten/${project.slug || project.id}`"
        tabindex="0"
        aria-label="Bekijk project"
        class="absolute inset-0 z-30"
      />
      <div class="max-w-4xl">
        <h2 class="text-6xl font-extrabold mb-4 drop-shadow-lg">
          {{ project.title || project.id }}
        </h2>
        <div class="text-xl drop-shadow-lg">
          <span
            v-for="(tag, idx) in project.tags"
            :key="idx"
            class="mr-2"
          >
            {{ tag }} <span v-if="idx !== project.tags.length - 1">•</span>
          </span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</section>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import type SwiperType from 'swiper';
import 'swiper/css/pagination'
import { Pagination, Mousewheel } from 'swiper/modules'

import { collection, getDocs, Firestore } from 'firebase/firestore'
import { ref } from 'vue'

const modules = [Pagination, Mousewheel]

const { $db } = useNuxtApp()
const db = $db as Firestore

const activeIndex = ref(0)

function onSlideChange(swiper: SwiperType) {
  activeIndex.value = swiper.activeIndex;
}

function serialize(obj: any): any {
  if (obj === null || obj === undefined) return obj
  if (typeof obj !== 'object') return obj
  if (obj.toDate) return obj.toDate().toISOString()
  if (Array.isArray(obj)) return obj.map(serialize)
  const out: any = {}
  for (const key in obj) {
    out[key] = serialize(obj[key])
  }
  return out
}

const { data: projects } = await useAsyncData('projects', async () => {
  const querySnapshot = await getDocs(collection(db, 'projecten'))
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...serialize(doc.data())
  }))
})
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: black;
}

section {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

img {
  transition: opacity 0.7s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.opacity-100 {
  opacity: 1 !important;
  z-index: 20 !important;
}

.opacity-0 {
  opacity: 0 !important;
  z-index: 10 !important;
}

.swiper-slide {
  background: transparent !important;
  display: flex !important;
  align-items: center;
  height: 100vh !important;
  position: relative;
  z-index: 10;
  color: white;
}

.nuxt-link {
  position: absolute;
  inset: 0;
  z-index: 30;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;    /* desktop */
  height: 100vh;
  left: auto;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 0;
}

/* Responsive breakpoint */
@media (max-width: 768px) {
  .image {
    position: relative;  /* niet meer absolute */
    width: 100% !important;
    height: 50vh;        /* kleiner maken, zodat afbeelding niet te groot is */
    left: 0;
    top: 0;
    bottom: auto;
  }

  /* Pas de swiper-slide ook aan voor stacked layout */
  .swiper-slide {
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding: 2rem !important;
    height: auto !important;
    min-height: 100vh;
  }

  /* Maak tekst max breedte 100% op mobiel */
  .swiper-slide > div.max-w-4xl {
    max-width: 100% !important;
  }
}

</style>
