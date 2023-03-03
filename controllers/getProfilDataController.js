import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {user_id} = req.body
    const sqlArticle = "SELECT * FROM articles WHERE user_id = ?"
    const sqlCom = "SELECT article_id,content FROM commentaires WHERE user_id = ?"
    const sqlUser = `
    SELECT 
    	users.nom,
        users.prenom,
        users.mail,
        roles.nom as role
    FROM users 
    JOIN roles 
    ON users.role_id = roles.id 
    WHERE users.id = ?`
    const paramsSql = [user_id]
    
    try{
        const articles = await asyncQuery(sqlArticle, paramsSql)
        const com = await asyncQuery(sqlCom, paramsSql)
        const user = await asyncQuery(sqlUser, paramsSql)
        
        res.json({articles, com, user})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
}