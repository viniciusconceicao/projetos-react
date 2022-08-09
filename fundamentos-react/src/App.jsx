import './App.css'

import React from 'react'


import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos'

export default _ =>

    <div className='app'>
        <h1>Fundamentos React </h1>

        <div className='Cards'>


        <Card titulo="Desafio Produtos">
            <TabelaProdutos></TabelaProdutos>
        </Card>



        <Card titulo="Repetição">
            <ListaAlunos></ListaAlunos>
        </Card>



        <Card titulo="Componente com filhos">
            <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Ana"></FamiliaMembro>
            <FamiliaMembro nome="Gustavo"></FamiliaMembro>
            </Familia>
        </Card>


        <Card titulo="Desafio Aleatório">
            <Aleatorio />
        </Card>


        <Card titulo="Fragmento">
            <Fragmento />
        </Card>


        <Card titulo="Com Parametros">
            <ComParametro
                titulo="Situação do aluno:"
                aluno="Maria"
                nota={9.9} />
        </Card>


        <Card titulo="Primeiro">
            <Primeiro />
        </Card>
        </div>

        
    </div>


