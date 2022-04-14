import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("produtos")
class Produto {

  // ID_GENERATE
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  nome_produto: string;

  @Column()
  tipo_produto: string;

  @Column()
  quantidade: number;

  // DATA DA CRIAÇÃO
  @CreateDateColumn()
  created_at: Date;

  // DATA DA ATUALIZAÇÃO
  @UpdateDateColumn()
  updated_at: Date;

}

export { Produto }