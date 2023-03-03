import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState} from "react";

const AddArticle = () => {
    const [articleData, setarticleData] = useState({
        title: "",
        content: "",
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setarticleData({...articleData, [name]: value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/addArticle`,{
            title : articleData.title,
            content : articleData.content,
        })
    }
    
    return(
       <form onSubmit={submit} className="article-form">
  <label htmlFor="title">Titre</label>
  <input type="text" id="title" name="title" placeholder="Titre de l'article" onChange={handleChange} value={articleData.title} />

  <label htmlFor="content">Contenu</label>
  <textarea id="content" name="content" placeholder="Contenu de l'article" onChange={handleChange} value={articleData.content}></textarea>

  <button type="submit">Enregistrer</button>
  
  <div>
  </div>
  
  <article> "Conformément aux lois en vigueur, tout propos contrevenant au respect d'autrui sera sanctionné d'une annulation de l'inscription de l'utilisateur, à minima. Le site et ses responsables ne sauraient être tenus responsables pour les idées exprimées par les utilisateurs."
  </article>
</form>
        )
}
export default AddArticle;