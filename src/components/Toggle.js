import { useState } from 'react'

export const ShowRegions = (props) => {

  const [visible, setvisible] = useState(false)
  // this will be hidden when login form is visible
  const hideWhenVisible = { display: visible ? 'none':'' }
  // this will be shown when login form is visible
  const showWhenVisible = { display: visible ? '':'none' }

  const toggleVisiblity = () => {
    setvisible(!visible)
  }

  return (
    <div style={{ display:'flex' }}>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisiblity}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        <button onClick={toggleVisiblity}>{props.buttonLabel2}</button>
        {props.children}
      </div>
    </div>
  )
}