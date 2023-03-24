import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactRemoveUnique1679602244979 implements MigrationInterface {
    name = 'ContactRemoveUnique1679602244979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_eff09bb429f175523787f46003b"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_7e48813080c4f2ce7ffaca44e42"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_7e48813080c4f2ce7ffaca44e42" UNIQUE ("phoneNumber")`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email")`);
    }

}
