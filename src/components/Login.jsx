import { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Mycontext";
import '../carpetaCss/PaginaPrincipal.css'

export default function Login(){
    let[nombre,setNombre]=useState("");
    let[password,setPassword]=useState("");
    let{jwt,setJwt}=useContext(Mycontext);

    let navigate=useNavigate();

    useEffect(()=>{
        if(jwt !== ""){
            
            navigate("/seleccionCoche")
        }
        console.log(jwt);
    },[jwt])


    function Logeate(){
        localStorage.setItem("usuario",nombre)
        let objeto={
            username:nombre,
            password
        }
        let data={
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(objeto)
        }
        
        fetch('http://localhost:3001/auth/login',data)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setJwt(res.acces_token)
        })

    }


    return (<>
     <div id="PaginaPrincipalBody">
        <div id="login">
    <input type="text" placeholder="name" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
    <button onClick={Logeate} >Logeate</button>
    </div>
    </div>
    </>)
}