import React from 'react'

const Click = ({positionY, positionX}) => {

  console.log(positionX, positionY)


  const style = {
    position: 'absolute',
    top: `${positionY}px`,
    left: `${positionX}px`,
    fontSize: '50px'
  }

  return (
    <span style={style}>
      o
    </span>
  )
}

export default Click