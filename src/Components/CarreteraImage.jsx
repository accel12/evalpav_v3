import React, { useEffect } from 'react'
import CanvasDraw from "react-canvas-draw";
const CarreteraImage = () => {
  return (
    <div style={{marginTop:'20px'}}>
      <CanvasDraw style={{width:'100%', height:'260px'}} hideGrid={true} backgroundColor='#808080' />
    </div>
        
  )
}

export default CarreteraImage