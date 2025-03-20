import { interactionSettings } from "../consts"

export const highlightInteractiveElements = (player, cubes) => {
  const playerPos = player.position
  const radiusSquared = interactionSettings.interactionRadius ** 2

  cubes.forEach(cube => {
    const distanceX = cube.position.x - playerPos.x
    const distanceZ = cube.position.z - playerPos.z
    const distanceSquared = distanceX * distanceX + distanceZ * distanceZ

    if (distanceSquared <= radiusSquared) {
      cube.material.emissive.set(0x35cb55)
      cube.material.emissiveIntensity = 0.7
    } else {
      cube.material.emissive.set(0x000000)
    }
  })
}
