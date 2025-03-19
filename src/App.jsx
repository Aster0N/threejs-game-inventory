import { useState } from "react"
import Scene from "./components/Scene"

function App() {
  const [isPointLight, setIsPointLight] = useState(false)

  const switchPointLight = e => {
    setIsPointLight(e.target.checked)
  }

  return (
    <>
      <div>
        <label htmlFor="pointLightSwitch">
          pointlight
          <input
            checked={isPointLight}
            onChange={e => switchPointLight(e)}
            type="checkbox"
            id="pointLightSwitch"
          />
        </label>
      </div>

      <Scene isPointLight={isPointLight}></Scene>
    </>
  )
}

export default App
