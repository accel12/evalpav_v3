import React from 'react'
import DatosEvaluacion from '../Components/DatosEvaluacion'
import Mapa from '../Components/Mapa'
import bg from '../Images/bg1.jpg'
const Evaluacion = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize: 'cover' }} className="h-full py-4">
        <div className='flex  w-full items-center justify-center space-x-8 col'>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>INICIO</button>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>CALCULO</button>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>EXPORTACIÓN</button>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>METRADOS</button>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>GRAFICA</button>
            <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>MAPA INTENSIDAD</button>
        </div>
        <div className='flex p-4 space-x-3'>
            <div className='w-80'>
                <Mapa />
            </div>
            <div className='w-full'>
                <div className='h-full rounded-3xl p-5  bg-black' style={{backgroundColor:'#E6E5C7'}} >
                    <h1 className='text-center text-3xl font-bold underline pb-4'>DATOS DE EVALUCIÓN</h1>
                    <DatosEvaluacion />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Evaluacion