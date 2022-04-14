import { Request } from "@hapi/hapi";
import { VendaService } from "../service/VendaService";


class VendaController {

  async postVenda(request: Request, h: Response) {
    const vendaService = new VendaService();

    const desc_venda = request.params.desc_venda;
    const id_produto = request.params.id_produto;
    const id_cliente = request.params.id_cliente;

    const venda = await vendaService.create({ desc_venda, id_cliente, id_produto });

    return venda;
  }

  async getVenda(request: Request, h: Response) {
    const vendaService = new VendaService();

    const vendas = await vendaService.list();

    return vendas;
  }

  async getVendaById(request: Request, h: Response) {
    const vendaService = new VendaService();

    const id = request.params.id;

    const venda = await vendaService.listById(id);

    return venda;
  }

  async deleteVenda(request: Request, h: Response) {
    const vendaService = new VendaService();

    const id = request.params.id;

    const venda = await vendaService.delete(id);

    return venda;
  }

}

export { VendaController }