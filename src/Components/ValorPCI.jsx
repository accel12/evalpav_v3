import React from 'react'
import { useEffect } from 'react'
import useIndice from '../hooks/useIndice'
import useResultadosValorDeducido from '../hooks/useResultadosValorDeducido'

const ValorPCI = () => {
    const indice=useIndice()
    const ValorDeducidoTotal=useResultadosValorDeducido()

  return (
    <div className='mt-4 pb-2'>
        <div className=' w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 border-b border-black'>
            <label className='font-bold'>CALCULO DEL VALOR DEDUCIDO CORREGIDO</label>
        </div>
        <div className='mx-4 mb-4 flex justify-center items-center'>
            <div className='mr-24'>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-y border-y-black pl-3'>
                        100
                    </div>
                    <div style={{backgroundColor:'#267332', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        EXCELENTE
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        85
                    </div>
                    <div style={{backgroundColor:'#88BC1A', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        MUY BUENO
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        70
                    </div>
                    <div style={{backgroundColor:'#FFF50B', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        BUENO
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        55
                    </div>
                    <div style={{backgroundColor:'#B9A80C', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        REGULAR
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        40
                    </div>
                    <div style={{backgroundColor:'#896711', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        POBRE
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        25
                    </div>
                    <div style={{backgroundColor:'#FF0202', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        MUY POBRE
                    </div>
                </div>
                <div className='flex'>
                    <div style={{width:'100px', height:'30px',marginRight:'-5px'}} className=' rounded-r-lg border-b border-y-black pl-3'>
                        10
                    </div>
                    <div style={{backgroundColor:'#9D0707', width:'100px', height:'30px'}} className='rounded' />
                    <div style={{width:'100px', height:'30px'}} className=' text-center'>
                        FALLADO
                    </div>
                </div>
            </div>
            <div>
                <div className='flex mb-3'>
                    <label className='w-16 font-bold text-2xl'>VDC</label>
                    <div style={{height:'32'}} className='flex items-center bg-fondoItemsTabla rounded w-24 border border-black  justify-center'>{ValorDeducidoTotal[indice].vdc}</div>
                </div>
                <div className='flex'>
                    <label className='w-16 font-bold text-2xl'>PCI</label>
                    <div style={{height:'32'}} className='flex items-center bg-fondoItemsTabla rounded w-24 border border-black justify-center'>{ValorDeducidoTotal[indice].pci}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValorPCI