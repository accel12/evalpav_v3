import React, { useEffect, useState } from "react";
import ValorReducido from "../Components/ValorReducido";
import ValorReducidoCorregido from "../Components/ValorReducidoCorregido";
import ValorPCI from "../Components/ValorPCI";
import useDataExcel from "../hooks/useDataExcel";

const Exportacion = () => {
  const dataExcel = useDataExcel();
  const [formatoEvalpav, setFormatoEvalpav] = useState([]);
  useEffect(() => {
    dataExcel.forEach((items) => {
      items.forEach((item) => {
        console.log(item);
        setFormatoEvalpav((old) => [...old, item]);
      });
    });
  }, []);

  return (
    <div className=" px-5 text-white pb-2" style={{ minWidth: "1280px" }}>
      <div className=" w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 border-b border-black">
        <label className="font-bold">EXPORTACIÓN A FORMATO EVALPAV</label>
      </div>
      <div
        style={{
          display: "block",
          maxHeight: "500px",
          overflowY: "auto",
          marginBottom: "30px",
        }}
      >
        <table className="w-full" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th className="border border-black  bg-fondoHeader">
                PROGRESIVA INICIAL
              </th>
              <th className="border border-black  bg-fondoHeader">
                PROGRESIVA FINAL
              </th>
              <th className="border border-black  bg-fondoHeader">DAÑO</th>
              <th className="border border-black  bg-fondoHeader">SEVERIDAD</th>
              <th className="border border-black  bg-fondoHeader">X</th>
              <th className="border border-black  bg-fondoHeader">Y</th>
              <th className="border border-black  bg-fondoHeader">ANCHO</th>
              <th className="border border-black  bg-fondoHeader">LONGITUD</th>
              <th className="border border-black  bg-fondoHeader">
                ANCHO FISURA
              </th>
              <th className="border border-black  bg-fondoHeader">
                OBSERVACIÓN
              </th>
              <th className="border border-black  bg-fondoHeader">CARRIL</th>
              <th className="border border-black  bg-fondoHeader">
                ANCHO DE CARRIL
              </th>
              <th className="border border-black  bg-fondoHeader">
                INSPECCIONADO
              </th>
            </tr>
          </thead>
          <tbody>
            {formatoEvalpav.map((items) => (
              <tr className=" text-center">
                <td className="border border-black  bg-fondoItemsTabla">
                  {Math.round(items.ProgresivaInicial * 100) / 100}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {Math.round(items.ProgresivaFinal * 100) / 100}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Daño}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Severidad}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Xfalla}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Yfalla}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Ancho}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {Math.round(items.Longitud * 100) / 100}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {Math.round(items.Area * 100) / 100}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Comentarios}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Carril}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.AnchoDeCarril}
                </td>
                <td className="border border-black  bg-fondoItemsTabla">
                  {items.Inspeccionado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" w-full text-center justify-center mb-4 flex  bg-fondoPanel py-2 border-b border-black">
        <label className="font-bold">EXPORTACIÓN A FORMATO UNALPCI</label>
      </div>
      <div
        style={{
          display: "block",
          maxHeight: "500px",
          overflowY: "auto",
          marginBottom: "30px",
        }}
      >
        <table className="w-full" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th className="border border-black  bg-fondoHeader">ABS I</th>
              <th className="border border-black  bg-fondoHeader">ABS F</th>
              <th className="border border-black  bg-fondoHeader">UNIT</th>
              <th className="border border-black  bg-fondoHeader">FM1</th>
              <th className="border border-black  bg-fondoHeader">FH1</th>
              <th className="border border-black  bg-fondoHeader">FL2</th>
              <th className="border border-black  bg-fondoHeader">FM2</th>
              <th className="border border-black  bg-fondoHeader">FH2</th>
              <th className="border border-black  bg-fondoHeader">FL3</th>
              <th className="border border-black  bg-fondoHeader">FM3</th>
            </tr>
          </thead>
          <tbody>
            {formatoEvalpav.map((items) => (
              <tr className=" text-center">
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
                <td className="border border-black  bg-fondoItemsTabla">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exportacion;
