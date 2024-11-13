import React from 'react'

const Click = ({positionY, positionX}) => {


  const style = {
    bottom: positionY,
    right: positionX,
  }

  return (
    <div style={style}>
      o
    </div>
  )
}

export default Click