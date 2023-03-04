import { useState } from "react";

function FuncButton (props){
    return (
        <button onClick={props.action}>
            {props.text}
        </button>
    )
    // Hooks:
    /*
        useState = define y actualiza el estado del componente
        useEffect = ejecuta una accion tras detectar un cambio
    */
}

export default FuncButton;