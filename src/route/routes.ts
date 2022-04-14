import { ClienteController } from "../controller/ClienteController";
import { ProdutoController } from "../controller/ProdutoController";
import { VendaController } from "../controller/VendaController";

const clienteController = new ClienteController();
const produtoController = new ProdutoController();
const vendaController = new VendaController();

const router = [
  // GET
  { method: "GET", path: "/produtos", handler: produtoController.getProduto },
  { method: "GET", path: "/clientes", handler: clienteController.getCliente },
  { method: "GET", path: "/vendas", handler: vendaController.getVenda },

  // GET BY ID
  { method: "GET", path: "/produtos/{id}", handler: produtoController.getProdutoById },
  { method: "GET", path: "/clientes/{id}", handler: clienteController.getClienteById },
  { method: "GET", path: "/vendas/{id}", handler: vendaController.getVendaById },

  // POST
  { method: "POST", path: "/produtos/{nome_produto}/{tipo_produto}/{quantidade}", handler: produtoController.postProduto },
  { method: "POST", path: "/clientes/{nome_cliente}", handler: clienteController.postCliente },
  { method: "POST", path: "/vendas/{desc_venda}/{id_produto}/{id_cliente}", handler: vendaController.postVenda },

  // DELETE
  { method: "DELETE", path: "/produtos/{id}", handler: produtoController.deleteProduto },
  { method: "DELETE", path: "/clientes/{id}", handler: clienteController.deleteCliente },
  { method: "DELETE", path: "/vendas", handler: vendaController.deleteVenda },


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