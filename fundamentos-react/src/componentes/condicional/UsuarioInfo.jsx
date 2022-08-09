import React from "react";
import If, {Else} from "./If";

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
        {/* <If test={usuario && usuario.nome}>

                Bem vindo <strong> { props.usuario.nome }</strong>!!

        </If> */}

         <If test={usuario && usuario.nome}>
            Bem vindo <strong> { props.usuario.nome }</strong>!!

            <Else>
            Bem vindo <strong> Amigão</strong>!!
            </Else>
        </If>
        </div>

        
    )
}