import { interactionSettings } from "../consts"

export const collectCoins = (player, coins, scene) => {
  const playerPos = player.position
  const radiusSquared = interactionSettings.interactionRadius ** 2

  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i]
    const dx = coin.position.x - playerPos.x
    const dz = coin.position.z - playerPos.z
    const distanceSquared = dx * dx + dz * dz

    if (distanceSquared <= radiusSquared) {
      coins.splice(i, 1)
      animateCoin(coin, scene)
    }
  }
}

const animateCoin = (coin, scene) => {
  let animationProgress = 0
  const duration = 20

  const animate = () => {
    animationProgress++
    if (animationProgress <= duration) {
      coin.position.y += 0.1
      coin.rotation.y += 0.4
      // const scale = 1 - animationProgress / duration
      // coin.scale.set(scale, scale, scale)
      requestAnimationFrame(animate)
    } else {
      scene.remove(coin)
    }
  }

  animate()
}
