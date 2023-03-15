import { useEffect, useState, useContext } from "react";
import { Mycontext } from "../Mycontext";

export default function Cronometro({data}) {
  let [s, setSegundo] = useState(0);
  let{marc,setMarca}=useContext(Mycontext)
  let [m, setMinuto] = useState(0);
  let [h, setHora] = useState(0);
  let { coche } = useContext(Mycontext);
  
  
    useEffect(() => {
        
        const interval=setInterval(()=>{
         setSegundo((s)=>s+1);
         setMarca((marc)=>marc+1);
     
        },1000);
    
         return ()=>clearInterval(interval)
       }, []);
       useEffect(()=>{
         if(s>59){
             setSegundo(0);
             setMinuto(1)
         }
       },[s])
  
    // clearInterval(interval)
  
  
  

  
//   function escribir() {
//     setInterval(setSegundo(s++),1000)
    
    // if (s > 59) {
    //   setMinuto(m + 1);
    //   setSegundo(0);
    // }
    // if (m > 59) {
    //   setHora(h + 1);
    //   setMinuto(0);
    // }
    // if (h > 24) {
    //   setHora(0);
    // }
  

  return (
    <p>
      {h}:{m}:{s}
    </p>
  );
}
