import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Purchase extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    total: number

    @ManyToMany(() => Product, (product) => product.purchase)
    @JoinTable()
    products: Product[]

    @ManyToOne(() => User, (user) => user.purchase)
    user: User

    @CreateDateColumn()
    purchaseDate: Date

    @UpdateDateColumn()
    updatedAd: Date
}