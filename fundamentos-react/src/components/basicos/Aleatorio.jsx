import React from 'react'

export default function Aleatorio(props) {

    const compAleatorio = Math.floor(Math.random() * props.max + props.min);
    return (
    <>
        
        <h2>Número aleatório máximo: </h2>
        {props.min}
        <h2>Número aleatório mínimo: </h2>
        {props.max}
        <h2>Número sorteado:</h2>
        <strong> {compAleatorio} </strong>
    </>
    )
}