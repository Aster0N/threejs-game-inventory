import Ground from "@/components/Ground/Ground"
import Player from "@/components/Player/Player"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Scene = ({ isPointLight, enableFreeView }) => {
  return (
    <Canvas shadows style={{ height: "100vh" }}>
      <ambientLight intensity={2} />
      {isPointLight && (
        <pointLight
          intensity={20}
          position={[0, 5, 0]}
          castShadow
          shadow-mapSize={[1024, 1024]}
          distance={20}
          decay={1}
        />
      )}
      <Player position={[0, 0, 0]} />
      <Ground />
      {enableFreeView && <OrbitControls enablePan={true} />}
    </Canvas>
  )
}

export default Scene
