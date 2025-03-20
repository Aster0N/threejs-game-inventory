import CameraController from "@/components/CameraController/CameraController"
import Ground from "@/components/Ground/Ground"
import Player from "@/components/Player/Player"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"

const Scene = ({ enablePointLight, enableFreeView }) => {
  const playerPositionRef = useRef([0, 0.5, 0])

  return (
    <Canvas
      shadows
      style={{ height: "100vh" }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 5] }}
    >
      <ambientLight intensity={2} />
      {enablePointLight && (
        <pointLight
          intensity={20}
          position={[0, 5, 0]}
          castShadow
          shadow-mapSize={[1024, 1024]}
          distance={20}
          decay={1}
        />
      )}
      <Player
        position={[0, 0.5, 0]}
        onPositionChange={pos => (playerPositionRef.current = pos)}
      />
      <Ground />
      <CameraController
        enableFreeView={enableFreeView}
        playerPositionRef={playerPositionRef}
      />
      {enableFreeView && <OrbitControls enablePan={true} />}
    </Canvas>
  )
}

export default Scene
