import { Request } from "@hapi/hapi";
import { ClienteService } from "../service/ClienteService";


class ClienteController {

  async postCliente(request: Request, h: Response) {
    const clienteService = new ClienteService();

    const nome_cliente = request.params.nome_cliente;

    const cliente = await clienteService.create({ nome_cliente });

    return cliente;
  }

  async getCliente(request: Request, h: Response) {
    const clienteService = new ClienteService();

    const clientes = await clienteService.list();

    return clientes;
  }

  async getClienteById(request: Request, h: Response) {
    const clienteService = new ClienteService();

    const id = request.params.id;

    const cliente = await clienteService.listById(id);

    return cliente;
  }

  async deleteCliente(request: Request, h: Response) {
    const clienteService = new ClienteService();

    const id = request.params.id;

    const cliente = await clienteService.delete(id);

    return cliente;
  }

}

export { ClienteController }