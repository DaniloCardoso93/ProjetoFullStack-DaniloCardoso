import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveDeleteAt1679607015850 implements MigrationInterface {
    name = 'RemoveDeleteAt1679607015850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "deletedAt" TIMESTAMP`);
    }

}
