import PaginaPrincipal from './components/PaginaPrincipal';
import { useState } from 'react';
import { BrowserRouter,Navigate, Routes,Route } from 'react-router-dom';
import './App.css';
import Registro from './components/Registro';
import Login from './components/Login';
import ListaCoches from './components/ListaCoches';
import { Mycontext } from './Mycontext';
import SeleccionCoche from './components/SeleccionCoche';
import Ranking from './components/Ranking';
import PistaCarreras from './components/PistaCarreras';
import MeterCoche from './components/MeterCoche';


function App() {
  let[jwt,setJwt]=useState("")
  let[pagina,setPagina]=useState("")
  let[posicion,setPosicion]=useState("a")
  let[direccion,setDireccion]=useState("b")
  let[transicion,setTransicion]=useState("")
  let[coche,setCoche]=useState("")
  let[incidente,setIncidente]=useState(null)
  let[marc,setMarca]=useState(0)
  let[nombreCoche,setNombreCoche]=useState("")

  
  return (
    <div className="App">
      <Mycontext.Provider value={{direccion,setDireccion,transicion,setTransicion,nombreCoche,setNombreCoche,marc,setMarca,jwt,setJwt,pagina,setPagina,coche,setCoche,posicion,setPosicion,incidente,setIncidente}}>
      <BrowserRouter>
      <Routes>
        <Route path="/paginaPrincipal" element={<PaginaPrincipal/>} />
        <Route path="/seleccionCoche" element={<SeleccionCoche/> } />
        <Route path="/ranking" element={<Ranking/>} />
        <Route path="/pistaCarreras" element={<PistaCarreras/>} />
        <Route path="/" element={<Navigate to="/paginaPrincipal"/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/listaDeCoches" element={<ListaCoches/>}/>
        <Route path="/meterCoche" element={<MeterCoche/>}/>
      </Routes>
      </BrowserRouter>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
