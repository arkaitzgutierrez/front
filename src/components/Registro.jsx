
import { useState } from "react"
import '../carpetaCss/PaginaPrincipal.css'

export default function Registro(){
    let[nombre,setNombre]=useState("")
    let[password,setPassword]=useState("")
    

    function Registrar(){

        let objeto={
            username:nombre,
            password
        }
        let data ={
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(objeto)}
        
        fetch('http://localhost:3001/users',data)
        .then(res=>res.json())
        .then((res)=>{
            alert("Te has registrado correctamente")
        })
    }

    return (<>
    <div id="PaginaPrincipalBody">
        <div id="login">
    <input type="text" placeholder="name" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
    <button onClick={Registrar} >Registrate</button>
    </div>
    </div>
    </>)
}