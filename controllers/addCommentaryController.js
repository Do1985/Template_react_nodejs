import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    // user_id, article_id, content
    const {user_id, article_id, content} = req.body
    const sql = "INSERT INTO commentaires (user_id, article_id, content) VALUES (? ,?, ?)"
    const paramsSQL= [user_id, article_id, content]
    
    try{
        const addCom = await asyncQuery(sql,paramsSQL)
        res.json({addCom})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
}