import { useState } from 'react'
import './App.css'
import Click from './components/Click'

function App() {

  const [clicks, setClicks] = useState([])

  const handleClick = (e) => {

    setClicks([...clicks, {
      x: e.clientX, y: e.clientY, id: Math.random()
    }])

  }

  const handleAdvanceBtn = () => {}
  
  const handleReturnBtn = () => {
    setClicks([...clicks.slice(0, -1)])

    console.log(clicks.slice(0, -1))

    console.log('teste')
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
