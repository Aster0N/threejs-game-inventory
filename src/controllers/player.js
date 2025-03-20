import { Mesh, MeshStandardMaterial, SphereGeometry } from "three"
import { playerRadius } from "../consts"

const playerGeometry = new SphereGeometry(playerRadius, 32, 32)
const playerMaterial = new MeshStandardMaterial({ color: 0xe74c3c })

export const player = new Mesh(playerGeometry, playerMaterial)
player.position.set(0, playerRadius, 0)
player.castShadow = true
