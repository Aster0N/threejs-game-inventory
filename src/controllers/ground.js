import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three"

const groundGeometry = new PlaneGeometry(50, 50)
const groundMaterial = new MeshStandardMaterial({ color: 0xc0c0c0 })

export const ground = new Mesh(groundGeometry, groundMaterial)

ground.rotation.x = -Math.PI / 2
ground.position.y = -0.5
ground.receiveShadow = true
