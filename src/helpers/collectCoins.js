import { interactionSettings } from "../consts"

export const collectCoins = (player, cubes, scene) => {
  const playerPos = player.position
  const radiusSquared = interactionSettings.interactionRadius ** 2

  for (let i = cubes.length - 1; i >= 0; i--) {
    const cube = cubes[i]
    const dx = cube.position.x - playerPos.x
    const dz = cube.position.z - playerPos.z
    const distanceSquared = dx * dx + dz * dz

    if (distanceSquared <= radiusSquared) {
      cubes.splice(i, 1)
      animateCoin(cube, scene)
    }
  }
}

const animateCoin = (cube, scene) => {
  let animationProgress = 0
  const duration = 60

  const animate = () => {
    animationProgress++
    if (animationProgress <= duration) {
      cube.position.y += 0.1
      cube.rotation.x += 0.2
      cube.rotation.y += 0.2
      const scale = 1 - animationProgress / duration
      cube.scale.set(scale, scale, scale)
      requestAnimationFrame(animate)
    } else {
      scene.remove(cube)
    }
  }

  animate()
}
