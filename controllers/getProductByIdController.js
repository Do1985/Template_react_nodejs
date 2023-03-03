import {pool} from "../config/database.js";

export default (req, res) => {
    const {id} = req.body
    const sql = "SELECT products.* FROM products WHERE id = ?"
    const paramSql = [id]
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err
        res.json({result})
    })
}



//ajouter à la requête la sélection de image FROM pictures ou FROM addproduct; et rajouter "<p>visuel: {pictures.content}</p>" au JSX de AllProducts


