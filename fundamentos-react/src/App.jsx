import './App.css'

import React from 'react'


import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'

export default _ =>

    <div className='app'>
        <h1>Fundamentos React </h1>

        <div className='Cards'>

        <Card titulo="Componente com filhos">
            <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Ana"></FamiliaMembro>
            <FamiliaMembro nome="Gustavo"></FamiliaMembro>
            </Familia>
        </Card>


        <Card titulo="Desafio Aleatório">
            <Aleatorio />
        </Card>


        <Card titulo="Desafio Aleatório">
            <Fragmento />
        </Card>


        <Card titulo="Desafio Aleatório">
            <ComParametro
                titulo="Situação do aluno:"
                aluno="Maria"
                nota={9.9} />
        </Card>


        <Card titulo="Desafio Aleatório">
            <Primeiro />
        </Card>
        </div>

        
    </div>


