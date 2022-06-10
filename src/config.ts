import dotenv from "dotenv";
dotenv.config();

export default {
    userName: process.env.USER,
    dbpassword: process.env.PASSWORD,
    dbdatabase: process.env.DATABASE,
}