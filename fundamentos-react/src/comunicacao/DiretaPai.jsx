import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) =>{
    return(
        <div>
            <DiretaFilho nome='Henrique' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Eric' idade={20} nerd={false}></DiretaFilho>
        </div>
    )
}