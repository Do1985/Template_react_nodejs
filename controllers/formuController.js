import {asyncQuery} from '../config/database.js'

export default async (req, res) => {
    const {nom, prenom, mail, adresse, ville, cp, tel} = req.body
    const sql = "INSERT INTO formulaire (nom, prenom, mail, adresse, ville, cp, tel) VALUES (?, ?, ?, ?, ?, ?, ? )"
    const paramsSQL= [nom, prenom, mail, adresse, ville, cp, tel]
    
    try{
        const addFormu = await asyncQuery(sql,paramsSQL)
        res.json({addFormu})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
}