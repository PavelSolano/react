import React from "react";
import './TodoSerch.css';

function TodoSerch(){

    const onValueSerchChange = (even) =>{
        console.log(even.target.value)
    }

    return(
        <input className="TodoSerch" 
        placeholder='Cebolla'
        onChange = {onValueSerchChange}
        //prueba
        />
    );

}
export {TodoSerch};