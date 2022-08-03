import React, {useState} from "react"
import electronic from './eObject'
import clothing from './cObject'
import Clothing from "./Clothing"
import Electronic from './Electronic'
import './App.css'

function App(){
  const [active,setActive]=useState("")
    return(
        <div>
          <div>
        <button  onClick={() => setActive("Clothing")} className="button">Clothing Store</button>
        <button  onClick={() => setActive("Electronics")} className="buttons">Electronic Store</button></div>
      
        <div>
        {active ==="Clothing" && <Clothing data={clothing} storename="Clothing Store"></Clothing>}
        {active ==="Electronics" &&<Electronic data={electronic} storename='Electronic Store'></Electronic>}
        </div></div>
    )
}
export default App