import React from 'react'
import useDataExcel from '../hooks/useDataExcel'
import useIndice from '../hooks/useIndice'

const DanoExistente = () => {
    const dataExcel=useDataExcel()
    const indice=useIndice()
    console.log(global)
    console.log(dataExcel[indice])
    return (
        <div className=' mt-4'>
            <div className=' w-full text-center mb-4'>
                <label className='font-bold '>DAÑOS EXISTENTES</label>
            </div>
            <div className='w-full'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>INICIO</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>FIN</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>DAÑO</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>SEVERIDAD</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>X</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>Y</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>ANCHO</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>LONGITUD</div>
                            </th>
                            <th className=''>
                                <div className='border-2 border-black rounded-md bg-fondoHeader'>AREA DAÑO</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataExcel[indice].map(items=>(
                                <tr className=' text-center'>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.ProgresivaInicial}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.ProgresivaFinal}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.Daño}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.Severidad}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.Xfalla}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.Xfalla}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {items.Ancho}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                            {Math.round(items.Longitud,3)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='border-2 border-black rounded-md bg-fondoItemsTabla'>
                                          {Math.round(items.Area,3)}
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

export default DanoExistente