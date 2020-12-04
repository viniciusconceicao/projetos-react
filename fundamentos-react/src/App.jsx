import React from 'react'


// Importando arquivos criados
import './index.css'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

export default _ =>

    <div className="app" >
        <h1>Fundamentos React 2 </h1>

        <div className="cards">

            {/* <Card titulo="#5 - Componente com filhos"  color="#9FE2BF" >

                <Familia />

            </Card> */}


            <Card titulo="#4 - Desafio aleatório"  color="#FA6900" >

                <Aleatorio min={1} max={60} />

            </Card>


            <Card titulo="#3 - Fragmento" color="#E94C6F" >

                <Fragmento />

            </Card>


            <Card titulo="#2 - Com Parametro" color="#DE3163" >

                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />

            </Card>
            <Card titulo="#1 - Primeiro Componente" color="#CCCCFF" >

                <Primeiro></Primeiro>

            </Card>
        </div>

    </div>

