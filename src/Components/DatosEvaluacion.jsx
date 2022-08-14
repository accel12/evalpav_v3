import React, { useState } from 'react'
import img1 from '../Images/form1.jpeg'
import img2 from '../Images/form2.jpeg'
import imgSuccess from '../Images/success.png'
const DatosEvaluacion = () => {
    const [cargaBrutaEstado, setCargaBrutaEstado] = useState(false)
    const [dataBruta, setDataBruta] = useState([]);
    const [dataFormulario, setDataFormulario] = useState({
        metodoEvaluacion:'',
        pini:'',
        pfin:'',
        xyIni:'',
        xyFin:'',
        longitudTramo:'',
        anchoCarril:'',
        longitudMuestra:'',
        areaMuestra:'',
        nroUnidades:'',
        desvEstandar:'',
        errorAdmisible:'',
        nroMinimoUnidades:'',
        intervaloMuestreo:''
    })
    const handleChange=(e)=>{
        setDataFormulario({
            ...dataFormulario,
            [e.target.name]:e.target.value
        })
        console.log(dataFormulario)
    }
    const enviarFormulario=async(e)=>{
        e.preventDefault()
        await convertirv2()
        // setGlobal(dataFormulario)
        // navigate('/Dashboard')
    }
    const obtenerData= async(e)=>{
        // obtenerDataBruta(e,setDataBruta,setCargaBrutaEstado,setDataFormulario,dataFormulario)
    }
    const convertirv2=async(e)=>{
        e.preventDefault()
        // obtenerDatav2(dataBruta,dataFormulario.longitudMuestra,setval)
    }
  return (
    <div>
        <form>
            <div className='flex'>
                <label>METODO DE EVALUACIÓN:</label>
                <input className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-3 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='metodoEvaluacion' onChange={handleChange} />
                <div className='flex'>
                    <label>INSERTAR:</label>
                    <input type='file' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-3 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' onChange={obtenerData} />
                    {
                        cargaBrutaEstado? <img src={imgSuccess} width='42'  />: null
                    }
                </div>
            </div>
            
            <div className='mt-5 flex'>
                <div>
                    <label className='mr-6'>PROGRESIVA INICIO:</label>
                    <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-3 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='pini' onChange={handleChange} value={dataFormulario.pini ?? ''}  />
                </div>
                <div>
                    <label className='mr-6'>PROGRESIVA FIN:</label>
                    <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-3 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='pfin' onChange={handleChange} value={dataFormulario.pfin ?? ''}  />
                </div>
            </div>
            <div className='mt-5'>
                <label className='mr-20'>XY INICIO:</label>
                <input  className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-7 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='xyIni' onChange={handleChange}  value={dataFormulario.xyIni ?? ''} />
                <label className='mr-16'>XY FINAL:</label>
                <input  className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-7 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='xyFin' onChange={handleChange} value={dataFormulario.xyFin ?? ''}  />
            </div>
            <div className='mt-5'>
                <label className='mr-14'>LONGITUD DE TRAMO:</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='longitudTramo' placeholder='km' onChange={handleChange} value={dataFormulario.longitudTramo ?? ''}  />
            </div>
            <div className='mt-5'>
                <label className='mr-1'>ANCHO DE CALZADA/CARRIL:</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='anchoCarril' placeholder='m' onChange={handleChange} value={dataFormulario.anchoCarril ?? ''}  />
            </div>
            <div className='mt-5'>
                <label className='mr-9'>LONGITUD DE MUESTRA:</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='longitudMuestra' placeholder='m' onChange={handleChange}   />
                <button className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-2 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' onClick={convertirv2}>Calcular</button>
            </div>
            <div className='mt-5'>
                <label className='mr-16'>AREA DE MUESTRA:</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-7 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='areaMuestra' placeholder='m2' onChange={handleChange}  />
            </div>
            <div className='flex items-center flex-col mb-3'>
                <p className='font-bold text-center mb-5'>DETERMINACION DE LAS UNIDADES DE MUESTREO PARA EVALUACIÓN</p>
                <img  src={img1} />
            </div>            
            <div className='mb-3'>
                <label className='mr-1'>N</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='nroUnidades' onChange={handleChange}   />
                <label>Número total de unidades de muestreo en la seccion del pavimento</label>
            </div>
            <div className='mb-3'>
                <label className='mr-1'>O</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='desvEstandar'  onChange={handleChange}   />
                <label>Desviación estandar del PCI entre las unidades</label>
            </div>
            <div className='mb-3'>
                <label className='mr-1'>e</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='errorAdmisible' onChange={handleChange}   />
                <label>Error admisible en el estimado del PCI de la sección (e=5%)</label>
            </div>
            <div className='mb-5'>
                <label className='mr-1'>n</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='nroMinimoUnidades' onChange={handleChange}   />
                <label>Número minimo de unidades de muestreo a evaluar</label>
            </div>
            <div className='flex items-center flex-col mb-3'>
                <p className='font-bold text-center mb-5'>DETERMINACIÓN DE LAS UNIDADES DE INTERVALO</p>
                <img  src={img2} />
            </div>
            <div className='mb-5'>
                <label className='mr-1'>i</label>
                <input type='number' className='bg-fondoInput  rounded-md shadow-sm py-1.5 pl-2 pr-3 ml-4 mr-6 focus:outline-none hover:bg-slate-700 focus:bg-slate-700' name='intervaloMuestreo' onChange={handleChange}   />
                <label>Intervalo de muestreo</label>
                
            </div> 
            
            <div className='flex justify-center'>
                <button className='highlight-white/20 bg-sky-500 focus:outline-none focus:ring-2 h-12 px-6 rounded-lg focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-sky-400 ' onClick={enviarFormulario}>Guardar</button>

            </div>
        </form>
    </div>
  )
}

export default DatosEvaluacion