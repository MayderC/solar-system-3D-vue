<template>
  <Suspense>
    <primitive :object="glb.scene" />
  </Suspense>
</template>
<script lang="ts" setup>
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { useLoader, useRenderLoop, useTresContext } from '@tresjs/core'
import { SOLAR_S, orbitalSpeeds } from '../../Three/constants'
import { ref, defineEmits } from 'vue'
import * as THREE from 'three'

const emitter = defineEmits(['onLoaded'])
const { camera, renderer, scene } = useTresContext()

const glb = await useLoader(GLTFLoader, '/space-origin.glb')

glb.scene.position.set(0, 0, 0)
glb.scene.scale.set(0.7, 0.7, 0.7)

const postprocessing = () => {
  const renderPass = new RenderPass(scene.value, camera.value!)
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  )

  bloomPass.threshold = 0
  bloomPass.strength = 1
  bloomPass.radius = 0
  bloomPass.renderToScreen = true

  const composer = new EffectComposer(renderer.value)
  composer.setSize(window.innerWidth, window.innerHeight)
  composer.addPass(renderPass)
  composer.addPass(bloomPass)
  renderer.value.toneMappingExposure = Math.pow(0.9, 4.0)

  return composer
}

const composer = postprocessing()

const { onLoop, pause, resume } = useRenderLoop()

const earth = glb.scene.getObjectByName(SOLAR_S.Earth_Icosphere) as THREE.Mesh
const moon = glb.scene.getObjectByName(SOLAR_S.Moon_Icosphere001) as THREE.Mesh
const jupiter = glb.scene.getObjectByName(SOLAR_S.Jupiter_Icosphere006) as THREE.Mesh
const neptune = glb.scene.getObjectByName(SOLAR_S.Neptune_Icosphere010) as THREE.Mesh
const uranus = glb.scene.getObjectByName(SOLAR_S.uranus_Icosphere009) as THREE.Mesh
const mars = glb.scene.getObjectByName(SOLAR_S.Mars_Icosphere002) as THREE.Mesh
const mercury = glb.scene.getObjectByName(SOLAR_S.Mercury_Icosphere005) as THREE.Mesh
const venus = glb.scene.getObjectByName(SOLAR_S.Venus_Icosphere004) as THREE.Mesh
const saturn = glb.scene.getObjectByName(SOLAR_S.Saturn_Icosphere007) as THREE.Mesh
const saturnRing = glb.scene.getObjectByName(SOLAR_S.SaturnsRings_Circle) as THREE.Mesh

const earthGroup = new THREE.Group()
const saturnGroup = new THREE.Group()

saturnGroup.add(saturn, saturnRing)
earthGroup.add(earth, moon)

const canIRotate = ref(false)

onLoop(({ elapsed }) => {
  //composer.render()
  if (canIRotate.value == false) return

  moon.rotation.y = -orbitalSpeeds[moon.name] * elapsed
  earthGroup.rotation.y = -orbitalSpeeds[earth.name] * elapsed
  saturnGroup.rotation.y = -orbitalSpeeds[saturn.name] * elapsed
  neptune.rotation.z = orbitalSpeeds[neptune.name] * elapsed
  uranus.rotation.z = orbitalSpeeds[uranus.name] * elapsed
  mars.rotation.z = orbitalSpeeds[mars.name] * elapsed
  mercury.rotation.z = orbitalSpeeds[mercury.name] * elapsed
  venus.rotation.z = orbitalSpeeds[venus.name] * elapsed
  jupiter.rotation.z = orbitalSpeeds[jupiter.name] * elapsed
})

glb.scene.add(earthGroup)
glb.scene.add(saturnGroup)

emitter('onLoaded', { scene: glb.scene, camera: camera.value! })
</script>
