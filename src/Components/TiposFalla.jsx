import React from 'react'
import '../styles/tiposFallas.css'
const TiposFalla = () => {
  const mostrarMensaje=(e)=>{
    alert('En desarrollo')
  }
  return (
    <div className='flex flex-col items-center'>
        <div >
            <ol style={{ columnCount: 3, listStyleType: 'decimal' , columnGap:'40px' }} className='listaFallas' start={1}>
                <li onClick={mostrarMensaje}>Piel de cocodrilo</li>
                <li onClick={mostrarMensaje}>Exudacion</li>
                <li onClick={mostrarMensaje}>Agrietamiento en bloque</li>
                <li onClick={mostrarMensaje}>Abultamiento y hundimiento</li>
                <li onClick={mostrarMensaje}>Corrugación</li>
                <li onClick={mostrarMensaje}>Depresión</li>
                <li onClick={mostrarMensaje}>Grieta de borde</li>
                <li onClick={mostrarMensaje}>Grieta de reflexion de junta</li>
                <li onClick={mostrarMensaje}>Desnivel carril/berma</li>
                <li onClick={mostrarMensaje}>Grieta longitudinal y transversal</li>
                <li onClick={mostrarMensaje}>Parcheo</li>
                <li onClick={mostrarMensaje}>Pulimiento de agregado</li>
                <li onClick={mostrarMensaje}>Huecos</li>
                <li onClick={mostrarMensaje}>Cruce de via ferrea</li>
                <li onClick={mostrarMensaje}>Ahuellamiento</li>
                <li onClick={mostrarMensaje}>Desplazamiento</li>
                <li onClick={mostrarMensaje}>Grieta parabolica</li>
                <li onClick={mostrarMensaje}>Hinchamiento</li>
                <li onClick={mostrarMensaje}>Desprendimiento de agregado</li>
            </ol>
        </div>            
    </div>
  )
}

export default TiposFalla