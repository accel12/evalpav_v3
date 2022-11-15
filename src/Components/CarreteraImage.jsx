import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const CarreteraImage = ({data}) => {
  const [longitudCarretera, setLongitudCarretera] = useState(0)
  const [valores, setValores] = useState([])
  const [valoresAncho, setValoresAncho] = useState([])
  const canvasRef = useRef(null)
  const disenoCarretera=()=>{
    const canvas = canvasRef.current
    canvas.height=250
    canvas.width=700
    const lineasBlancas = canvas.getContext('2d')
    const lineaAmarilla = canvas.getContext('2d')
    //Our first draw
    lineasBlancas.fillStyle = '#FFFFFF'
    lineasBlancas.fillRect(-10, 0, 100, 10)
    lineasBlancas.fillRect(170, 0, 130, 10)
    lineasBlancas.fillRect(380, 0, 130, 10)
    lineasBlancas.fillRect(580, 0, 130, 10)
    lineaAmarilla.fillStyle = '#FFC000'
    lineaAmarilla.fillRect(-10,240,720, 10)
  }
  const dibujoFalla=(element,lista)=>{
    const canvas = canvasRef.current
    const falla = canvas.getContext('2d')
    const valorM= convertirPxToMx(element.ProgresivaInicial, lista)
    const valorMFin = convertirPxToMx(element.ProgresivaInicial+element.Longitud, lista)
    const valorMy = convertirPxToMy(element.Ancho, lista)
    console.log(element)
    console.log(valorMFin-valorM)
    //Our first draw
    falla.strokeStyle = "black";
    falla.rect(valorM, 237, valorMFin-valorM, -valorMy)
    falla.stroke();
  }
  const convertirPxToMx=(valor, lista)=>{
    console.log(lista)
    let largoPx=700
    let valIni=lista[0].ProgresivaInicial
    let valFin=lista[lista.length-1].ProgresivaFinal
    let largoPromM=valFin-valIni
    let pxmetro=largoPx/largoPromM
    let calculo=pxmetro*(valor-valIni)
    return calculo
  }
  const convertirPxToMy=(valor, lista)=>{
    let largoPy=250
    let valIni=0
    let valFin=lista[0].AnchoDeCarril
    let largoPromM=valFin-valIni
    let pymetro=largoPy/largoPromM
    let calculo=pymetro*(valor-valIni)
    return calculo
  }
  const dibujoDatos=(data)=>{
    let listado=[]
    let listadoAncho=[]
    let divisor=(data[data.length-1].ProgresivaFinal-data[0].ProgresivaInicial)/6
    let divisorAncho=data[0].AnchoDeCarril/4
    for(let i=6;i>=0;i--){
      let value=data[data.length-1].ProgresivaFinal-divisor*i
      listado.push(Math.round(value*100)/100)
    }
    for(let i=0;i<=4;i++){
      let valueAncho=data[0].AnchoDeCarril-divisorAncho*i
      listadoAncho.push(Math.round(valueAncho*100)/100)
    }
    setValoresAncho(listadoAncho)
    setValores(listado)
  }
  useEffect(() => {
    disenoCarretera()
  }, [])
  useEffect(() => {
    if(data.length!==0){
      dibujoDatos(data)
      let canvas = document.getElementById("canvasRuta");
      let ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      disenoCarretera()
      data.forEach((element,i,lista) => {
        dibujoFalla(element,lista)
        // convertirPxToMx()
      });
    }
  }, [data])

  return (
    <div style={{marginTop:'20px'}} className="flex justify-center items-center">
      <div className='flex'>
        <div className="rotate-180 flex justify-center font-bold mr-3 pt-20" style={{ writingMode: 'vertical-rl', height:'250px' }}>
          AREA DE CARRIL (m)
        </div>
        <div className='flex flex-col mr-2 justify-start items-start' style={{height:'250px'}}>
          <label style={{marginBottom:'34px', marginTop:'-48px'}}>{valoresAncho[0]}</label>
          <label style={{marginBottom:'34px'}}>{valoresAncho[1]}</label>
          <label style={{marginBottom:'34px'}}>{valoresAncho[2]}</label>
          <label style={{marginBottom:'34px'}}>{valoresAncho[3]}</label>
          <label >{valoresAncho[4]}</label>
        </div>
      </div>
      <div>
        <canvas style={{backgroundColor:'#808080'}} ref={canvasRef} id='canvasRuta' />
        <div className='flex mt-1'>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginLeft:'-10px', marginRight:'90px', height:'75px' }} >{valores[0]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px' }} >{valores[1]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px'  }} >{valores[2]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px'  }} >{valores[3]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px'  }} >{valores[4]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px'  }} >{valores[5]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'92px', height:'75px'  }} >{valores[6]}</label>
        </div>
      </div>
    </div>
        
  )
}

export default CarreteraImage