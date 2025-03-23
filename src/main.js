import {
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three"
import { zoom } from "./consts"
import { updateCamera } from "./controllers/camera"
import { cubes } from "./controllers/cubes"
import { ground } from "./controllers/ground"
import { ambientLight, pointLight } from "./controllers/light"
import { player } from "./controllers/player"
import { setupEventListeners } from "./controllers/setupEventListeners"
import { collectCoins } from "./helpers/collectCoins"
import { movePlayer } from "./helpers/movePlayer"
import "./styles/index.css"
import "./styles/main.css"

const canvas = document.getElementById("canvas")

let rotation = { theta: Math.PI / 2, phi: Math.PI / 4 }
let cameraDistance = 10
let isRotating = false
const keys = { w: false, a: false, s: false, d: false }

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
    zoom.max,
    Math.min(zoom.min, cameraDistance + e.deltaY * zoom.zoomSpeed)
  )
})

// controls
const pointLightControl = document.querySelector("#point-light-control")

pointLightControl.addEventListener("change", e => {
  if (!e.target.checked) {
    scene.remove(pointLight)
    return
  }
  scene.add(pointLight)
})

const animate = () => {
  requestAnimationFrame(animate)

  movePlayer(player, keys)
  collectCoins(player, cubes, scene)

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
