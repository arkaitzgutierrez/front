import { useEffect,useState } from "react"
import { Header } from "./Header"

export default function Ranking(){
    let[resultado,setRes]=useState([])
   useEffect(()=>{
    fetch('http://localhost:3001/ranking')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        let puestos=[]
        res.sort((a,b)=>a.marca-b.marca);
        console.log(res)
        puestos=res.map(element => {
                return (
                <h4> {element.nombre} ha terminado la carrera con una marca de {element.marca}</h4>
                )
            });
        
           setRes(puestos)
});
    
   },[]) 
   

    return (<>
<Header PP="/paginaPrincipal" R="/seleccionCoche" PC="/pistaCarreras" MC="/meterCoche"/>
    {resultado}</>
    )
}