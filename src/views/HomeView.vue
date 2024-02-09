<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { ref } from 'vue'

const { onLoop, resume } = useRenderLoop()

const mesh = ref<THREE.Mesh>()

onLoop(({ delta, elapsed, clock }) => {
  if (mesh.value) {
    mesh.value.rotation.x = Math.sin(elapsed)
    mesh.value.rotation.y + Math.cos(elapsed)
  }
})
</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh ref="mesh" :rotation="[0, 0, 0]" :position="[0, 0, 0]">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
