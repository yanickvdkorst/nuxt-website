declare module 'three/examples/jsm/loaders/GLTFLoader.js'

type GLTF = {
  scene: THREE.Group
  scenes: THREE.Group[]
  cameras: THREE.Camera[]
  animations: THREE.AnimationClip[]
  asset: {
    version: string
    generator: string
  }
  parser: any
  userData: any
}
