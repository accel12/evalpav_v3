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
    <div className='mt-4'>
            <div className=' w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 rounded-full border-b border-black'>
                <label className='font-bold'>CALCULO DEL VALOR REDUCIDO CORREGIDO</label>
            </div>
            <div className='mx-4 mb-4'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='' colSpan={9}>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>CALCULO DEL VALOR REDUCIDO CORREGIDO</div>
                                </th>
                                
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>TOTAL</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>q</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>VRC</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataValCorregido[indice].map((items,i,lista)=>(
                                    <tr className=' text-center celdaConBorde'>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[0]!==undefined ?
                                                    Math.round(items.listaVr[0]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[1]!==undefined ?
                                                    Math.round(items.listaVr[1]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[2]!==undefined ?
                                                    Math.round(items.listaVr[2]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[3]!==undefined ?
                                                    Math.round(items.listaVr[3]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[4]!==undefined ?
                                                    Math.round(items.listaVr[4]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[5]!==undefined ?
                                                    Math.round(items.listaVr[5]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[6]!==undefined ?
                                                    Math.round(items.listaVr[6]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[7]!==undefined ?
                                                    Math.round(items.listaVr[7]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.listaVr[8]!==undefined ?
                                                    Math.round(items.listaVr[8]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    Math.round(items.total*100)/100
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    Math.round(items.q*100)/100
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    Math.round(items.vrc*100)/1
                                                }
                                            </div>
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