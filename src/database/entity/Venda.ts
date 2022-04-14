import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

@Entity("vendas")
class Venda {

  // ID_GENERATE
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  desc_venda: string;

  // RELAÇÃO DO CLIENTE COM VENDA
  @Column()
  id_cliente: number;

  @JoinColumn({ name: "id_cliente" })
  @ManyToOne(() => Cliente)
  idCliente: Cliente;

  // RELAÇÃO DO PRODUTO COM VENDA
  @Column()
  id_produto: number;

  @JoinColumn({ name: "id_produto" })
  @ManyToOne(() => Produto)
  idProduto: Produto;

  // DATA DA CRIAÇÃO
  @CreateDateColumn()
  created_at: Date;

}

export { Venda }