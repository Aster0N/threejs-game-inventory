import { playerSettings } from "../consts"

export const movePlayer = (player, keys) => {
  const speed = playerSettings.speed
  const rotationSpeed = 0.08 //

  if (keys.w) {
    player.position.z -= speed * Math.cos(player.rotation.y)
    player.position.x -= speed * Math.sin(player.rotation.y)
  }
  if (keys.s) {
    player.position.z += speed * Math.cos(player.rotation.y)
    player.position.x += speed * Math.sin(player.rotation.y)
  }

  if (keys.a) {
    player.rotation.y += rotationSpeed
  }
  if (keys.d) {
    player.rotation.y -= rotationSpeed
  }

  player.position.x = Math.max(
    -playerSettings.maxX,
    Math.min(playerSettings.maxX, player.position.x)
  )
  player.position.z = Math.max(
    -playerSettings.maxZ,
    Math.min(playerSettings.maxZ, player.position.z)
  )
}
