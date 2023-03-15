import '../carpetaCss/Header.css'
import { Link} from 'react-router-dom'
import foto from "../fotos/logosinfondorecortado(1).png"


export function Header({PP,R,PC,SC,MC}){
    const ruta=window.location.href
    
if(ruta==="http://localhost:3000/seleccionCoche"){
    return (<>
        <div id="header">
        <div id="logo">
          <img id="imagen" src={foto} alt="" />
      </div>
      </div>
      <ul>
      <li>
        <Link to={MC}>Meter Coche</Link></li>
        <li><Link to={PC}>Pista de carreras</Link></li>
        <li><Link to={R}>Ranking</Link></li>       
        <li><Link to={PP}> Pagina principal</Link></li> 
     </ul>
      </>
    )
}else if(ruta==="http://localhost:3000/ranking"){
    return(<>
        <div id="header">
        <div id="logo">
                  <img id="imagen" src={foto} alt="" />
        </div>
       <li id="arriba"> <Link id="link"to={PP}> Pagina principal</Link></li>
      </div>
      <ul>
        
        <li><Link to={PC}>Pista de carreras</Link></li>
        <li><Link to={SC}>Seleccion de Coche</Link></li>
        <li><Link to={MC}>Meter Coche</Link></li>
      </ul>
      <p>Nuestro Ranking</p>
      </>
    )
}else if(ruta==="http://localhost:3000/pistaCarreras"){
    return(<>
        <div id="header">
        <div id="logo">
          <img id="imagen" src={foto} alt="" />
      </div>
      <li id="arriba"> <Link id="link"to={PP}> Pagina principal</Link></li>
      </div>
      <ul>
        <li><Link to={R}>Ranking</Link></li>
        <li><Link to={SC}>Seleccion de Coche</Link></li>
        <li><Link to={MC}>Meter Coche</Link></li>
      </ul>
      <p>Comienza la carrera</p>
      </>
    )
}else if(ruta==="http://localhost:3000/meterCoche"){
    return(<>
        <div id="header">
        <div id="logo">
          <img id="imagen" src={foto} alt="" />
      </div>
      <li id="arriba"> <Link id="link"to={PP}> Pagina principal</Link></li>
      </div>
      <ul>
      <li><Link to={SC}>Seleccion de Coche</Link></li>
      <li><Link to={PC}>Pista de carreras</Link></li>
        <li><Link to={R}>Ranking</Link></li>      
      </ul>
      <p>Gestiona la lista de Coches</p>
      </>
    )
}
}