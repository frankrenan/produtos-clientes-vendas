import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../database/repositories/ClienteRepository";

// ARQUIVO DO CRUD CLIENTE

interface IClienteRequest {
  nome_cliente: string;
}

class ClienteService {

  async create({ nome_cliente }: IClienteRequest) {

    const clienteRepository = getCustomRepository(ClienteRepository);

    const cliente = clienteRepository.create({ nome_cliente });

    await clienteRepository.save(cliente);

    return cliente;
  }

  async list() {

    const clienteRepository = getCustomRepository(ClienteRepository);

    const cliente = await clienteRepository.find();

    return cliente;
  }

  async listById(id: number) {

    const clienteRepository = getCustomRepository(ClienteRepository);

    const cliente = await clienteRepository.findOne(id);

    return cliente;
  }

  async delete(id: number) {
    const clienteRepository = getCustomRepository(ClienteRepository);

    const cliente = await clienteRepository.delete(id);

    return cliente;
  }

}

export { ClienteService }