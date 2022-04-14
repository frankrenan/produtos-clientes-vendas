import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Produtos1649936737951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "produtos",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                },
                {
                    name: "nome_produto",
                    type: "varchar",
                },
                {
                    name: "tipo_produto",
                    type: "varchar",
                },
                {
                    name: "quantidade",
                    type: "integer",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
