import {
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three"
import { playerSettings } from "./consts"
import { updateCamera } from "./controllers/camera"
import { cubes } from "./controllers/cubes"
import { ground } from "./controllers/ground"
import { ambientLight, pointLight } from "./controllers/light"
import { player } from "./controllers/player"
import { setupEventListeners } from "./controllers/setupEventListeners"
import "./styles/index.css"

const canvas = document.getElementById("canvas")

let rotation = { theta: Math.PI / 2, phi: Math.PI / 4 }
let cameraDistance = 10
let isRotating = false
const keys = { w: false, a: false, s: false, d: false }

const zoom = {
  zoomSpeed: 0.003,
  max: 15,
  min: 3,
}

const scene = new Scene()
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap

scene.add(ground)
scene.add(player)
scene.add(ambientLight)
scene.add(pointLight)
cubes.forEach(cube => scene.add(cube))

setupEventListeners(keys, rotation, isRotating, camera, renderer)

document.addEventListener("wheel", e => {
  cameraDistance = Math.max(
    zoom.min,
    Math.min(zoom.max, cameraDistance + e.deltaY * zoom.zoomSpeed)
  )
})

const movePlayer = () => {
  let newX = player.position.x
  let newZ = player.position.z

  if (keys.w) newZ -= playerSettings.speed
  if (keys.s) newZ += playerSettings.speed
  if (keys.a) newX -= playerSettings.speed
  if (keys.d) newX += playerSettings.speed

  player.position.x = Math.max(
    -playerSettings.maxX,
    Math.min(playerSettings.maxX, newX)
  )
  player.position.z = Math.max(
    -playerSettings.maxZ,
    Math.min(playerSettings.maxZ, newZ)
  )
}

const animate = () => {
  requestAnimationFrame(animate)

  movePlayer()

  const { camX, camY, camZ } = updateCamera(
    rotation,
    player.position,
    cameraDistance
  )

  camera.position.set(camX, camY, camZ)
  camera.lookAt(player.position)
  renderer.render(scene, camera)
}

animate()
