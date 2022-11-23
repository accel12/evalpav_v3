import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import useFormulario from '../hooks/useFormulario'

const CarreteraImage = ({data}) => {
  const [longitudCarretera, setLongitudCarretera] = useState(0)
  const [valores, setValores] = useState([])
  const [valoresAncho, setValoresAncho] = useState([])
  const dataFormulario=useFormulario()
  const canvasRef = useRef(null)
  const disenoCarretera=()=>{
    const canvas = canvasRef.current
    canvas.height=190
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
    lineaAmarilla.fillRect(-10,180,720, 10)
  }
  const dibujoFalla=(element,lista)=>{
    const valorxCero=lista[0].ProgresivaInicial
    const canvas = canvasRef.current
    const falla = canvas.getContext('2d')
    const valorMXini= convertirPxToMx(element.Xfalla, lista)
    const ancho = convertirPxToMx(element.Ancho, lista)
    
    const valorMYIni = convertirPxToMy(element.ProgresivaInicial, lista)
    const longitud = convertirPxToMy(element.ProgresivaInicial+element.Longitud , lista)
    console.log({valorMYIni})
    console.log({ancho})
    console.log({longitud})
    //Our first draw

    falla.strokeStyle = "black";
    // falla.rect(valorMXini, 10, valorMXFin-valorMXini, valorMYFin-valorMYIni)
    console.log(valorMXini)
    falla.rect(valorMYIni,valorMXini,longitud-valorMYIni,ancho)
    falla.stroke();
  }
  const convertirPxToMx=(valor, lista)=>{
    let largoPy=190
    let valIni=0
    let valFin=lista[0].AnchoDeCarril
    let pymetro=largoPy/valFin
    let calculo=pymetro*(valor-valIni)
    return calculo
  }
  const convertirPxToMy=(valor, lista)=>{
    let largoM=parseInt(dataFormulario.longitudMuestra)
    let largoPx=700
    let valIni=lista[0].ProgresivaInicial
    let pxmetro=largoPx/largoM
    let calculo=pxmetro*(valor-valIni)
    return calculo
  }
  const dibujoDatos=(data)=>{
    let largoM=parseInt(dataFormulario.longitudMuestra)
    let listado=[]
    let listadoAncho=[]
    let divisor=largoM/6
    let divisorAncho=data[0].AnchoDeCarril/4
    for(let i=0;i<=6;i++){
      let value=data[0].ProgresivaInicial+divisor*i
      listado.push(Math.round(value*100)/100)
    }
    for(let i=4;i>=0;i--){
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
        <div className="rotate-180 flex justify-center font-bold mr-3 pt-20" style={{ writingMode: 'vertical-rl', height:'190px' }}>
          AREA DE CARRIL (m)
        </div>
        <div className='flex flex-col mr-2 justify-start items-start' style={{height:'190px'}}>
          <label style={{marginBottom:'17px', marginTop:'-42px'}}>{valoresAncho[0]}</label>
          <label style={{marginBottom:'17px'}}>{valoresAncho[1]}</label>
          <label style={{marginBottom:'17px'}}>{valoresAncho[2]}</label>
          <label style={{marginBottom:'17px'}}>{valoresAncho[3]}</label>
          <label >{valoresAncho[4]}</label>
        </div>
      </div>
      <div>
        <canvas style={{backgroundColor:'#808080'}} ref={canvasRef} id='canvasRuta' />
        <div className='flex mt-1'>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginLeft:'-11px', marginRight:'90px', height:'75px' }} >{valores[0]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'93px', height:'75px' }} >{valores[1]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'93px', height:'75px'  }} >{valores[2]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'93px', height:'75px'  }} >{valores[3]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'93px', height:'75px'  }} >{valores[4]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', marginRight:'93px', height:'75px'  }} >{valores[5]}</label>
          <label className="rotate-180 flex justify-end" style={{ writingMode: 'vertical-rl', marginTop:'5px', height:'75px'  }} >{valores[6]}</label>
        </div>
      </div>
    </div>
        
  )
}

export default CarreteraImage