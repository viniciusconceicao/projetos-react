import './App.css'
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'


export default () =>(
    <div className="App">

    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card titulo="Desafio repetição #7" color="#17202A">
            <TabelaProdutos/>
    </Card>   


    <Card titulo="Repetição #6" color="#17202A">
            <ListaAlunos></ListaAlunos>
    </Card>            


        <Card titulo="Componentes com filhos #5" color="#117864">
            <Familia sobrenome="Ferreira">

                <FamiliaMembro nome="Pedro"></FamiliaMembro>

            </Familia>
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
)

  
