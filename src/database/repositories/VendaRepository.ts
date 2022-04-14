import { EntityRepository, Repository } from "typeorm";
import { Venda } from "../entity/Venda";

// UTILIZAR AS QUERIES DO TYPEORM
@EntityRepository(Venda)
class VendaRepository extends Repository<Venda> {
}

export { VendaRepository }