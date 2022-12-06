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
import searchIcon from '../Images/search.png'
import ValorPCI from '../Components/ValorPCI'
import useResultadosValorDeducido from '../hooks/useResultadosValorDeducido'
import useFormulario from '../hooks/useFormulario'
const DashBoard = ({setIndice}) => {
  const [valorActual, setValorActual] = useState([])
  const [progresivaBuscar, setProgresivaBuscar] = useState(0)
  const data=useDataExcel()
  const pci=usePci()
  const valorPCITotal=useResultadosValorDeducido
  const indice=useIndice()
  const datosFormulario= useFormulario()
  const aumento=()=>{
    if(indice==data.length-1){
      setIndice(0)
    }else{
      setIndice(indice+1)
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
  
  const buscarProgresiva=()=>{
    let listado=[]
    data.forEach((item,i,lista)=>{
      item.forEach(e=>{
        let itemInicialInsertar={key:i,valor:e.ProgresivaInicial}
        let itemFinalInsertar={key:i,valor:e.ProgresivaFinal}
        listado.push(itemInicialInsertar)
        listado.push(itemFinalInsertar)
      })
    })
    const valorCercano= listado.reduce((a, b) => {
      let aDiff = Math.abs(a.valor - progresivaBuscar);
      let bDiff = Math.abs(b.valor - progresivaBuscar);

      if (aDiff == bDiff) {
          return a > b ? a : b;
      } else {
          return bDiff < aDiff ? b : a;
      }
    });
    setIndice(valorCercano.key)
  }

  return (
    <div className=' px-5 text-white pb-2' style={{minWidth:'1280px'}}>
      <div className='bg-fondoAlterno rounded-3xl w-full min-w-[720px]  scroll-smooth'>
        <div className='flex justify-center items-center'>
          <div className=' flex items-center justify-center space-x-8  py-3 flex-wrap' style={{minWidth:'1280px', maxWidth:'1280px'}}>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold '>TRAMO:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>LA VICTORIA - SAN LUIS</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>CARRIL:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>{
              (valorActual.length==0)?
              0
              :valorActual[0].Carril
              }</label>
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
              :Math.round(valorActual[0].ProgresivaInicial * 100)/100
              }</label>
            </div>
            <div className='flex items-center my-4'>
              <label className='mr-3 font-bold'>PROGRESIVA FIN:</label>
              <label className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black'>{
              (valorActual.length==0)?
              0
              : Math.round((valorActual[0].ProgresivaInicial  + parseInt(datosFormulario.longitudMuestra)) * 100) / 100
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
              <input className='pr-8 pl-2 bg-fondoTextoAlterno rounded-md text-black border border-black' onChange={e=>{setProgresivaBuscar(e.target.value)}}></input>
              <button className='ml-2 text-white bg-azul hover:bg-botonPresionado focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center' onClick={buscarProgresiva}>
                <img src={searchIcon} className=' h-7' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex mb-6 bg-fondoPanel py-2 border-b border-black'>
          <div className='h-6 flex items-center '>
            <button style={{height:25, width:25}}><img src={Menos} style={{height:25, width:25}} onClick={disminucion} /></button>
            <label className='mr-4 '>MUESTRA:</label>
            <label className='pr-8 pl-2 mr-4 bg-white text-black'>{indice+1}</label>
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
            <CarreteraImage data={valorActual} />
          </div>
        </div>
        <ValorReducido />
        <ValorReducidoCorregido />
        <ValorPCI />
      </div>
    </div>
  )
}

export default DashBoard