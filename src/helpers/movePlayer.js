import { playerSettings } from "../consts"

export const movePlayer = (player, keys) => {
  let newX = player.position.x
  let newZ = player.position.z

  if (keys.w) newZ -= playerSettings.speed
  if (keys.s) newZ += playerSettings.speed
  if (keys.a) newX -= playerSettings.speed
  if (keys.d) newX += playerSettings.speed

  player.position.x = Math.max(
    -playerSettings.maxX,
    Math.min(playerSettings.maxX, newX)
  )
  player.position.z = Math.max(
    -playerSettings.maxZ,
    Math.min(playerSettings.maxZ, newZ)
  )
}
