import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entity/Cliente";

// UTILIZAR AS QUERIES DO TYPEORM
@EntityRepository(Cliente)
class ClienteRepository extends Repository<Cliente> {
}

export { ClienteRepository }