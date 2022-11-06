import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Evaluacion from './Pages/Evaluacion';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Tramo from './Pages/Tramo';
import DataExcelContext from './context/DataExcelContext';
import IndiceContext from './context/IndiceContext';
import PciContext from './context/PciContext';
import DatosEvaluacion from './Components/DatosEvaluacion';
import DashBoard from './Pages/DashBoard';
import ValRedContext from './context/ValRedContext';
import ValRedCorregidoContext from './context/ValRedCorregidoContext';

function App() {
  const [val, setval] = useState([])
  const [pci, setPci] = useState([])
  const [valRed, setValRed] = useState([])
  const [valRedCorregido, setValRedCorregido] = useState([])
  const [indice, setIndice] = useState(0)
  const getDataEvalpav=async()=>{
    const data= await fetch('https://raw.githubusercontent.com/accel12/data/main/dataEvalpav.json')
    const dataJson=await data.json()
    setPci(dataJson)
  }
  return (
    <IndiceContext.Provider value={indice}>
      <PciContext.Provider value={pci}>
        <ValRedContext.Provider value={valRed}>
          <ValRedCorregidoContext.Provider value={valRedCorregido}>
            <DataExcelContext.Provider value={val}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Registro" element={<Register />} />
                  <Route path="/Tramo" element={<Tramo />} />
                  <Route path="/Evaluacion" element={<Evaluacion  />} >
                    <Route path='Inicio' element= {<DatosEvaluacion setval={setval} setIndice={setIndice} setPci={setPci} setValRed={setValRed} setValRedCorregido={setValRedCorregido} />}/>
                    <Route path='Calculo' element= {<DashBoard setIndice={setIndice} />}  />
                  </Route>
                </Routes>
              </BrowserRouter>
            </DataExcelContext.Provider>
          </ValRedCorregidoContext.Provider>
        </ValRedContext.Provider>
        
      </PciContext.Provider>
    </IndiceContext.Provider>
  );
}

export default App;