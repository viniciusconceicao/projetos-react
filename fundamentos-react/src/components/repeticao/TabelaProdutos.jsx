import React from 'react'

import produtos from "../data/Produtos"

export default props =>{
    const listProdutos = produtos.map((produto) =>{
        return (
            <li key={produto.idProduto}>
                {produto.idProduto} {produto.nomeProduto} {produto.Preco}
            </li>
        )
    }
    )

    return (
        <div>
            <table border="1" style={{listStyle: "none"}}>
                <thead>
                    <tr>Id</tr>
                    <tr>Nome</tr>
                    <tr>Preço</tr>
                </thead>

                <tbody>
                    <tr>{listProdutos}</tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}