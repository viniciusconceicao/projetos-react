import React from 'react'

import produtos from "../data/Produtos"
import './TabelaProdutos.css'

export default props =>{
    const listProdutos = produtos.map((produto) =>{
        return (
            <li key={produto.idProduto}>
                {produto.idProduto} {produto.nomeProduto} {produto.Preco}
            </li>
        )
    }
    )


    function getLinhas(){
        return produtos.map((produto, i) =>{
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.idProduto}</td>
                    <td>{produto.nomeProduto}</td>
                    <td>{produto.Preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table border="1" style={{listStyle: "none"}}>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>

                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}