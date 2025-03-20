import { Mesh, MeshPhongMaterial, SphereGeometry } from "three"
import { playerRadius } from "../consts"

const playerGeometry = new SphereGeometry(playerRadius, 32, 32)
const playerMaterial = new MeshPhongMaterial({
  color: 0xe74c3c,
  flatShading: false,
  reflectivity: 1,
  shininess: 10,
  specular: 0xffffff,
})

export const player = new Mesh(playerGeometry, playerMaterial)
player.position.set(0, playerRadius, 0)
player.castShadow = true
