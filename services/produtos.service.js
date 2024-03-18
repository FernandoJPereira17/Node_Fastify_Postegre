import { produtos } from "../db/produtos.js";


export const produtoService = {
    buscarProdutos: (req, reply)=>{
        return {

            code:200,
            status: "UP",
            message: "Servidor Rodando!"

        }
    },
};
