import { hashSync } from "bcryptjs";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
import Contact from "./contact.entities";


@Entity("user")
class User{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({length: 100})
    fullName:string

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ length: 50, unique: true })
    phoneNumber: string;

    @Column({ length: 120 })
    password: string;

    @Column({default:true})
    isActive:boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
}


export default User