import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "esteban19",
    database: "store_test",
    synchronize: true,
    logging: true,
    entities: [],
})