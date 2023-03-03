import {asyncQuery} from '../config/database.js'
import bcrypt from "bcrypt"

export default async (req, res) => {
    const saltRound = 10
    const {nom, prenom, mail, password} = req.body
    const sql = "INSERT INTO users (nom, prenom, mail, password, role_id) VALUES (?, ?, ?, ?, 1)"
    try{
        const passwordHash = await bcrypt.hash(password,saltRound)
        const params = [nom, prenom, mail, passwordHash]
        
        const result = await asyncQuery(sql, params)
        res.json({result})
    } catch(e){
        console.log(e)
        res.status(400).json({result:e})
    }
}