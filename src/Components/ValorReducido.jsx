import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect, useRef } from 'react'
import useDataExcel from '../hooks/useDataExcel'
import useIndice from '../hooks/useIndice'
import useValRed from '../hooks/useValRed'
import '../Components/ValorReducido.css'
import { useState } from 'react'
const ValorReducido = () => {
    const dataExcel=useDataExcel()
    const dataValRed=useValRed()
    const indice=useIndice()
    const cellM = useRef()
    const [altura, setAltura] = useState(0)
    
    return (
        <div className='mt-4  pb-2'>
            <div className=' w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 border-b border-black'>
                <label className='font-bold'>CALCULO DEL VALOR DEDUCIDO TOTAL</label>
            </div>
            <div className='mx-4 mb-4'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='border border-black bg-fondoHeader'>
                                    Daño
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    Severidad
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    1
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    2
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    3
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    4
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    5
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    6
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    7
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    8
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    9
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    10
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    TOTAL
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    Densidad
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    VD
                                </th>
                                <th className='border border-black bg-fondoHeader'>
                                    m
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataValRed[indice].map((items,i,lista)=>(
                                    <tr className=' text-center celdaConBorde'>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {items.Dano}
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {items.Severidad}
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[0]!==undefined ?
                                                    Math.round(items.Valores[0]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[1]!==undefined ?
                                                    Math.round(items.Valores[1]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[2]!==undefined ?
                                                    Math.round(items.Valores[2]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[3]!==undefined ?
                                                    Math.round(items.Valores[3]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[4]!==undefined ?
                                                    Math.round(items.Valores[4]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[5]!==undefined ?
                                                    Math.round(items.Valores[5]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[6]!==undefined ?
                                                    Math.round(items.Valores[6]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[7]!==undefined ?
                                                    Math.round(items.Valores[7]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[8]!==undefined ?
                                                    Math.round(items.Valores[8]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                                {
                                                    items.Valores[9]!==undefined ?
                                                    Math.round(items.Valores[9]*100)/100 :
                                                    '0.00'
                                                }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                            {
                                                Math.round(items.Total*100)/100
                                            }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                            {
                                                Math.round(items.Densidad*100)/100
                                            }
                                            
                                        </td>
                                        <td className='border border-black bg-fondoItemsTabla'>
                                            
                                            {
                                                Math.round(items.Vr*100)/100
                                            }
                                            
                                        </td>
                                        {
                                            i === 0 ?
                                            <td rowSpan={999} className='border border-black bg-fondoItemsTabla' >
                                                {
                                                    
                                                    Math.round(lista.m*100)/100
                                                }
                                            </td> :
                                            null
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default ValorReducido