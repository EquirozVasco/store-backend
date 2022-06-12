import { User } from "../entities/User";
import { decodeToken } from "../services/jwt.service";
import { Request, Response } from "express";

const checkRole = (roles: any) => async (req: Request, res: Response, next: any) => {
    try {
        const token = req.headers.token     
        const tokenData = decodeToken(token)
        const userData = await User.findOne({relations:{role: true}, where: {id: tokenData.id}})        
        if (userData) {
            const userRol: string = userData.role.roleName
            let arreglo: string[] = [].concat(roles)
            const rolesFind = arreglo.includes(userRol)            
            if (rolesFind) {               
                next()
            }else{
                return res.json({ message: 'Unauthorized user' })
            }
        } else {
            return res.json({ message: 'User not found' })
        }
    } catch (error) {
        console.log(error);      
        if (error instanceof Error)       
        return res.json({ message: error.message })
    }
}

export {checkRole}