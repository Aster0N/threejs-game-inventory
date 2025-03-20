import { useFrame, useThree } from "@react-three/fiber"

const CameraController = ({ enableFreeView, playerPositionRef }) => {
  const { camera } = useThree()

  useFrame(() => {
    const [x, y, z] = playerPositionRef.current
    if (!enableFreeView) {
      camera.position.set(x, y + 5, z + 5)
      camera.lookAt(x, y, z)
    }
  })

  return null
}

export default CameraController
