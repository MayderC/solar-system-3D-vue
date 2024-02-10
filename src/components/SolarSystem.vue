<template>
  <Suspense>
    <primitive :object="glb.scene" />
  </Suspense>
</template>
<script lang="ts" setup>
import { useLoader, useRenderLoop } from '@tresjs/core'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { SOLAR_S } from '../Three/constants'

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

onLoop(({ delta, elapsed, clock }) => {
  moon.rotation.y = elapsed * 2
  earth.rotation.y = elapsed * 1
  earthGroup.rotation.y = elapsed * 0.5
  saturnGroup.rotation.y = elapsed * 0.7
  neptune.rotation.z = -elapsed * 1
  uranus.rotation.z = -elapsed * 1
  mars.rotation.z = -elapsed * 1
  mercury.rotation.z = -elapsed * 1
  venus.rotation.z = -elapsed * 1
  jupiter.rotation.z = -elapsed * 0.2
})

glb.scene.add(earthGroup, saturnGroup)
</script>
