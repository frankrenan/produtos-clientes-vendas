import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../entity/Produto";

// UTILIZAR AS QUERIES DO TYPEORM
@EntityRepository(Produto)
class ProdutoRepository extends Repository<Produto> {
}

export { ProdutoRepository }