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
    <div style={{marginTop:'20px'}} className="flex justify-center items-center">
      <div className='flex'>
        <div className="rotate-180 flex justify-center mr-3" style={{ writingMode: 'vertical-rl', height:'250px' }}>
          AREA DE CARRIL (m)
        </div>
        <div className='flex flex-col mr-2 justify-start items-start' style={{height:'250px'}}>
          <label style={{marginBottom:'20px', marginTop:'-10px'}}>3.50</label>
          <label style={{marginBottom:'40px'}}>3.00</label>
          <label style={{marginBottom:'40px'}}>2.00</label>
          <label style={{marginBottom:'40px'}}>1.00</label>
          <label style={{marginBottom:'40px'}}>0.00</label>
        </div>
      </div>
      <canvas style={{backgroundColor:'#808080'}} ref={canvasRef} >

      </canvas>
    </div>
        
  )
}

export default CarreteraImage