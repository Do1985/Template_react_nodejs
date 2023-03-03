import {pool} from "../config/database.js"

export default (req, res) => {
    const sql = "SELECT id, title, content FROM articles"
    pool.query(sql,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}