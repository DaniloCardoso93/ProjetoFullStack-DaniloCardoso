import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActive1679584116743 implements MigrationInterface {
    name = 'AddIsActive1679584116743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
    }

}
