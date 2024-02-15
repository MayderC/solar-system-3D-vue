<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'
import SolarSystem from '@/components/SolarSystem/SolarSystem.vue'
import { ref } from 'vue'
import { gsap } from 'gsap'
import { updateCameraPosition } from '../Three/UpdateCameraPosition'

interface EmitArgs {
  scene: THREE.Group
  camera: THREE.PerspectiveCamera
}

const { onLoop, pause } = useRenderLoop()
const glbScene = ref<THREE.Group>()
const tresCamera = ref<THREE.PerspectiveCamera>()
const lookAt = ref({ x: 0, y: 0, z: 0 })
const yRotation = ref(0)

onLoop(({ elapsed }) => (yRotation.value = elapsed / 10))

const onLoaded = ({ scene, camera }: EmitArgs) => {
  glbScene.value = scene
  tresCamera.value = camera

  const scrollPercent =
    Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) / 40
  const rotationValue = (scrollPercent * 360) / 100

  scrollRotate()
  rotations(scrollPercent, rotationValue)
}

const rotations = (scrollPercent: number, rotationValue: number) => {
  if (scrollPercent * 40 <= 0 && scrollPercent * 40 < 10) {
    gsap.to(glbScene.value!.rotation, {
      z: 0,
      //rotate 45 degrees
      y: 1,
      x: 0,
      duration: 2,
      ease: 'power4.out'
    })

    gsap.to(tresCamera.value?.position!, {
      x: 0,
      y: 0,
      z: 75,
      duration: 2,
      ease: 'power4.out'
    })
    return
  }

  if (scrollPercent * 40 >= 10 && scrollPercent * 40 < 20) {
    gsap.to(glbScene.value!.rotation, {
      z: 0,
      y: (Math.PI * 150) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    gsap.to(tresCamera.value?.position!, {
      x: 0,
      y: 0,
      z: 40,
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 20 && scrollPercent * 40 < 30) {
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 238) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    gsap.to(tresCamera.value?.position!, {
      x: 0,
      y: 0,
      z: 40,
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 30 && scrollPercent * 40 < 40) {
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 40
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 157) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 40 && scrollPercent * 40 < 50) {
    //earth
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 40
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 348) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 50 && scrollPercent * 40 < 60) {
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 40
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 226) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 60 && scrollPercent * 40 < 70) {
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 60
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 93.7) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 70 && scrollPercent * 40 < 80) {
    //saturn
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 75
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * 32) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 80 && scrollPercent * 40 < 90) {
    //uranus
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 75
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * -64.5) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 >= 90 && scrollPercent * 40 < 100) {
    //neptune
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 75
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 45) / 180,
      y: (Math.PI * -173.5) / 180,
      x: 0,
      order: 'ZYX',
      duration: 2,
      ease: 'power4.out'
    })

    return
  }

  if (scrollPercent * 40 === 100) {
    //outro
    updateCameraPosition(tresCamera.value!, {
      x: 0,
      y: 0,
      z: 75
    })
    gsap.to(glbScene.value!.rotation, {
      z: (Math.PI * 0) / 180,
      y: (Math.PI * 660) / 180,
      x: 0,
      order: 'ZYX',
      duration: 10,
      ease: 'power4.out'
    })

    return
  }
}

const scrollRotate = () => {
  window.addEventListener('scroll', () => {
    const scrollPercent =
      Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) / 40
    const rotationValue = (scrollPercent * 360) / 100
    rotations(scrollPercent, rotationValue)
  })
}
</script>

<template>
  <TresCanvas class="canvas" clear-color="#1a1a1a" window-size :antialias="true">
    <TresAmbientLight :intensity="2" />
    <TresPerspectiveCamera
      :fov="30"
      :position="[0, 0, 75]"
      :look-at="(() => [lookAt.x, lookAt.y, lookAt.z])()"
    />
    <Stars
      :rotation="[0, yRotation, 0]"
      :radius="50"
      :depth="50"
      :count="5000"
      :size="0.3"
      :size-attenuation="true"
    />
    <Suspense>
      <SolarSystem @on-loaded="onLoaded"></SolarSystem>
    </Suspense>
  </TresCanvas>

  <section class="intro">
    <h1>Solar System</h1>
    <p>
      The Solar System is the gravitationally bound system of the Sun and the objects that orbit it,
    </p>
  </section>
  <section class="sun">
    <h1>Sun</h1>
    <p>
      The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot
      plasma.
    </p>
  </section>
  <section class="mercury">
    <h1>Mercury</h1>
    <p>
      Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun
      takes 87.97 Earth days.
    </p>
  </section>
  <section class="venus">
    <h1>Venus</h1>
    <p>
      Venus is the second planet from the Sun. It has a day longer than its year; it rotates
      backwards compared to most other planets.
    </p>
  </section>
  <section class="earth">
    <h1>Earth</h1>
    <p>
      Earth is the third planet from the Sun and the only astronomical object known to harbor and
      support life.
    </p>
  </section>
  <section class="mars">
    <h1>Mars</h1>
    <p>
      Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System,
      being larger than only Mercury.
    </p>
  </section>
  <section class="jupiter">
    <h1>Jupiter</h1>
    <p>
      Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a
      gas-giant planet.
    </p>
  </section>
  <section class="saturn">
    <h1>Saturn</h1>
    <p>
      Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after
      Jupiter.
    </p>
  </section>
  <section class="uranus">
    <h1>Uranus</h1>
    <p>
      Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and
      fourth-largest planetary mass in the Solar System.
    </p>
  </section>
  <section class="neptune">
    <h1>Neptune</h1>
    <p>
      Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is
      the fourth-largest planet by diameter.
    </p>
  </section>

  <section class="thanks">
    <h1>Thanks for watching</h1>
    <p>
      Developed by <a href="https://github.com/MayderC" target="_blank">MayderC</a> using
      <a href="https://threejs.org/" target="_blank">Three.js</a> and
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>, special thanks to
      <a href="https://www.cgtrader.com/designers/onomatopoeia" target="_blank">Onomatopoeia</a> for
      the 3D models
    </p>
  </section>
</template>

<style>
.thanks {
  color: white;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
}

.thanks a {
  color: #00bfff;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: hsl(0, 0%, 10%);
  scroll-behavior: smooth;

  scroll-snap-type: y mandatory;
}

section {
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  z-index: 1;
  padding: 10px;
  color: white;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  scroll-snap-align: start;
  font-size: 1.5rem;
  line-height: 1.5;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
}

.canvas {
  height: 100%;
  width: 100%;
  position: fixed;
}
</style>
