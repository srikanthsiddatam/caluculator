import { useState } from "react"
import "./App.css"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Keyboard from "./Keyboard"
import Happy from "./Happy"
const App = () => {

const [input,setinput]=useState("")
  const handleclick = (value) => {
    setinput(input+value)

  }
  const cal=(value)=>{
   let output= eval(input)
   setinput(output)

  }
  const clear= ()=>{
  setinput("")
  }


  return(
    <>
<div className="container">
  <h1>calculator App using react</h1>
  <div className="calcultor">
    <input type="text" className="output" value={input}
     ></input>
<Keyboard handleclick={handleclick} clear={clear} cal={cal}/>

  </div>
</div>
<div>
<Happy></Happy>
</div>


    </>
  )
}
export default App