export const animateCoins = coins => {
  coins.forEach(coin => {
    if (!coin.userData.rotationSpeed) {
      coin.userData.rotationSpeed = (Math.random() > 0.5 ? 1 : -1) * 0.02 // Случайное направление (±0.02)
    }
    coin.rotation.y += coin.userData.rotationSpeed
  })
}
