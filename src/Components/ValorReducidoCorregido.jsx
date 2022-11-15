import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect, useRef } from 'react'
import useDataExcel from '../hooks/useDataExcel'
import useIndice from '../hooks/useIndice'
import useValRed from '../hooks/useValRed'
import '../Components/ValorReducido.css'
import { useState } from 'react'
import useValRedCorregido from '../hooks/useValRedCorregido'

const ValorReducidoCorregido = () => {
    const dataExcel=useDataExcel()
    const dataValCorregido=useValRedCorregido()
    const indice=useIndice()
    const cellM = useRef()
    const [altura, setAltura] = useState(0)
    useEffect(() => {
      console.log(dataValCorregido)
    }, [])
    
  return (
    <div className='mt-4 pb-2'>
            <div className=' w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 border-b border-black'>
                <label className='font-bold'>CALCULO DEL VALOR DEDUCIDO CORREGIDO</label>
            </div>
            <div className='mx-4 mb-4'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='border border-black bg-fondoHeader' colSpan={9}>
                                    CALCULO DEL VALOR DEDUCIDO CORREGIDO
                                </th>
                                
                                <th className='border border-black bg-fondoHeader'>
                                    TOTAL
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    q
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    VDC
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataValCorregido[indice].map((items,i,lista)=>(
                                    <tr className=' text-center celdaConBorde'>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            {
                                                items.listaVr[0]!==undefined ?
                                                Math.round(items.listaVr[0]*100)/100 :
                                                '0.00'
                                            }
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[1]!==undefined ?
                                                    Math.round(items.listaVr[1]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[2]!==undefined ?
                                                    Math.round(items.listaVr[2]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[3]!==undefined ?
                                                    Math.round(items.listaVr[3]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[4]!==undefined ?
                                                    Math.round(items.listaVr[4]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[5]!==undefined ?
                                                    Math.round(items.listaVr[5]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[6]!==undefined ?
                                                    Math.round(items.listaVr[6]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[7]!==undefined ?
                                                    Math.round(items.listaVr[7]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.listaVr[8]!==undefined ?
                                                    Math.round(items.listaVr[8]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    Math.round(items.total*10)/10
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    Math.round(items.q*100)/100
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    Math.round(items.vrc*10)/10
                                                }
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
        </div>
  )
}

export default ValorReducidoCorregido