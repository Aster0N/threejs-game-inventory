export function setupEventListeners(
  keys,
  rotation,
  isRotating,
  camera,
  renderer
) {
  document.addEventListener("keydown", e => {
    if (e.key === "w") keys.w = true
    if (e.key === "a") keys.a = true
    if (e.key === "s") keys.s = true
    if (e.key === "d") keys.d = true
  })

  document.addEventListener("keyup", e => {
    if (e.key === "w") keys.w = false
    if (e.key === "a") keys.a = false
    if (e.key === "s") keys.s = false
    if (e.key === "d") keys.d = false
  })

  document.addEventListener("mousedown", e => {
    if (e.button === 2) {
      isRotating = true
    }
  })

  document.addEventListener("mouseup", () => {
    isRotating = false
  })

  document.addEventListener("mousemove", e => {
    if (isRotating) {
      const sensitivity = 0.003
      rotation.theta -= e.movementX * sensitivity
      rotation.phi = Math.max(
        0.1,
        Math.min(Math.PI - 0.1, rotation.phi - e.movementY * sensitivity)
      )
    }
  })

  document.addEventListener("contextmenu", e => e.preventDefault())

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}
