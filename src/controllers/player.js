import { Mesh, MeshStandardMaterial, SphereGeometry } from "three"

const playerGeometry = new SphereGeometry(0.5, 32, 32)
const playerMaterial = new MeshStandardMaterial({ color: 0xffa500 })

export const player = new Mesh(playerGeometry, playerMaterial)
player.position.set(0, 0.5, 0)
player.castShadow = true
