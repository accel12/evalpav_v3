import React from 'react'

const TiposFalla = () => {
  return (
    <div className='flex flex-col items-center'>
        <div >
            <ol style={{ columnCount: 3, listStyleType: 'decimal' , columnGap:'40px' }}>
                <li>Piel de cocodrilo</li>
                <li>Exudacion</li>
                <li>Agrietamiento en bloque</li>
                <li>Abultamiento y hundimiento</li>
                <li>Corrugación</li>
                <li>Depresión</li>
                <li>Grieta de borde</li>
                <li>Grieta de reflexion de junta</li>
                <li>Desnivel carril/berma</li>
                <li>Grieta longitudinal y transversal</li>
                <li>Parcheo</li>
                <li>Pulimiento de agregado</li>
                <li>Huecos</li>
                <li>Cruce de via ferrea</li>
                <li>Ahuellamiento</li>
                <li>Desplazamiento</li>
                <li>Grieta parabolica</li>
                <li>Hinchamiento</li>
                <li>Desprendimiento de agregado</li>
            </ol>
        </div>            
    </div>
  )
}

export default TiposFalla