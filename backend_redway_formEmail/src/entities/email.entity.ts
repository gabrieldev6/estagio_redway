import { Entity, Column,  PrimaryGeneratedColumn } from "typeorm";

@Entity("email")
export class Email {
    
    @PrimaryGeneratedColumn()
    id_email: number

    @Column({type: 'text'})
    email: string

}