import { getCustomRepository } from "typeorm";
import { ProdutoRepository } from "../database/repositories/ProdutoRepository";

// ARQUIVO DO CRUD PRODUTO

interface IProdutoRequest {
  nome_produto: string;
  tipo_produto: string;
  quantidade: number;
}

class ProdutoService {

  async create({ nome_produto, tipo_produto, quantidade }: IProdutoRequest) {

    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = produtoRepository.create({ nome_produto, tipo_produto, quantidade });

    await produtoRepository.save(produto);

    return produto;
  }

  async list() {

    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.find();

    return produto;
  }

  async listById(id: number) {

    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.findOne(id);

    return produto;
  }

  async delete(id: number) {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.delete(id);

    return produto;
  }

}

export { ProdutoService }