import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Purchase } from "./Purchase";
import { Role } from "./Role";


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

    @ManyToOne(()=> Role, (rol) => rol.user)
    @JoinColumn()
    role: Role

    @OneToMany(() => Purchase, (purchase) => purchase.user)
    purchase: Purchase[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date
}