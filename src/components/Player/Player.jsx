import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"

const Player = ({ position, onPositionChange }) => {
  const ref = useRef()
  const speed = 0.2
  const keys = useRef({ w: false, a: false, s: false, d: false })

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "w") keys.current.w = true
      if (e.key === "a") keys.current.a = true
      if (e.key === "s") keys.current.s = true
      if (e.key === "d") keys.current.d = true
    }

    const handleKeyUp = e => {
      if (e.key === "w") keys.current.w = false
      if (e.key === "a") keys.current.a = false
      if (e.key === "s") keys.current.s = false
      if (e.key === "d") keys.current.d = false
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  useFrame(() => {
    const [x, y, z] = ref.current.position

    if (keys.current.w) ref.current.position.z = z - speed
    if (keys.current.s) ref.current.position.z = z + speed
    if (keys.current.a) ref.current.position.x = x - speed
    if (keys.current.d) ref.current.position.x = x + speed

    if (onPositionChange) {
      onPositionChange(ref.current.position)
    }
  })

  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default Player
