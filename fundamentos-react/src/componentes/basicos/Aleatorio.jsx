import React from 'react'

export default _ => {

    
        const min = Math.ceil(0);
        const max = Math.floor(50);

        const numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
        return (
            <div>
                <h2>Número aleatório retornado é: {numeroAleatorio}</h2>
            
            </div>
        )
      

}