import {pool} from "../config/database.js"
import bcrypt from "bcrypt"

export default (req, res) => {
    const {password, email} = req.body
    const sql = "SELECT password FROM users WHERE email = ?"
    const paramsSql = [email]
    //
    pool.query(sql, paramsSql, async (err, result) => {
        if(err) throw err
        
        try {
           const resultCompare = await bcrypt.compare(password, result[0].password)
           res.json({result:resultCompare})
        } catch(err) {
            console.log(err)
        }
    })
}

/*const hashPassword = async (password) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const comparePassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

*/


//// WTF : ?
const ADMIN_ROLE_ID = 1