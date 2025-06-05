<template>
    <div class="video-block">
        <div class="video-container mt-40 mb-40 w-full mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">

           <video controls>
            <source :src="blok.video_url" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    video_url: string;
  };
}>();
</script>