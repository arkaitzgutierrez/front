import '../carpetaCss/PaginaPrincipal.css'
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import '../carpetaCss/PaginaPrincipal.css'

export default function ListaCoches(){
    let[coches,setCoches]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/coches')
        .then(res=>res.json())
        .then(res=>{
            let variable=[]
            variable=[...res]
            setCoches(variable)
            console.log(coches)
        })

    },[])
    return (
        <div id="PaginaPrincipalBody">
    <ul>
        <li><Link to="/registro"> Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/paginaPrincipal">Pagina Principal</Link></li>
                
        </ul>
        {coches.map((element) => {
        return (<><h2>{element.nombre}</h2>
         <img src={element.foto} alt=""/>
         </> )
             })
      }
      </div>
      
      )
}