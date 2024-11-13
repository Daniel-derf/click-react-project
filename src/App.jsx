import { useState } from 'react'
import './App.css'
import Click from './components/Click'

function App() {

  const [removedClicks, setRemovedClicks] = useState([])

  const [clicks, setClicks] = useState([])

  const handleClick = (e) => {

    setClicks([...clicks, {
      x: e.clientX, y: e.clientY, id: Math.random()
    }])

  }

  const handleAdvanceBtn = () => {
    if (removedClicks.length>0){
      setRemovedClicks([...removedClicks.slice(0, -1)])
      setClicks([...clicks, removedClicks[removedClicks.length-1]])
    }
  }
  
  const handleReturnBtn = () => {
    if (clicks.length>0){
      const removedClick = clicks[clicks.length-1]
      setRemovedClicks([...removedClicks, removedClick])
      setClicks([...clicks.slice(0, -1)])
    }
  }

  return (<>
    <div className='btns-div'>
      <button onClick={handleReturnBtn}>Return</button>
      <button onClick={handleAdvanceBtn}>Advance</button>
    </div>

    <div className='container' onClick={handleClick}>

    <h1>Click Challenge</h1>

    


    {clicks.map(click=>(
      <Click key={click.id} positionX={click.x} positionY={click.y} />
    ))}

    </div></>
  )
}

export default App
