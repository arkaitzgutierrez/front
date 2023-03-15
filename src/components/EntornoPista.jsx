import { useContext } from "react"
import { Mycontext } from "../Mycontext"

export default function EntornoPista(){

    let{coche,posicion}=useContext(Mycontext)

    return <>
    <div id="Entorno_pista">
        <div className="ida">
          <div  className="pista">
            <div id="a"className="vederecha">
                {posicion==="a"? <img id="encarrera" src={coche}/>:<></>}
                
            </div>
          </div>
          <div  className="pista">
            <div id="b" className="vederecha">
            {posicion==="b"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div  className="pista">
            <div id="c"className="vederecha">
            {posicion==="c"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div  id="curvad"className="pista">
            <div id="d"className="vueltaderecha">
            {posicion==="d"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
        </div>
        <div className="retorno">
          <div id="curvae" className="pista">
            <div id="e" className="veizda ">
            {posicion==="e"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div  className="pista">
            <div id="f" className="veizda ">
            {posicion==="f"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div  className="pista">
            <div id="g" className="veizda ">
            {posicion==="g"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div id="curvah" className="pista">
            <div id="h" className="vueltaizda">
            {posicion==="f"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
        </div>
        <div className="ida">
          <div id="curvai" className="pista">
            <div id="i" className="vederecha">
            {posicion==="i"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div  className="pista">
            <div id="j" className="vederecha">
            {posicion==="j"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div   className="pista">
            <div id="k" className="vederecha">
            {posicion==="k"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
          <div id="curval" className="pista">
            <div id="l" className="vueltaderecha">
            {posicion==="l"? <img id="encarrera" src={coche}/>:<></>}
            </div>
          </div>
        </div>
        <div className="retorno">
           <div id="curvam" className="pista">
              <div id="m" className="veizda">
              {posicion==="m"? <img id="encarrera" src={coche}/>:<></>}
              </div>
            </div>
            <div  className="pista">
              <div id="n" className="veizda">
              {posicion==="n"? <img id="encarrera" src={coche}/>:<></>}
              </div>
            </div>
            <div  className="pista">
              <div id="o" className="veizda">
              {posicion==="o"? <img id="encarrera" src={coche}/>:<></>}
              </div>
            </div>
            <div  className="pista">
              <div id="p" className="veizda">
              {posicion==="p"? <img id="encarrera" src={coche}/>:<></>}
              </div>
            </div>
         </div>
      </div></>
}