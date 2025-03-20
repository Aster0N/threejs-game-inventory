import { BoxGeometry, Mesh, MeshStandardMaterial } from "three"
import { cubesSettings, groundSize } from "../consts"

const createCube = (size, x, z) => {
  const geometry = new BoxGeometry(size, size, size)
  // TODO paint cube according to its size (weight)
  const material = new MeshStandardMaterial({ color: 0x3498db })
  const cube = new Mesh(geometry, material)
  cube.position.set(x, size / 2, z)
  cube.castShadow = true
  cube.receiveShadow = true
  return cube
}

export const cubes = []

for (let i = 0; i < cubesSettings.totalCubesCount; i++) {
  const size =
    Math.random() * (cubesSettings.maxSize - cubesSettings.minSize) +
    cubesSettings.minSize
  const x = (Math.random() - 0.5) * (groundSize.width - size)
  const z = (Math.random() - 0.5) * (groundSize.height - size)
  cubes.push(createCube(size, x, z))
}
