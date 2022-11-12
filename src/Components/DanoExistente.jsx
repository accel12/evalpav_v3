import React from 'react'
import useDataExcel from '../hooks/useDataExcel'
import useIndice from '../hooks/useIndice'

const DanoExistente = () => {
    const dataExcel=useDataExcel()
    const indice=useIndice()
    console.log(global)
    console.log(dataExcel[indice])
    return (
        <div className='mt-4'>
            <div className=' w-full text-center mb-4'>
                <label className='font-bold '>DAÑOS EXISTENTES</label>
            </div>
            <div className='w-full'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border border-black  bg-fondoHeader'>
                                INICIO
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                FIN
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                DAÑO
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                SEVERIDAD
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                x
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                y
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                ANCHO
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                LONGITUD
                            </th>
                            <th className='border border-black  bg-fondoHeader'>
                                AREA DAÑO
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataExcel[indice].map(items=>(
                                <tr className=' text-center'>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.ProgresivaInicial}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.ProgresivaFinal}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.Daño}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.Severidad}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.Xfalla}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.Xfalla}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {items.Ancho}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {Math.round(items.Longitud*100)/100}
                                    </td>
                                    <td className='border border-black  bg-fondoItemsTabla'>
                                        {Math.round(items.Area*100)/100}
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

export default DanoExistente