import {verifyToken, decodeToken}  from "../services/jwt.service";
import { Request, Response } from "express";

const verifyRequest = (req: Request, res: Response, next: any) => {
    try {
        const token = req.headers.token
        if (token) {
            const tokenVerificado = verifyToken(token)
            console.log(tokenVerificado);
            if (tokenVerificado === true) {
                next()
            } else {
                return res.status(401).send({ message: "Invalid Token." })
            }
        } else {
            return res.status(400).send({ message: "Token not found." })
        }
    } catch (error) {
        return res.status(401).send({ message: "unauthenticated user." })
    }
}

export { verifyRequest }