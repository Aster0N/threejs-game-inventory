import React, { useState } from "react"
import Scene from "../../components/Scene/Scene"
import styles from "./HomeScene.module.css"

const HomeScene = () => {
  const [isPointLight, setIsPointLight] = useState(false)
  const [enableFreeView, setEnableFreeView] = useState(false)

  const switchPointLight = e => {
    setIsPointLight(e.target.checked)
  }

  const changeView = e => {
    setEnableFreeView(e.target.checked)
  }

  return (
    <>
      <div className={styles.controls}>
        <label htmlFor="point-view-control">
          enable pointlight
          <input
            checked={isPointLight}
            onChange={e => switchPointLight(e)}
            type="checkbox"
            id="point-view-control"
          />
        </label>
        <label htmlFor="free-view-control">
          enable free view
          <input
            checked={enableFreeView}
            onChange={e => changeView(e)}
            type="checkbox"
            id="free-view-control"
          />
        </label>
      </div>

      <Scene
        isPointLight={isPointLight}
        enableFreeView={enableFreeView}
      ></Scene>
    </>
  )
}

export default HomeScene
