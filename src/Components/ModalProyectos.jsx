import React, { useState } from "react";
import { useRef } from "react";

const ModalProyectos = ({ setShowModal }) => {
  const [listado, setListado] = useState([]);
  const cbCarril = useRef();
  const cbPavimento = useRef();
  const agregarAListado = () => {
    const nombre = cbCarril.current.value + "-" + cbPavimento.current.value;
    setListado([...listado, nombre]);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">Crear Proyecto</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: 89 }}>
                    Proyecto
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de proyecto"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: 89 }}>
                    Tramo
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del tramo"
                  aria-describedby="basic-addon1"
                />
              </div>
              {/* <div className="flex mb-3">
                <div className="mr-3">
                  <label>Carril:</label>
                  <select className="form-select" ref={cbCarril}>
                    <option disabled selected defaultValue={"default"}>
                      -- select an option --
                    </option>
                    <option value="DERECHO">DERECHO</option>
                    <option>IZQUIERDO</option>
                    <option>CENTRO</option>
                  </select>
                </div>
                <div className="mr-3">
                  <label>Pavimento:</label>
                  <select className="form-select" ref={cbPavimento}>
                    <option disabled selected defaultValue={"default"}>
                      -- select an option --
                    </option>
                    <option value="FLEXIBLE">FLEXIBLE</option>
                    <option>RIGIDO</option>
                    <option>AFIRMADO</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    className="btn btn-primary"
                    style={{ height: 38 }}
                    onClick={agregarAListado}
                  >
                    +
                  </button>
                </div>
              </div> */}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
              <button
                className="bg-fondoAlterno text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalProyectos;
