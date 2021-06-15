import React from 'react'

export default props => {
const {min, max} = props;
const aleatorio = parseInt(Math.random() * (max - min) + min);
return(
    <div>
        <h2>Sorteio</h2>
        <p>Número mínimo {max} </p> 
        <p>Número máximo {min} </p> 
        <p>Número sorteado: { aleatorio }</p>
    </div>
)   
}
