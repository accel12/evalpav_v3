import React from 'react'
import bg from '../Images/bg1.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex justify-center bg-fondoPrincipal">
            <div className='flex h-altura justify-center items-center flex-col'>
                <div className='flex items-center flex-col space-y-7 mb-7'>
                    <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='USUARIO' type={'username'} />
                    <input className='w-64 h-8 rounded-xl border border-black text-center' placeholder='COTRASEÑA' type={'password'} />
                </div>
                <button className='bg-verde hover:bg-green-700 text-white py-1 px-8 rounded-3xl w-44 h-11' onClick={()=>navigate('/Evaluacion/Inicio')}>ACCEDER</button>
                <Link to="/" className=' underline'>OLVIDASTE COTRASEÑA</Link>
            </div>
        </div>
    )
}

export default Login