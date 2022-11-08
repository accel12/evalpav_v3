import React from 'react'

const NavBar = ({setValorNav}) => {
    const manejorNavbar=(e)=>{
        setValorNav(e.target.value)
    }
  return (
    <div className='flex  w-full items-center justify-center h-16'>
        <ul className='flex  w-full items-center justify-center space-x-8 col cursor-pointer'>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={1} onClick={manejorNavbar}>INICIO</li>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={2} onClick={manejorNavbar}>CALCULO</li>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={3} onClick={manejorNavbar}>EXPORTACIÓN</li>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={4} onClick={manejorNavbar}>METRADOS</li>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={5} onClick={manejorNavbar}>GRAFICA</li>
            <li className='bg-azul hover:bg-botonPresionado text-white py-1 px-8 rounded-xl' value={6} onClick={manejorNavbar}>MAPA INTENSIDAD</li> 
        </ul>
    </div>
  )
}

export default NavBar