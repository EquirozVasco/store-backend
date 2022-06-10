import bcrypt from 'bcrypt'

const createHash = (password: string) => {
    return bcrypt.hashSync(password,12)
}

const compareHash = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash)
}

export default {createHash, compareHash}