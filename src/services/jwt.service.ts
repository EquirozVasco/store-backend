import  jwt  from "jsonwebtoken";
import config from "../config";

const jwtKey = config.jwtKey

const createToken = (data: any) => {
    const token = jwt.sign (data, jwtKey, {expiresIn: "120h"})
    return token
}

const verifyToken = (token: any) => {
    try {
        return Object.keys(jwt.verify(token, jwtKey)).length > 0
    } catch (error) {
        return false
    }
}

const decodeToken = (token: any): any => {
    return jwt.verify(token, jwtKey)
}

export {createToken, verifyToken, decodeToken}