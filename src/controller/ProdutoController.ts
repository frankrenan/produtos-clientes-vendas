import { Request } from "@hapi/hapi";
import { ProdutoService } from "../service/ProdutoService";


class ProdutoController {

  async postProduto(request: Request, h: Response) {
    const produtoService = new ProdutoService();

    const nome_produto = request.params.nome_produto;
    const tipo_produto = request.params.tipo_produto;
    const quantidade = request.params.quantidade;

    const produto = await produtoService.create({ nome_produto, tipo_produto, quantidade });

    return produto;
  }

  async getProduto(request: Request, h: Response) {
    const produtoService = new ProdutoService();

    const produtos = await produtoService.list();

    return produtos;
  }

  async getProdutoById(request: Request, h: Response) {
    const produtoService = new ProdutoService();

    const id = request.params.id;

    const produto = await produtoService.listById(id);

    return produto;
  }

  async deleteProduto(request: Request, h: Response) {
    const produtoService = new ProdutoService();

    const id = request.params.id;

    const produto = await produtoService.delete(id);

    return produto;
  }

}

export { ProdutoController }