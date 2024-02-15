import { gsap } from 'gsap'

interface IPosition {
  x?: number
  y?: number
  z?: number
}

export const updateCameraPosition = (camera: THREE.PerspectiveCamera, position: IPosition) => {
  gsap.to(camera?.position!, {
    ...position,
    duration: 1,
    ease: 'power4.out'
  })
}
