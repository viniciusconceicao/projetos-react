// Importando arquivos do node_modules
import ReactDOM from 'react-dom'
import React from 'react'

// Importando arquivos criados
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div id="app" >
        
        <Primeiro></Primeiro>

        <ComParametro 
        titulo="Segundo Componente"
        subtitulo="Muito legal!!"
         ></ComParametro>

    </div>,
    document.getElementById('root')
    )