import {pool} from "../config/database.js";

export default (req, res) => {
    const sql = "INSERT INTO articles (user_id, title, content) VALUES (?, ?, ?)"
    const {user_id, title, content} = req.body
    const paramSql = [user_id || null, title, content]
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err
        res.json({result})
    })
}
/*import {pool} from "../config/database.js";

export default (req, res) => {
    const sql = "INSERT INTO articles (user_id,title, content) VALUES ([0], ?, ?)"
    const {user_id,title, content} = req.body
    const paramSql = [user_id, title, content]
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err
        res.json({result})
    })
}*/