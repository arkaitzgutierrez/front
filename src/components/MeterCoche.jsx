import { useState, useContext } from "react";
import { Mycontext } from "../Mycontext";
import { Header } from "./Header";

export default function MeterCoche() {
  let [nom, setNombre] = useState("");
  let [año, setAño] = useState("");
  let [dispon, setDisponible] = useState("");
  let [col, setColor] = useState("");
  let [fot, setFoto] = useState("");
  let { jwt } = useContext(Mycontext);
  let [id, setId] = useState("");

  function MeterCoche() {
    let obj = {
      nombre:nom,
      ano:año,
      disponible:dispon,
      color:col,
      foto:fot
    };
    let data = {
      method: "POST",
      headers: {
        // 'Content:Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify(obj),
    };
    console.log(data)
    fetch("http://localhost:3001/coches", data)
      .then((res) => res.json())
      .then((res) => {
        alert(`Coche ${res.mensaje} introducido correctamente`);
      });
  }
  function BorrarCoche() {
    let obj = {
      id,
      nombre: "",
    };

    let data = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    fetch("http://localhost:3000/coches/" + id, data)
      .then((res) => res.json())
      .then((res) => {
        alert("borrado" + res);
      });
  }
  

  return (
    <>
      <div id="Meter">
        <Header
          PP="/paginaPrincipal"
          R="/ranking"
          SC="/seleccionCoche"
          PC="/pistaCarreras"
        />
        <input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          name="nombre"
          placeholder="nombre"
        />
        <input
          type="text"
          onChange={(e) => setAño(e.target.value)}
          name="año"
          placeholder="año"
        />
        <input
          type="text"
          onChange={(e) => setDisponible(e.target.value)}
          name="disponible"
          placeholder="disponible"
        />
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          name="color"
          placeholder="color"
        />
        <input
          type="text"
          onChange={(e) => setFoto(e.target.value)}
          name="foto"
          placeholder="foto"
        />
        <button onClick={MeterCoche}>Meter coche</button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          name="id"
          placeholder="nombre"
        />
        <button onClick={BorrarCoche}>Borrar coche metiendo su ID</button>
      </div>
      
    </>
  );
}
