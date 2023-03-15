import { Link } from "react-router-dom"
import '../carpetaCss/PaginaPrincipal.css'

export default function PaginaPrincipal(){

    return (
        <div id="PaginaPrincipalBody">
    <ul>
        <li><Link to="/registro"> Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/ListaDeCoches">Lista de Coches</Link></li>
        
        </ul>
        <main>
      <div>
        <h1>Instrucciones</h1>
        <ol>
            <li>El primer paso es registrarse. Tan solo es necesario Nombre y contraseña y pinchar en registrar.</li>
            <li>El segundo paso es repetir el Nombre y contraseña para entrar en la aplicación.</li>
            <li>Esto te dirigirá a la página de configuración donde podras elegir un coche.</li>
            <li>Y a partir de aquí podrás jugar con ese coche en la página Pista de carreras.</li>
            <li>Podrás ver el Ranking histórico de todos los que han jugado.</li>
        </ol>
      </div>
      </main>
      </div>)
 
}