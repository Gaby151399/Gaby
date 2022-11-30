import { useState } from "react";

function Calcul() {
const [ecran, setEcran]=useState("")

const handleClick=(e)=>{
 setEcran(ecran.concat(e.target.name))
}

const changeValue=(e)=>{
setEcran(e.target.value)
}
const clearAll=()=>{
    setEcran("")
}
const clear =()=>{
    setEcran(ecran.slice(0,-1))
}
const resultat=()=>{

    // eslint-disable-next-line no-eval
    try{setEcran(eval(ecran).toString());}
    catch(err){
        setEcran(Error)
    }
    
}

    return ( <div className=" d-flex justify-content-center align-items-center">
    <div className="calcul bg-dark rounded-3 p-3">
        <div className="ecran-card">
            <input className="ecran border-dark bg-secondary text-end fs-3 fw-bold text-light" value={ecran} onChange={changeValue}/>
        </div>
        <div className="button mt-2">
            <button className="clearAll bg-danger" onClick={clear}>Clear</button>
            <button className="clear bg-danger" onClick={clearAll}>C</button>
            <button className=" bg-info" name="/" onClick={handleClick}>&divide;</button>
            <button className="" name="7" onClick={handleClick}>7</button>
            <button className="" name="8" onClick={handleClick}>8</button>
            <button className="" name="9" onClick={handleClick}>9</button>
            <button className=" bg-info" name="*" onClick={handleClick}>x</button>
            <button className="" name="4" onClick={handleClick}>4</button>
            <button className="" name="5" onClick={handleClick}>5</button>
            <button className="" name="6" onClick={handleClick}>6</button>
            <button className=" bg-info" name="-" onClick={handleClick}>-</button>
            <button className="" name="1" onClick={handleClick}>1</button>
            <button className="" name="2" onClick={handleClick}>2</button>
            <button className="" name="3" onClick={handleClick}>3</button>
            <button className=" bg-info" name="+" onClick={handleClick}>+</button>
            <button className="" name="0" onClick={handleClick}>0</button>
            <button className=" bg-info" name="." onClick={handleClick}>,</button>
            <button className="res bg-info" name="=" onClick={resultat}>=</button>
        </div>
    </div>
    </div> );
}

export default Calcul;