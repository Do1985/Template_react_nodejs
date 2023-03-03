import {pool} from "../config/database.js"

export default (req, res) => {
    const {title, content, user_id, id} = req.body
    const sql = "UPDATE articles SET title = ?, user_id = ?, content = ? WHERE id = ?"
    const paramsSQL = [title, user_id, content, id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}