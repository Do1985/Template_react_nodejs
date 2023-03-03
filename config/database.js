import mysql from "mysql";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "dorianpont", // identifiant BDD
    password: "def50871374828effb2a4f768a3edeab", // le password
    database: "dorianpont_projet", // nom de la base de donnée
});

// permet d'obtenir le resultat des requêtes sql async

export const asyncQuery = async (sql, params = []) => {
        return new Promise((resolve, reject)=>{
            pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
