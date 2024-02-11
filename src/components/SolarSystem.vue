<template>
  <Suspense>
    <primitive :object="glb.scene" />
  </Suspense>
</template>
<script lang="ts" setup>
import { useLoader, useRenderLoop } from '@tresjs/core'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { SOLAR_S, orbitalSpeeds } from '../Three/constants'
import { ref } from 'vue'

console.log('SolarSystem.vue')
console.log('useLoader', useLoader)
console.log('GLTFLoader', GLTFLoader)

const glb = await useLoader(GLTFLoader, '/spacev2.glb')

glb.scene.position.set(0, 0, 0)

glb.scene.scale.set(0.5, 0.5, 0.5)

const { onLoop, resume } = useRenderLoop()

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

const canIRotate = ref(true)

onLoop(({ delta, elapsed, clock }) => {
  if (!canIRotate.value) return

  moon.rotation.y = orbitalSpeeds[moon.name] * elapsed
  earthGroup.rotation.y = -orbitalSpeeds[earth.name] * elapsed
  saturnGroup.rotation.y = -orbitalSpeeds[saturn.name] * elapsed
  neptune.rotation.z = orbitalSpeeds[neptune.name] * elapsed
  uranus.rotation.z = orbitalSpeeds[uranus.name] * elapsed
  mars.rotation.z = orbitalSpeeds[mars.name] * elapsed
  mercury.rotation.z = orbitalSpeeds[mercury.name] * elapsed
  venus.rotation.z = orbitalSpeeds[venus.name] * elapsed
  jupiter.rotation.z = orbitalSpeeds[jupiter.name] * elapsed
})

glb.scene.add(earthGroup, saturnGroup)
</script>
