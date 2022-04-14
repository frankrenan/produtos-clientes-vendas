import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("clientes")
class Cliente {
  // ID_GENERATE
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  nome_cliente: string;

  // DATA DA CRIAÇÃO
  @CreateDateColumn()
  created_at: Date;

  // DATA DA ATUALIZAÇÃO
  @UpdateDateColumn()
  updated_at: Date;
}

export { Cliente }