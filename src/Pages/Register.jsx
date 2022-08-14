import React from 'react'
import bg from '../Images/bg1.jpg'
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize: 'cover' }} className="h-screen">
        <div className='flex h-altura justify-center items-center flex-col'>
            <div className='flex items-center flex-col space-y-7 mb-7'>
                <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='NOMBRE' type={'name'} />
                <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='CORREO ELECTRONICO' type={'email'} />
                <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='PAIS' type={'country'} />
                <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='USUARIO' type={'username'} />
                <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='COTRASEÑA' type={'password'} />
            </div>
            <button className='bg-verde hover:bg-green-700 text-white py-1 px-8 rounded-3xl w-44 h-11'>CREAR</button>
            <Link to="/Login" className=' underline'>VOLVER</Link>
        </div>
    </div>
  )
}

export default Register