import {pool} from "../config/database.js";

export default (req, res) => {
    const sql = "SELECT products.id, products.nom, products.description, products.prix, products.stock, pictures.url FROM products LEFT JOIN pictures ON products.id = pictures.product_id"
    const paramSql = []
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err
        res.json({result})
    })
}




