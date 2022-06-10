import { compareHash } from "../services/bcrypt.service";
import { createToken, verifyToken, decodeToken } from "../services/jwt.service";
import { User } from "../entities/User";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    let response: any = {}
    try {
        const { userName, password } = req.body
        const user = await User.findOne({ relations: { role: true }, where: { userName: userName } })
        const userdata = {
            id: user?.id,
            name: user?.name,
            role: user?.role.roleName
        }
        console.log(userdata);
        
        if (user) {
            const checkPassword = compareHash(password, user.password)
            if (checkPassword == true) {
                const token = createToken(userdata)
                response.info = { userdata, token }
                res.send(response)
            } else {
                response.message = "user or password incorrect"
                res.send(response)
            }
        } else {
            response.message = "User does not exist."
            res.send(response)
        }
    } catch (error) {
        console.error(error);
        response.message = "An error has occurred while logging in."
        response.info = error
        res.status(500).send(response)
    }
}


const validateToken = (req: Request, res: Response) => {
    let response: any = {}
    try {
        const token = req.headers.token
        let correctToken = decodeToken(token)
        if (correctToken) {
            response.message = "Verified user."
            response.info = correctToken
            res.send(response)
        } else {
            response.message = "Unverified user."
            res.status(401).send(response)
        }
    } catch (error) {
        console.error(error);
        response.message = "An error has occurred"
        response.info = error
        res.status(500).send(response)
    }
}

export default { login, validateToken }