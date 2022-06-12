import config from "../config";
import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { Purchase } from "../entities/Purchase";
import { User } from "../entities/User";
import { Role } from "../entities/Role";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.host,
    port: 5432,
    username: config.userName,
    password: config.dbpassword,
    database: config.dbdatabase,
    synchronize: true,
    logging: true,
    entities: [Product, Purchase, User, Role],
})