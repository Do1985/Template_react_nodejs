import axios from "axios"
import { useEffect, useContext, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../tools/constante.js"
import { StoreContext } from "../tools/context.js";

const Article = () => {
  const { id } = useParams()
  const [state, dispatch] = useContext(StoreContext);
  const [article, setArticle] = useState(null)
  const [commentaires, setCommentaires] = useState([])
  const [commentaire, setCommentaire] = useState("")

console.log(article)

  useEffect(() => {
    axios
      .post(`${BASE_URL}/article`,{id})
      .then((res) => {
        console.log(res)
        setArticle(res.data.result[0])
        setCommentaires(res.data.resultCom)
      })
      .catch((err) => console.log(err))
  }, [id])

  const submit = (e) => {
    e.preventDefault()
    axios
      .post(`${BASE_URL}/addCommentary`, { article_id: id, content: commentaire, user_id:state.user.id })
      .then(() => {
        setCommentaires([...commentaires, { content: commentaire }])
        setCommentaire("")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {article &&
      <Fragment>
        <div style={{border:"1px solid red"}}>
          {/* <button onClick={() => deletedArticle(article.id)}> X </button>
          <button> <NavLink to={`/editArticle/${article.id}`}>EDITER</NavLink> </button> */}
          <p>auteur: {article.nom}</p>
          <p>title: {article.title}</p>
          <p>content: {article.content}</p>
        </div>
      
      {state.user.id && 
          <form onSubmit={submit}>
            <input
              type="text"
              onChange={(e) => setCommentaire(e.target.value)}
              value={commentaire}
              placeholder="votre commentaire"
            />
            <input type="submit" />
          </form>
      }
      {commentaires.map((com, index) => {
        return (
          <div key={index} style={{border:"1px solid #fff"}}>
            <p>{com.content}</p> 
          </div>
        )
      })}
      </Fragment>
      }
    </div>
  )
}

export default Article
