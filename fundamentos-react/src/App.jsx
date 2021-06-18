import './App.css'
import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx"
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'


export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Contador #12" color="#B3B6B7">
                <Contador nroInicial={10}/>
            </Card>


            <Card titulo="Componente controlado #11" color="#F39C12">
                <Input></Input>
            </Card>


            <Card titulo="Comunicação Indireta #10" color="#F5B041">
                <IndiretaPai />
            </Card>


            <Card titulo="Comunicação DDireta #9" color="#F4D03F">
                <DiretaPai />
            </Card>


            <Card titulo="Renderização condicional #8" color="#7D3C98">
                <ParOuImpar number={parseInt(Math.random() * 20)} />
                {/* <UsuarioInfo usuario={{ nome: 'Fernando' }}/> */}
                <UsuarioInfo usuario={{ email: 'fe@gmail.com' }} />
            </Card>

            <Card titulo="Desafio repetição #7" color="#CACFD2">
                <center> <TabelaProdutos /> </center>
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


