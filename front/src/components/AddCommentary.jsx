import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import {useState} from "react";

const AddCommentary = () => {
    const [commentaryData, setcommentaryData] = useState({
        user_id : "",
        article_id: "",
        content: "",
        
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setcommentaryData({...commentaryData, [name]: value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/addCommentary`,{
            user_id : commentaryData.user_id,
            article_id : commentaryData.article_id,
            content : commentaryData.content,
           
        })
    }
    
    return(
        <form onSubmit={submit}>
        <input type = "text" placeholder = "user_id" name = "user_id" onChange = {handleChange} value = {commentaryData.user_id} />
        <input type = "text" placeholder = "article_id" name = "article_id" onChange = {handleChange} value = {commentaryData.article_id} />
        <input type = "text" placeholder = "content" name = "content" onChange = {handleChange} value = {commentaryData.content} />
        <input type="submit" />
        </form>
        )
}

export default AddCommentary;