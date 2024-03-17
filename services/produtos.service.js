import { produtos } from "../db/produtos.js";


export const produtoService = {
    buscarProdutos: (req, reply)=>{
        return {
            name:'TV',
            qtd: produtos.length,
            data: produtos
        }
    },

};
