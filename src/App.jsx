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

  return (
    <div className='container' onClick={handleClick}>

    <h1>Click Challenge</h1>

    {clicks.map(click=>(
      <Click key={click.id} positionX={click.clientX} positionY={click.clientY} />
    ))}

    </div>
  )
}

export default App
