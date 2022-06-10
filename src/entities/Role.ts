import { userInfo } from "os";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    roleName: string

    @OneToMany(() => User, (user) => user.role)
    user: User[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date
}