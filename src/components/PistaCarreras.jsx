import { Header } from "./Header";
import "../carpetaCss/PistaCarreras.css";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../Mycontext";
import EntornoPista from "./EntornoPista";
import Cronometro from "./Cronometro";

export default function PistaCarreras() {
  let { posicion, setPosicion } = useContext(Mycontext);
  
  let {direccion,setDireccion,transicion,setTransicion, incidente, setIncidente, marc, nombreCoche } = useContext(Mycontext);

  console.log(posicion)
  console.log(transicion);
  console.log(direccion)
  useEffect(() => {
    buscarposicion();
    
  }, []);
  
   

  useEffect(() => {
    
    if (transicion != "") {
      setPosicion(direccion);
    }
  }, [transicion]);
  useEffect(() => {
    if (posicion != "") {
      buscarposicion();
      document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight") {
            console.log(e.key)
          drch();
        } else if (e.key == "ArrowLeft") {
          izda();
          console.log(e.key)
        } else if (e.key == "ArrowUp") {
          arriba();
          console.log(e.key)
        } else if (e.key == "ArrowDown") {
          abajo();
           console.log(e.key)
        } else {
          console.log("tecla", e.key);
        }
      },true);
      
    }
  }, [posicion]);

  function limpiarYcambiar() {
    setTransicion(posicion);
  }
  function buscarposicion() {
    fetch("http://localhost:3001/Posiciones/" + posicion)
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0].direccion);
        setDireccion(res[0].direccion);
      });
  }

  function drch() {
    if (
      posicion === "d" ||
      posicion === "e" ||
      posicion === "l" ||
      posicion === "m"
    ) {
      setIncidente(
        <img
          id="accidente"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    } else if (
      posicion === "h" ||
      posicion === "g" ||
      posicion === "f" ||
      posicion === "p" ||
      posicion === "o" ||
      posicion === "n"
    ) {
      setIncidente(
        <img
          id="atropello"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    } else {
      limpiarYcambiar();
    }
  }
  function izda() {
    if (posicion === "a" || posicion === "h" || posicion === "i") {
      setIncidente(
        <img
          id="accidente"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    } else if (
      posicion === "b" ||
      posicion === "c" ||
      posicion === "d" ||
      posicion === "j" ||
      posicion === "k" ||
      posicion === "l"
    ) {
      setIncidente(
        <img
          id="atropello"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    } else if (posicion === "p") {
      setIncidente(
        <>
          <div id="fin">
            <div></div>
            <h3>Comprueba tu puesto en el Ranking</h3>
            <div></div>
          </div>
        </>
      );

      let obj = {
        nombre: localStorage.getItem("usuario"),
        marca: marc,
        puesto: "implementar",
        coche: nombreCoche,
      };
      console.log(obj);
      let data = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      };
      fetch("http://localhost:3001/Ranking", data)
        .then((res) => res.json())
        .then((res) => {});
    } else {
      limpiarYcambiar();
    }
  }
  function arriba() {
    if (posicion === "e" || posicion === "i" || posicion === "m") {
      setIncidente(
        <img
          id="atropello"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    } else {
      setIncidente(
        <img
          id="accidente"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    }
  }
  function abajo() {
    if (posicion === "d" || posicion === "h" || posicion === "l") {
      limpiarYcambiar();
    } else {
      setIncidente(
        <img
          id="accidente"
          src="https://previews.123rf.com/images/iimages/iimages1307/iimages130700309/20727608-ilustraci%C3%B3n-de-un-accidente-de-coche-en-la-carretera-con-un-gran-%C3%A1rbol.jpg"
        />
      );
    }
  }
  function cronometro() {
    return <Cronometro />;
  }

  return (
    <>
      <Header
        PP="/paginaPrincipal"
        R="/ranking"
        SC="/seleccionCoche"
        MC="/meterCoche"
      />
      <div id="mandos">
        <button id="izquierda" onClick={izda}>
          <img
            id="izda"
            src="https://previews.123rf.com/images/valentint/valentint1610/valentint161001524/63495761-icono-de-la-flecha-izquierda-bot%C3%B3n-de-internet-sobre-fondo-blanco-.jpg"
            alt=""
          />
        </button>
        <button id="arriba" onClick={arriba} className="boton">
          <img
            id="arri"
            src="https://previews.123rf.com/images/maxsim/maxsim1404/maxsim140400038/27786657-bot%C3%B3n-de-flecha-hacia-arriba-icono-naranja.jpg"
            alt=""
          />
        </button>
        <button id="derecha" onClick={drch} className="boton">
          <img
            id="drch"
            src="https://c8.alamy.com/compes/e78fxe/boton-play-azul-e78fxe.jpg"
            alt=""
          />
        </button>
        <button id="abajo" onClick={abajo} className="boton">
          <img
            id="abaj"
            src="https://previews.123rf.com/images/maxsim/maxsim1308/maxsim130800163/21317238-bot%C3%B3n-abajo-flecha-naranja-icono.jpg"
            alt=""
          />
        </button>
      </div>

      {incidente == null ? <EntornoPista /> : incidente}
      <Cronometro />
    </>
  );
}
