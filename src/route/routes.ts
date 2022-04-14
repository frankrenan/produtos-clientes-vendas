
const router = [
  // GET
  { method: "GET", path: "/produtos", handler: () => { const mensagem = { mensagem: "GET-PRODUTOS" }; return mensagem } },
  { method: "GET", path: "/clientes", handler: () => { const mensagem = { mensagem: "GET-CLIENTES" }; return mensagem } },
  { method: "GET", path: "/vendas", handler: () => { const mensagem = { mensagem: "GET-VENDAS" }; return mensagem } },
  // POST
  { method: "POST", path: "/produtos", handler: () => { const mensagem = { mensagem: "POST-PRODUTOS" }; return mensagem } },
  { method: "POST", path: "/clientes", handler: () => { const mensagem = { mensagem: "POST-CLIENTES" }; return mensagem } },
  { method: "POST", path: "/vendas", handler: () => { const mensagem = { mensagem: "POST-VENDAS" }; return mensagem } },
  // DELETE
  { method: "DELETE", path: "/produtos", handler: () => { const mensagem = { mensagem: "DELETE-PRODUTOS" }; return mensagem } },
  { method: "DELETE", path: "/clientes", handler: () => { const mensagem = { mensagem: "DELETE-CLIENTES" }; return mensagem } },
  { method: "DELETE", path: "/vendas", handler: () => { const mensagem = { mensagem: "DELETE-VENDAS" }; return mensagem } },
  // PUT
  { method: "PUT", path: "/produtos", handler: () => { const mensagem = { mensagem: "PUT-PRODUTOS" }; return mensagem } },
  { method: "PUT", path: "/clientes", handler: () => { const mensagem = { mensagem: "PUT-CLIENTES" }; return mensagem } },
  { method: "PUT", path: "/vendas", handler: () => { const mensagem = { mensagem: "PUT-VENDAS" }; return mensagem } },

  // ROTAS NÃO EXISTENTES
  {
    method: "*",
    path: "/{any*}",
    handler: () => {
      const mensagem = {
        mensagem: "Ops, esta página não existe !",
      };
      return mensagem;
    },
  },
];

export { router };