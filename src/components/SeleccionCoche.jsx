import { useContext, useEffect, useState } from "react";
import { Header } from "./Header";
import "../carpetaCss/seleccionCoches.css"
import PaginaPrincipal from "./PaginaPrincipal";
import { Mycontext } from "../Mycontext";
import { useNavigate } from "react-router-dom";

export default function SeleccionCoche(){
    let[coches,setCoches]=useState([])
    let{setDireccion,setTransicion,coche,posicion,setCoche,setPosicion,incidente,setIncidente,setNombreCoche}=useContext(Mycontext)
    let[prueba,setPrueba]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
        fetch('http://localhost:3001/coches')
        .then(res=>res.json())
        .then(res=>{
            let variable=[]
            variable=[...res]
            setCoches(variable)
        })
    },[])

    

    
    function CocheElegido(event){
        setCoche(event.target.align);
        setNombreCoche(event.target.alt);
        setPosicion("a");
        setDireccion("b");
        setTransicion("")
            setIncidente(null);
            navigate("/pistaCarreras")
                            
    }
    function definitivo(variable){
        setCoche(variable[0]);
        setPosicion(variable[1])
        
        }
    

    return (
        <>
        <Header PP="/paginaPrincipal" R="/ranking" PC="/pistaCarreras" MC="/meterCoche"/>
        <div id="listadoCoches">
        {coches.map((element) => {
           return (<div id="foto"><h2>{element.nombre}</h2>
            <button onClick={CocheElegido}> <img src={element.foto} alt={element.nombre} align={element.foto}/></button>
            </div> )
                })
         }
         </div>
        </>
        ) 
}