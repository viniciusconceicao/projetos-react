import './App.css'
import React from 'react'

import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'


export default _ =>

    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="Componentes com filhos #5" color="#117864">
                <Familia nome="Ferreira"/>
            </Card>


            <Card titulo="Desafio aleatório #4" color="#21618C">
                <Aleatorio min={0} max={50} />
            </Card>


            <Card titulo="Fragmento #3" color="#85C1E9">
                <Fragmento />
            </Card>


            <Card titulo="Com parâmetro #2" color="#F8C471">
                <ComParametro
                    titulo="Situação do aluno:"
                    aluno="Pedro Silva"
                    nota={6}
                />
            </Card>


            <Card titulo="Primeiro #1" color="#935116">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
