import {pool} from "../config/database.js";

// Utiliser le middleware pour le téléchargement de fichiers
export default (req, res) => {
    
    const {id, url, product_id, caption} = req.body;
    
    const pictures = req.body.files;
    console.log({id, url, product_id, caption});
    const sql = " INSERT INTO pictures (url, product_id, caption) WHERE product_id = ?"; 
    const paramsSQL = [id, url, product_id, caption];
    
    console.log(pictures);
    
    pool.query(sql, paramsSQL, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'image.' });
        } else {
            console.log('Image enregistrée avec succès.');
            res.status(200).json({ success: true });
        }
    });
};