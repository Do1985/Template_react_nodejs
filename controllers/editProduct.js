import {pool} from "../config/database.js";
export default (req, res) => {
    const {nom, description, prix, stock, id} = req.body
    const sql = "UPDATE products SET nom = ?, description = ?, prix = ?, stock = ? WHERE id = ?"
    const paramsSql = [nom, description, prix, stock, id]
    
    pool.query(sql, paramsSql, (err, result) => {
        if(err) throw err
        res.json({result})
    })
    
}