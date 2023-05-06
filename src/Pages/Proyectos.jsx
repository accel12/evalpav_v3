import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ModalProyectos from "../Components/ModalProyectos";
import Proyecto from "../Components/Proyecto";
import "../styles/Proyecto.css";

const Proyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [alto, setAlto] = useState(0);
  const contenedorProyectos = useRef();
  const listaProyectos = useRef();
  useEffect(() => {
    setAlto(contenedorProyectos.current.clientHeight);
    console.log(alto);
  }, []);

  return (
    <div className="contenido">
      <div className="h-100 contenedor">
        <div className="card contenedorProyectos h-100 d-flex flex-col">
          <div className="card-header text-center titulo">
            <p>PROYECTOS EVALUADOS</p>
          </div>
          <div
            className="card-body"
            ref={contenedorProyectos}
            style={{ padding: 0 }}
          >
            <div
              className="ml-3 pt-2"
              style={{
                overflowY: "auto",
                height: `${alto}px`,
              }}
            >
              <Proyecto />
              <Proyecto />

              <div className="d-flex justify-center my-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  Crear Proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showModal ? <ModalProyectos setShowModal={setShowModal} /> : null}
      </div>
    </div>
  );
};

export default Proyectos;
