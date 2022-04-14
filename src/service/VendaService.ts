import { getCustomRepository } from "typeorm";
import { VendaRepository } from "../database/repositories/VendaRepository";

// ARQUIVO DO CRUD VENDA

interface IVendaRequest {
  desc_venda: string;
  id_cliente: number;
  id_produto: number;
}

class VendaService {

  async create({ desc_venda, id_cliente, id_produto }: IVendaRequest) {

    const vendaRepository = getCustomRepository(VendaRepository);

    const venda = vendaRepository.create({ desc_venda, id_cliente, id_produto });

    await vendaRepository.save(venda);

    return venda;
  }

  async list() {

    const vendaRepository = getCustomRepository(VendaRepository);

    const venda = await vendaRepository.find();

    return venda;
  }

  async listById(id: number) {

    const vendaRepository = getCustomRepository(VendaRepository);

    const venda = await vendaRepository.findOne(id);

    return venda;
  }

  async delete(id: number) {
    const vendaRepository = getCustomRepository(VendaRepository);

    const venda = await vendaRepository.delete(id);

    return venda;
  }

}

export { VendaService }