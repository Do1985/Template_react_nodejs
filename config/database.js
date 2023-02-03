import mysql from "mysql";
import util from "util"

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "dorianpont", // identifiant BDD
    password: "def50871374828effb2a4f768a3edeab", // le password
    database: "dorianpont_tutotest", // nom de la base de donnée
});


// pour creer des requet sql async
export const query = util.promisify(pool.query).bind(pool)

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
        return new Promise((resolve, reject)=>{
            this.pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }


/*    



import mysql from "mysql";

export let pool = mysql.createPool({
    connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "anthonycarreta", // identifiant BDD
    password: "acfff451642c9b6988a8a36616c1ba28", // le password
    database: "anthonycarreta_exercices", // nom de la base de donnée
});

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}*/