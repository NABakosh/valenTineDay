import { use, useState } from "react"


function App(){
  const [isShake, setIsShake] = useState(true)
  const  handleClick = () => {
    setIsShake(false)
  }
  return(
    <div className="App">
      <div className="convert">
      <img className={`envelope ${isShake ? "shake" : ""}`} onClick={handleClick} src="closed.png" alt="convert"/>
      </div>
    </div>
  )
}
export default App