import React from "react";
import bg from "../Images/bg1.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Logo2.png";
import "../styles/Proyecto.css";
import "../styles/Login.css";
import { FaKey, FaUserAlt } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const validarUsuario = () => {
    navigate("/Evaluacion");
  };
  return (
    <div className="contenido">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={Logo} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column contenedor">
              <div className="d-flex justify-content-center links">
                <p className="inicioSesion">Iniciar Sesión</p>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FaUserAlt />
                  </span>
                </div>
                <input
                  type="text"
                  name="Usuario"
                  className="form-control input_user"
                  placeholder="usuario"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FaKey />
                  </span>
                </div>
                <input
                  type="password"
                  name="Clave"
                  className="form-control input_pass"
                  placeholder="password"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  name="button"
                  className="btn login_btn"
                  onClick={validarUsuario}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
