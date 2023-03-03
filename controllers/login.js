import { asyncQuery } from "../config/database.js"
import bcrypt from "bcrypt"
import { generateToken } from "../config/token.js"


const generateResponse = async(userDataSQL) => {
  console.log(userDataSQL)
  // ID du role Admin en BDD
  const ADMIN_ROLE_ID = 2
  // verrifie si le user est admin return true OR false
  const admin = userDataSQL.role_id === ADMIN_ROLE_ID

  const userData = {
    id: userDataSQL.id,
    nom: userDataSQL.nom,
    prenom: userDataSQL.prenom,
    email: userDataSQL.mail,
    user: true,
    admin
  }
  try {
    const token = await generateToken(userData)
    return {
      response: userData,
      admin,
      token,
      id: userDataSQL.id,
    }
  }
  catch (err) {
    console.log(err)
    return
  }
}

export default async(req, res) => {
  const { password, mail } = req.body
  const sql = "SELECT * FROM users WHERE mail = ?"
  const paramsSql = [mail]

  try {
    // recupere les info user de la table user
    const result = await asyncQuery(sql, paramsSql)
    
    // on fusionne les info user avec l'id du panier pour en faire un seul objet 
    const userData = { /* order_id: userOrder[0].id, */...result[0] }

    const response = await generateResponse(userData)
    const resultCompare = await bcrypt.compare(password, result[0].password)
    console.log(response)
    res.json(resultCompare ? { response } : { response: null })
  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
