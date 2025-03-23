export const animateCoins = coins => {
  coins.forEach(coin => {
    if (!coin.userData.rotationSpeed) {
      coin.userData.rotationSpeed = (Math.random() > 0.5 ? 2 : -2) * 0.05
    }
    coin.rotation.y += coin.userData.rotationSpeed
  })
}
