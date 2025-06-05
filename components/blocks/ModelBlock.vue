<template>
  <div ref="container" class="model w-full h-300 rounded-xl"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const props = defineProps<{
  blok: {
    model_url: string
  }
}>()

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    120,
    container.value!.clientWidth / container.value!.clientHeight,
    0.1,
    100
  )

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight)
  container.value!.appendChild(renderer.domElement)

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 10)
  scene.add(light)

  camera.position.z = 3
let model: THREE.Group | null = null

  const loader = new GLTFLoader()
loader.load(
  props.blok.model_url,
  (gltf: GLTF) => {
   model! = gltf.scene
  model!.position.y = -1.5

if (model) {
  scene.add(model)
}
    animate()
  },
  undefined,
  (error: unknown) => {
    console.error('GLTF load error:', error)
  }
)


  function animate() {
    requestAnimationFrame(animate)
    
  if (model) {
    model.rotation.y += 0.001 // Draai continu
  }
    renderer.render(scene, camera)
  }
})
</script>
