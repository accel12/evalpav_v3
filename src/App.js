import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Evaluacion from './Pages/Evaluacion';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Tramo from './Pages/Tramo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/Tramo" element={<Tramo />} />
        <Route path="/Evaluacion" element={<Evaluacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
