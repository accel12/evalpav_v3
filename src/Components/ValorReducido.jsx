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
        <div className='mt-4'>
            <div className=' w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 rounded-full border-b border-black'>
                <label className='font-bold'>CALCULO DEL VALOR REDUCIDO TOTAL</label>
            </div>
            <div className='mx-4 mb-4'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>Daño</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>Severidad</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>1</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>2</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>3</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>4</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>5</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>6</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>7</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>8</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>9</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>10</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>TOTAL</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>Densidad</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>VR</div>
                                </th>
                                <th className=''>
                                    <div className='border-2 border-black rounded-md bg-fondoHeader'>m</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataValRed[indice].map((items,i,lista)=>(
                                    <tr className=' text-center celdaConBorde'>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {items.Dano}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {items.Severidad}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[0]!==undefined ?
                                                    Math.round(items.Valores[0]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[1]!==undefined ?
                                                    Math.round(items.Valores[1]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[2]!==undefined ?
                                                    Math.round(items.Valores[2]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[3]!==undefined ?
                                                    Math.round(items.Valores[3]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[4]!==undefined ?
                                                    Math.round(items.Valores[4]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[5]!==undefined ?
                                                    Math.round(items.Valores[5]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[6]!==undefined ?
                                                    Math.round(items.Valores[6]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[7]!==undefined ?
                                                    Math.round(items.Valores[7]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[8]!==undefined ?
                                                    Math.round(items.Valores[8]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                                {
                                                    items.Valores[9]!==undefined ?
                                                    Math.round(items.Valores[9]*100)/100 :
                                                    '0.00'
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {
                                                Math.round(items.Total*100)/100
                                            }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {
                                                Math.round(items.Densidad*100)/100
                                            }
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {
                                                items.Vr
                                            }
                                            </div>
                                        </td>
                                        {
                                            i === 0 ?
                                            <td rowSpan={999} ref={cellM} id='celdaMId' className='border border-black rounded-md bg-fondoItemsTabla' >
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