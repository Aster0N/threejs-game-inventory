import { BoxGeometry, Mesh, MeshStandardMaterial } from "three"
import { groundSize } from "../consts"

const groundGeometry = new BoxGeometry(
  groundSize.width,
  groundSize.height,
  groundSize.depth,
  32,
  32,
  32
)
const groundMaterial = new MeshStandardMaterial({ color: 0xc0c0c0 })
export const ground = new Mesh(groundGeometry, groundMaterial)

ground.rotation.x = -Math.PI / 2
ground.position.y = -groundSize.depth / 2
ground.receiveShadow = true
