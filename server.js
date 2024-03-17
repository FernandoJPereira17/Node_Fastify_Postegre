import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'

const fastify = Fastify({
    logger: true

})

const PORT = 5000

fastify.get('/', (req, reply) => {
    reply.send('Servidor rotando - Fastify')

})

fastify.get('/produtos', produtoService.buscarProdutos);


fastify.listen({port: PORT}, (err, address)=>{
    if(err){
        console.error('Erro ao subuir o servidor', err)
        return;
    }
    console.log(`Server ins now listening on ${address}`);
})

