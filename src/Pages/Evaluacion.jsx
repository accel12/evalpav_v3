import React from "react";
import DatosEvaluacion from "../Components/DatosEvaluacion";
import { Outlet, useNavigate } from "react-router-dom";
import Mapa from "../Components/Mapa";
import bg from "../Images/bg1.jpg";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useState } from "react";
const Evaluacion = () => {
  const [valorNav, setValorNav] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setValorNav(1);
    navigate("Inicio");
  }, []);

  //Cambio de valor en Navbar
  useEffect(() => {
    switch (valorNav) {
      case 1:
        navigate("Inicio");
        break;
      case 2:
        navigate("Calculo");
        break;
      case 3:
        navigate("Exportacion");
        break;
      case 4:
        alert("En desarrollo");
        break;
      case 5:
        alert("En desarrollo");
        break;
      case 6:
        alert("En desarrollo");
        break;
    }
  }, [valorNav]);

  return (
    <div className="bg-fondoPrincipal" style={{ minWidth: "1280px" }}>
      <NavBar setValorNav={setValorNav} />
      <Outlet />
    </div>
  );
};

export default Evaluacion;
