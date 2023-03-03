import {useState, useEffect, Fragment} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { NavLink } from "react-router-dom"

const EditArticle = () => {
    const [article, setArticle] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getArticleByID`,{id})
            .then(res => setArticle(res.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setArticle({...article, [name]: value})
    }
    
    const submit = (e) =>{
        e.preventDefault()
        axios.post(`${BASE_URL}/editArticle`,{...article})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    } 
    
    return (
        <Fragment>
            {article !== null && (
                <form onSubmit={submit}>
                    <input type="text" placeholder='title' name='title' onChange={handleChange} value={article.title} />
                    <textarea placeholder='content' name='content' onChange={handleChange} defaultValue={article.content}></textarea>
                    <input type='submit' />
                </form>
            )}
        </Fragment>
    )
}
 
export default EditArticle