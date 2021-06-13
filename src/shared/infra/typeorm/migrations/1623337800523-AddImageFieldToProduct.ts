import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddImageFieldToProduct1623337800523 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('products', 'image');
  }
}

