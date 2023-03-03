import {pool} from "../config/database.js";

export default (req, res) => {
    const sql = "INSERT INTO products (nom, description, prix, stock) VALUES (?, ?, ?, ?)"
    const sqlPictures = "INSERT INTO pictures (url,product_id,caption) VALUES (?, ?, ?)"
    const {nom, description, prix, stock, files} = req.body
    const paramSql = [nom, description, prix, stock]
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err
        console.log(result)
        const paramSqlPictures = [files, result.insertId, nom]
        pool.query(sqlPictures, paramSqlPictures, (err, resultP) => {
            if (err) throw err
            
            res.json({result, resultP})
        })
    })
}