import React from 'react'
import bg from '../Images/bg1.jpg'
import logo from '../Images/logoEvalpav.png'
import logo2 from '../Images/Logo2.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor:'#001233'}}  className="h-screen">
            <div className='flex py-3 pl-3 flex-row'>
                <div>
                    <img src={logo} alt="logo" style={{height:'78px'}} />
                </div>
                <div className='flex  w-screen items-center justify-end space-x-3 col mr-3'>
                    <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>INICIO</button>
                    <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>APPS</button>
                    <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>PLANES</button>
                    <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>CLIENTES</button>
                    <button className='bg-azul hover:bg-blue-700 text-white py-1 px-8 rounded-xl'>CONTACTOS</button>
                </div>
            </div>
            <div className='flex h-altura justify-center items-center flex-col'>
                <div className='flex items-center mb-7'>
                    <img src={logo2} alt="logo" style={{height:'150px', width:'130px'}} />
                    <h1 className='text-5xl font-bold pl-3 pt-3 text-white'>Condición-Pav</h1>
                </div>
                <button className='bg-verde hover:bg-green-700 text-white py-1 px-8 rounded-3xl w-44 h-11 mb-2' onClick={()=>navigate('Login')}>INICIO</button>
                <Link to="/Registro" className=' underline'>CREAR CUENTA</Link>
            </div>
        </div>
    )
}

export default Home