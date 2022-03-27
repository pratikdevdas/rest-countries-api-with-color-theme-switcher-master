import { useState } from "react";


const Region = () => {

    const [visible, setvisible] = useState(false)


    const showRegions = () => {
        // this will be hidden when login form is visible
        const hideWhenVisible = {display: visible ? 'none':''} 
        // this will be shown when login form is visible
        const showWhenVisible = {display: visible ? '':'none'}
        
        return (
      
            <div>
    <div>Region</div>
    <div style={hideWhenVisible}>
        <button onClick={()=> setvisible(true)}>show</button>
    </div>
    <div style={showWhenVisible}>
        <button onClick={()=> setvisible(false)}>hide</button>
        <li>dks</li>
        <li>SDF</li>
        <li>FDS</li>
        <li>FSD</li>
    </div>
    </div>
  )
}
return(
    <>{showRegions()}</>
)
}

export default Region
