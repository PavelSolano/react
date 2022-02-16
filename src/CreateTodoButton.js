import React from "react";
import './TodoCreateButton.css'


 
function  CreataTodoButton( props){

    const onClickButton = () => {
        alert('Aqui llamamos al modal')
    }

    return(

    <button className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
    )
};

export {CreataTodoButton};