import { Request, Response } from "express";
import { User } from "../entities/User";
import hash from "../services/bcrypt.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, money, userName, password, role } = req.body
        if (name === "" || money === "" || userName === "" || password === "" || role === "") {
            throw new Error("Please, fill all fields");
        } else {
            let pass = await hash.createHash(password)
            const user = new User()
            user.name = name
            user.money = money
            user.userName = userName
            user.password = pass
            user.role = role
            await user.save()
            let data = {
                name,
                userName,
                money
            }
            return res.json({ message: 'User created successfully.', data })
        }
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({
            relations: {
                role: true
            },
            select: {
                name: true,
                money: true,
                userName: true,
            }
        })
        return res.json({ message: 'Users consulted successfully.', users })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let users = await User.findOneBy({ id: parseInt(id) })
        if (!users) return res.json({ message: "User does not exist" })
        await User.update({ id: parseInt(id) }, req.body)
        users = await User.findOneBy({ id: parseInt(req.params.id) })
        return res.json({ message: 'User updated successfully.' })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await User.delete({ id: parseInt(id) })
        if (result.affected === 0) {
            return res.json({ message: 'User not found' })
        }
        return res.json({ message: 'User deleted successfully.' })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let user = await User.findOneBy({ id: parseInt(id) })
        if (!user) return res.json({ message: "User does not exist" })
        const data = {
            name: user.name,
            money: user.money,
            userName: user.userName,
            active: user.active,
        }
        return res.json({ message: 'User consulted successfully.', data })
    } catch (error) {
        if (error instanceof Error)
            return res.json({ message: error.message })
    }
}

export default { createUser, getUser, getUsers, updateUser, deleteUser }