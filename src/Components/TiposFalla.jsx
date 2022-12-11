import React from 'react'
import '../styles/tiposFallas.css'
const TiposFalla = () => {
  const mostrarMensaje=(e)=>{
    alert('En desarrollo')
  }
  return (
    <div className='flex flex-col items-center'>
        <div >
            <ol style={{ columnCount: 3, listStyleType: 'decimal' , columnGap:'40px' }} className='listaFallas'>
                <li value={0} onClick={mostrarMensaje}>Piel de cocodrilo</li>
                <li value={1} onClick={mostrarMensaje}>Exudacion</li>
                <li value={2} onClick={mostrarMensaje}>Agrietamiento en bloque</li>
                <li value={3} onClick={mostrarMensaje}>Abultamiento y hundimiento</li>
                <li value={4} onClick={mostrarMensaje}>Corrugación</li>
                <li value={5} onClick={mostrarMensaje}>Depresión</li>
                <li value={6} onClick={mostrarMensaje}>Grieta de borde</li>
                <li value={7} onClick={mostrarMensaje}>Grieta de reflexion de junta</li>
                <li value={8} onClick={mostrarMensaje}>Desnivel carril/berma</li>
                <li value={9} onClick={mostrarMensaje}>Grieta longitudinal y transversal</li>
                <li value={10} onClick={mostrarMensaje}>Parcheo</li>
                <li value={11} onClick={mostrarMensaje}>Pulimiento de agregado</li>
                <li value={12} onClick={mostrarMensaje}>Huecos</li>
                <li value={13} onClick={mostrarMensaje}>Cruce de via ferrea</li>
                <li value={14} onClick={mostrarMensaje}>Ahuellamiento</li>
                <li value={15} onClick={mostrarMensaje}>Desplazamiento</li>
                <li value={16} onClick={mostrarMensaje}>Grieta parabolica</li>
                <li value={17} onClick={mostrarMensaje}>Hinchamiento</li>
                <li value={18} onClick={mostrarMensaje}>Desprendimiento de agregado</li>
            </ol>
        </div>            
    </div>
  )
}

export default TiposFalla