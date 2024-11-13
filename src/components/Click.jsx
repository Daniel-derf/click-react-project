import React from 'react'

const Click = ({positionY, positionX}) => {

  console.log(positionX, positionY)


  const style = {
    position: 'absolute',
    top: `${positionY-30}px`,
    left: `${positionX-20}px`,
    fontSize: '50px',
    userSelect: 'none'
  }

  return (
    <span style={style}>
      o
    </span>
  )
}

export default Click