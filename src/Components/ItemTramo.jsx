import React from 'react'
import Editar from '../Images/Editar.svg'
import Eliminar from '../Images/Eliminar.svg'
import Exportar from '../Images/ExportData.svg'
import { useNavigate } from 'react-router-dom';
const ItemTramo = () => {
    const navigate = useNavigate();
    return (
        <div className=' border-b border-black p-2  flex space-between relative' style={{width:'700px'}}>
            <label>LA OROYA - JUNIN</label>
            <div className='flex items-center justify-end space-x-1 col mr-3 right-0 absolute' >
                <button>
                    <img src={Editar} alt="Editar" style={{height:'30px'}} />
                </button>
                <button>
                    <img src={Eliminar} alt="Eliminar" style={{height:'30px'}} />
                </button>
                <button onClick={()=>navigate('/Evaluacion')}>
                    <img src={Exportar} alt="Exportar" style={{height:'30px'}} />
                </button>
            </div>
        </div>
    )
}

export default ItemTramo