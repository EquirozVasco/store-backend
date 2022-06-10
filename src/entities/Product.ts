import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany } from "typeorm";
import { Purchase } from "./Purchase";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column()
    price: number

    @Column()
    quantity: number

    @ManyToMany(() => Purchase, (purchase) => purchase.products)
    purchase: Purchase[]

    @Column({ default: true })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date
}