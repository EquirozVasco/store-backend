import { Request, Response } from "express";
import { Role } from "../entities/Role";

const createRole = async (req: Request, res: Response) => {
    try {
        const {roleName} = req.body
        console.log(roleName);
        
        if (roleName === "") {
            throw new Error("Please, fill the name");
        } else {
            const role = new Role()
            role.roleName = roleName
            
            await role.save()
            return res.json({ message: 'Role created successfully.', role })
        }
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await Role.find()
        return res.json({ message: 'Roles consulted successfully.', roles })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}





export default { createRole, getRoles }