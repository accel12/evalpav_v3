import React from 'react'
import { useEffect } from 'react'
import Mapa from '../Components/Mapa'
import useDataExcel from '../hooks/useDataExcel'
import usePci from '../hooks/usePci'
import Menos from '../Images/menos.png'
import Mas from '../Images/mas.png'
import TiposFalla from '../Components/TiposFalla'
import DanoExistente from '../Components/DanoExistente'
import '../styles/calculo.css' 
import CarreteraImage from '../Components/CarreteraImage'
import ValorReducido from '../Components/ValorReducido'
import useIndice from '../hooks/useIndice'
import { useState } from 'react'
import ValorReducidoCorregido from '../Components/ValorReducidoCorregido'
const DashBoard = ({setIndice}) => {
  const [progresivaInicio, setProgresivaInicio] = useState(0)
  const [progresivaFin, setProgresivaFin] = useState(0)
  const [area, setArea] = useState(0)
  const [valorActual, setValorActual] = useState([])

  const data=useDataExcel()
  const pci=usePci()
  const indice=useIndice()
  const aumento=()=>{
    if(indice==data.length-1){
      setIndice(0)
    }else{
      setIndice(indice+1)
      console.log(data[indice+1])
    }
  }
  const disminucion=()=>{
      if(indice==0){
        setIndice(data.length-1)
      }else{
        setIndice(indice-1)
      }
      
  }
  useEffect(() => {
    setValorActual(data[indice])
  }, [])
  useEffect(() => {
    setValorActual(data[indice])
  }, [indice])
  
  return (
    <div className=' overflow-auto  h-alturaFormulario px-5 min-w-[720px]'>
      <div className='bg-fondoAlterno rounded-3xl w-full h-alturaOutlet min-w-[720px] overflow-auto scroll-smooth'>
        <div className='flex justify-center items-center'>
          <div className=' flex items-center justify-center space-x-8  py-3 flex-wrap  min-w-[720px] max-w-[1080px]'>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>TRAMO:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>LA VICTORIA - SAN LUIS</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>CARRIL:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>DERECHO</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>EVALUADOR:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>CARLOS HERNANDEZ MARTINEZ</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>PROGRESIVA INICIO:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>{
              (valorActual.length==0)?
              0
              :valorActual[0].ProgresivaInicial
              }</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>PROGRESIVA FIN:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>{
              (valorActual.length==0)?
              0
              :valorActual[valorActual.length-1].ProgresivaFinal
              }</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>AREA:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>{
              (valorActual.length==0)?
              0
              :valorActual[valorActual.length-1].AreaMuestra
              }</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>BUSCAR:</label>
              <input className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'></input>
              <button>Buscar</button>
            </div>
          </div>
        </div>
        <div className='flex mb-6 bg-fondoPanel py-2 rounded-full border-b border-black'>
          <div className='h-6 flex items-center '>
            <button style={{height:25, width:25}}><img src={Menos} style={{height:25, width:25}} onClick={disminucion} /></button>
            <label className='mr-4 '>MUESTRA:</label>
            <label className='pr-8 pl-2 mr-4 bg-white'>{indice}</label>
            <label className=' w-20'>DE {data.length}</label>
            <button style={{height:25, width:25}}><img src={Mas} style={{height:25, width:25}} onClick={aumento} /></button>
          </div>
          <div className=' w-full text-center'>
            <label className='font-bold '>TIPO DE FALLA</label>
          </div>
        </div>
        <div className='flex space-x-3'>
          <div className='w-80 ml-3'>
            <Mapa />
          </div>
          <div className='w-full px-3'>
            <TiposFalla />
            <DanoExistente />
            <CarreteraImage />
          </div>
        </div>
        <ValorReducido />
        <ValorReducidoCorregido />
      </div>
    </div>
  )
}

export default DashBoard