import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn,
    ManyToOne
 } from "typeorm"
import User from "./user.entities";


@Entity("contact")
class Contact{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length: 100})
    fullName:string

    @Column({ length: 50})
    email: string;

    @Column({ length: 50 })
    phoneNumber: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}

export default Contact