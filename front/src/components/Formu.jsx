import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState} from "react";

const Addformulaire = () => {
    const [formulaireData, setformulaireData] = useState({
        id : "",
        nom: "",
        prenom: "",
        mail: "",
        adresse: "",
        ville: "",
        cp: "",
        tel: "",
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setformulaireData({...formulaireData, [name]: value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/Formu`,{
            nom : formulaireData.nom,
            prenom : formulaireData.prenom,
            mail : formulaireData.mail,
            adresse : formulaireData.adresse,
            ville : formulaireData.ville,
            cp : formulaireData.cp,
           tel : formulaireData.tel
        })
    }
    
    return(
        
        <form onSubmit={submit}>
  <label>
    Nom :
    <input type="text" placeholder="nom" name="nom" onChange={handleChange} value={formulaireData.nom} />
  </label>
  <br />
  <label>
    Prénom :
    <input type="text" placeholder="prenom" name="prenom" onChange={handleChange} value={formulaireData.prenom} />
  </label>
  <br />
  <label>
    Email :
    <input type="text" placeholder="mail" name="mail" onChange={handleChange} value={formulaireData.mail} />
  </label>
  <br />
  <label>
    Adresse :
    <input type="text" placeholder="adresse" name="adresse" onChange={handleChange} value={formulaireData.adresse} />
  </label>
  <br />
  <label>
    Ville :
    <input type="text" placeholder="ville" name="ville" onChange={handleChange} value={formulaireData.ville} />
  </label>
  <br />
  <label>
    Code Postal :
    <input type="number" placeholder="code postal" name="cp" onChange={handleChange} value={formulaireData.cp} />
  </label>
  <br />
  <label>
    Téléphone :
    <input type="tel" size="14" maxLength="14" placeholder="telephone" name="tel" onChange={handleChange} value={formulaireData.tel} />
  </label>
  <br />
  <input type="submit" value="Envoyer" />
</form>
       
        )
}

export default Addformulaire; 


 /*<form onSubmit={submit}>
        <input type = "text" placeholder = "nom" name = "nom" onChange = {handleChange} value = {formulaireData.nom} />
        <input type = "text" placeholder = "prenom" name = "prenom" onChange = {handleChange} value = {formulaireData.prenom} />
        <input type = "text" placeholder = "mail" name = "mail" onChange = {handleChange} value = {formulaireData.mail} />
        <input type = "text" placeholder = "adresse" name = "adresse" onChange = {handleChange} value = {formulaireData.adresse} />
        <input type = "text" placeholder = "ville" name = "ville" onChange = {handleChange} value = {formulaireData.ville} />
        <input type = "number" placeholder = "code postal" name = "cp" onChange = {handleChange} value = {formulaireData.cp} />
        <input type = "tel" size="14" maxLength="14" placeholder = "telephone" name = "tel" onChange = {handleChange} value = {formulaireData.tel}/>
        <input type="submit" />
        </form>*/