export const zoom = {
  zoomSpeed: 0.003,
  min: 25,
  max: 3,
}

export const groundSize = {
  width: 50,
  height: 50,
	depth: 10
}

export const playerRadius = 2

export const playerSettings = {
  maxX: groundSize.width / 2 - playerRadius,
  maxZ: groundSize.height / 2 - playerRadius,
  speed: 0.4,
}

export const cubesSettings = {
  maxSize: 2,
  minSize: 1,
  totalCubesCount: 15,
}

export const interactionSettings = {
  interactionRadius: 5,
}
