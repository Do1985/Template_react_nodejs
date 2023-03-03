import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {id} = req.body
    // afficher le titre, contenu, le nom de l'auteur
    const sqlArticle = `
        SELECT 
            articles.title, 
            articles.content, 
            users.nom 
        FROM articles 
        JOIN users 
        ON users.id = articles.user_id 
        WHERE articles.id = ?`
    const paramsSQLArticle = [id]

    // affiche les différents commentaires liés à l'article
    const sqlCommentaire = `
        SELECT 
            content 
        FROM commentaires 
        WHERE article_id = ?
    `
    const paramsSQLCommentaire = [id]

    try{
        const articleList = await asyncQuery(sqlArticle,paramsSQLArticle)
        const commentairesList = await asyncQuery(sqlCommentaire,paramsSQLCommentaire)
        res.json({result:articleList,resultCom:commentairesList})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }

    /* pool.query(sqlArticle,paramsSQLArticle,(err, result) => {
        if(err) throw err
        pool.query(sqlCommentaire,paramsSQLCommentaire,(error, resultCom) => {
            if(error) throw error
            res.json({result,resultCom})
        })
    }) */
}
