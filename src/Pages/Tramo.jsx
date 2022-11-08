import React from 'react'
import ItemTramo from '../Components/ItemTramo'
import bg from '../Images/bg1.jpg'
import bga from '../Images/bga.png'
const Tramo = () => {
  return (
    <div className="h-screen pl-10 py-8 bg-fondoPrincipal">
        <div className='h-full rounded-3xl pt-5' style={{width:'700px', backgroundImage: `url(${bga})`}}>
            <h1 className='text-center text-3xl font-bold underline pb-4 border-b border-black'>TRAMOS EVALUADOS</h1>
            <ItemTramo />
        </div>
    </div>
  )
}

export default Tramo