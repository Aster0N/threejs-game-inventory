import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three"
import { groundSize } from "../consts"

const groundGeometry = new PlaneGeometry(groundSize.width, groundSize.height)
const groundMaterial = new MeshStandardMaterial({ color: 0xc0c0c0 })

export const ground = new Mesh(groundGeometry, groundMaterial)

ground.rotation.x = -Math.PI / 2
ground.position.y = -0.5
ground.receiveShadow = true
