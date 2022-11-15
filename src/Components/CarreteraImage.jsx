import React, { useEffect, useRef } from 'react'

const CarreteraImage = () => {
  const canvasRef = useRef(null)
  const disenoCarretera=()=>{
    const canvas = canvasRef.current
    canvas.height=250
    canvas.width=700
    const lineasBlancas = canvas.getContext('2d')
    const lineaAmarilla = canvas.getContext('2d')
    //Our first draw
    lineasBlancas.fillStyle = '#FFFFFF'
    lineasBlancas.fillRect(-10, 10, 100, 10)
    lineasBlancas.fillRect(170, 10, 130, 10)
    lineasBlancas.fillRect(380, 10, 130, 10)
    lineasBlancas.fillRect(580, 10, 130, 10)
    lineaAmarilla.fillStyle = '#FFC000'
    lineaAmarilla.fillRect(-10,240,720, 10)
  }
  const dibujoFalla=()=>{
    const canvas = canvasRef.current
    const falla = canvas.getContext('2d')
    //Our first draw
    falla.strokeStyle = "black";
    falla.rect(20, 50, 150, 70)
    falla.stroke();
  }
  useEffect(() => {
    disenoCarretera()
  }, [])
  useEffect(() => {
    dibujoFalla()
  }, [])
  return (
    <div style={{marginTop:'20px'}} className="flex justify-center">
      <canvas style={{backgroundColor:'#808080'}} ref={canvasRef} >

      </canvas>
    </div>
        
  )
}

export default CarreteraImage