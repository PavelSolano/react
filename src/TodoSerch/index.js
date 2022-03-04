import React from "react";
import './TodoSerch.css';

function TodoSerch({serchValue,setSerchValue}){

    // Estadoque Hook cambia cada vez que el usuario colocar un valor 
    // const [serchValue,setSerchValue] = React.useState('');
 //Función que ejecuta un console y cambio en el valor del estado useState 
    const onValueSerchChange = (even) =>{
        console.log(even.target.value)
        setSerchValue (even.target.value)
    }

    return[
        <input className="TodoSerch" 
        placeholder='Cebolla'
        value={serchValue}
        onChange = {onValueSerchChange}
        //prueba
        />,
       
    ];

}
export {TodoSerch};