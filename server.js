import Fastify from "fastify";
import { produtoService } from "./services/produtos.service.js";
import { connection } from "./db/db.js";

const fastify = Fastify({
  logger: false,
});

const PORT = 5000;

fastify.get("/", (req, reply) => {
  reply.send({
    code: 200,
    status: "UP",
    message: "Servidor Rodando!",
  });
});

connection();

fastify.get("/produtos", produtoService.buscarProdutos);

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error("Erro ao subuir o servidor", err);
    return;
  }
  console.log(`Server ins now listening on ${address}`);
});
