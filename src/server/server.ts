import Hapi from "@hapi/hapi";
import "dotenv/config";
import "../database";
import { router } from "../route/routes";

// STARTANDO A APLICAÇÃO NA PORTA 8000.
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8000,
    // host: process.env.HOST || 'localhost'
  });

  server.route(router);

  await server.start();

  console.log("Servidor executando na porta: %s", server.info.uri);
};

// CASO DE ERRO OU FALHA. EXIBIR LOG.
process.on("unhandledRejection", (err: any) => {
  console.log(err);
  process.exit(1);
})

// EXPORTANDO A FUNÇÃO PARA SER CHAMADO NA APP.JS
export { init }