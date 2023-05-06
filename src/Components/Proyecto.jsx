import React from "react";

const Proyecto = () => {
  return (
    <div className="relative">
      <div>
        <div>
          <div className="d-flex">
            <label>proyecto.Nombre</label>
          </div>
          <div>
            <label className="mr-3">proyecto.Tramo</label>
            <button>Agregar Carril</button>
          </div>
        </div>
        <div>carril 1</div>
      </div>
      <div className="d-block absolute top-0 right-3">
        <button>Editar</button>
        <button>Eliminar</button>
        <button>Compartir</button>
      </div>
    </div>
  );
};

export default Proyecto;
