import "../../styles/semaforito.css"
import React, {useState} from "react"

function Semaforo () {

    const [luzRed,setLuzRed]= useState("");
    const [luzYellow,setLuzYellow]= useState("");
    const [luzGreen,setLuzGreen]= useState("");

    function Luz (boton){

        if( boton =="red"){
            setLuzRed("10px 5px 5px white")
            setLuzYellow("")
            setLuzGreen("")
        }

        if(boton =="yellow"){
            setLuzRed("")
            setLuzYellow("10px 5px 5px white")
            setLuzGreen("")
        }
           
        if(boton =="green"){
            setLuzRed("")
            setLuzYellow("")
            setLuzGreen("10px 5px 5px white")
        }
    }
return(
<div className="container">
    <div className="botones">
 <button className="red" type="button"onClick={() => Luz("red")}
 style={{boxShadow:luzRed}}>
 </button>
 <button className="yellow" type="button"onClick={() => Luz("yellow")}
 style={{boxShadow:luzYellow}}>
 </button>
 <button className="green" type="button"onClick={() => Luz("green")}
 style={{boxShadow:luzGreen}}>
 </button>
 </div>
</div>
);
}
export default Semaforo;