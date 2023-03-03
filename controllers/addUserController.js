import {asyncQuery} from "../config/database.js"
import bcrypt from 'bcrypt'

const emailExist  = async (mail) => {
    const sql = "SELECT * FROM users WHERE mail = ?"
    const response  = await asyncQuery(sql,[mail])
    if(response.length > 0) return true
    return false
} 

export default async (req, res) => {
        const saltRounds = 10;
        const {nom, prenom, mail, password, role_id} = req.body
        const sql = "INSERT INTO users (nom, prenom, mail, password, role_id) VALUES (?,?,?,?,2)"
        
        if(password.length <= 8){
            return {response:'mot de passe trop court, il en manque une louchée pour faire le compte'}
        }
        
        try {
            // On verrifie si l'email est présent en Base De Données
            const mailPresent = await emailExist(mail)
        
            // erreur a la verrification de l'email
            if(mailPresent === undefined){
                return
            }
            
            // Email deja present en BDD 
            if(mailPresent === true) {
                return {response:'email deja present, faut croire que tu es déjà inscrit, mon ami!'}
            }
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,saltRounds)
            
            // on creer la liste des params pour add user
            const paramsSql = [nom, prenom, mail, mpdHash, 5]
            
            // on fait la requete
            const createUser = await asyncQuery(sql,paramsSql)
            
            
            // on retourne la reponse
            return {response:createUser}
        }catch(erreur){
            console.log(erreur)
            return
        }
        
    }
    