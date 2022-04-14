import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Vendas1649941117204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "vendas",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true
                },
                {
                    name: "id_cliente",
                    type: "integer",
                },
                {
                    name: "id_produto",
                    type: "integer",
                },
                {
                    name: "desc_venda",
                    type: "text"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            // CHAVES ESTRANGEIRAS
            foreignKeys: [
                {
                    name: "FKClienteVenda",
                    referencedTableName: "clientes",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_cliente"],
                },
                {
                    name: "FKProdutoVenda",
                    referencedTableName: "produtos",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_produto"],
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vendas");
    }

}
