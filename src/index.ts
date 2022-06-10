import "reflect-metadata"

import app from "./app";
import { AppDataSource } from "./services/db";

async function main() {
    try {
        await AppDataSource.initialize()
        console.log("DB connected");
        app.listen(3000)
        console.log('Server is listening on port 3000');
    } catch (error) {
        console.log(error);

    }
}

main();

