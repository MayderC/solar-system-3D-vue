<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { Sky, Stars, OrbitControls } from '@tresjs/cientos'

import SolarSystem from '@/components/SolarSystem.vue'
import { ref } from 'vue'

const { onLoop, resume } = useRenderLoop()

const mesh = ref<THREE.Mesh>()
const yRotation = ref(0)

onLoop(({ delta, elapsed, clock }) => {
  yRotation.value = elapsed / 10
})
</script>

<template>
  <TresCanvas clear-color="#1a1a1a" window-size :antialias="true">
    <TresPerspectiveCamera :fov="30" :position="[0, 0, 75]" :look-at="[0, 0, 0]" />
    <TresAmbientLight :intensity="1" />
    <Stars
      :rotation="[0, yRotation, 0]"
      :radius="50"
      :depth="50"
      :count="5000"
      :size="0.3"
      :size-attenuation="true"
    />
    <Suspense>
      <SolarSystem></SolarSystem>
    </Suspense>
    <OrbitControls />
    <TresPointLight :position="[0, 0, 0]" :intensity="5" />
    <TresAxesHelper :size="100" />
  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #1a1a1a;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
