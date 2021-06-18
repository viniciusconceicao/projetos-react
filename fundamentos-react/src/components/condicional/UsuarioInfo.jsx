import React from 'react'
import If, { Else } from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem Vindo(a) <strong>{props.usuario.nome}</strong>!

                <Else test={!usuario || !usuario.nome}>
                    Seja Bem Vindo(a) <strong> Amigão </strong>
                </Else>
            </If>
        </div>
    )
}