export const zoom = {
  zoomSpeed: 0.003,
  max: 15,
  min: 3,
}

export const groundSize = {
  width: 50,
  height: 50,
}

export const playerRadius = 1

export const playerSettings = {
  maxX: groundSize.width / 2 - playerRadius,
  maxZ: groundSize.height / 2 - playerRadius,
  speed: 0.4,
}

export const cubesSettings = {
  maxSize: 1,
  minSize: 0.4,
  totalCubesCount: 25,
}

export const interactionSettings = {
  interactionRadius: 8,
}
