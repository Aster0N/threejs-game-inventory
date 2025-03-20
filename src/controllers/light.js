import { AmbientLight, PointLight } from "three"

export const ambientLight = new AmbientLight(0xffffff, 0.8)
export const pointLight = new PointLight(0xffffff, 30, 100)
pointLight.position.set(0, 10, 0)
pointLight.castShadow = true
pointLight.shadow.mapSize.width = 1024
pointLight.shadow.mapSize.height = 1024