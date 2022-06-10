import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Purchase } from "./Purchase";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    money: number

    @Column({unique: true})
    userName: string

    @Column()
    password: string
    
    @Column({ default: true })
    active: boolean

    @OneToMany(() => Purchase, (purchase) => purchase.user)
    purchase: Purchase[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date
}