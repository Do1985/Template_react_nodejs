import axios from "axios"
import { useEffect, useState, useContext, Fragment } from "react"
import { Link } from "react-router-dom"
import { BASE_URL } from "../tools/constante.js"
import { StoreContext } from "../tools/context.js";
import {NavLink} from "react-router-dom"


const AllArticles = () => {
  const [state, /*dispatch*/] = useContext(StoreContext);
  const [articles, setArticles] = useState(null)

  console.log(state)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/AllArticles`)
      .then((res) => {
        console.log(res)
        setArticles(res.data.result)
      })
      .catch((err) => console.log(err))
  }, [])
  
  
  const deleteArticle = (id) => {
    axios.post(`${BASE_URL}/deleteArticle`,{id})
    .then(res => {
      const data = articles.filter(e => e.id !== id)
      setArticles(data)
    })
    .catch(e => console.log(e))
  }

  return (
    <div>
      {articles &&
        articles.map((item, i) => {
          return (
            <div key={i} style={{border:"1px solid red"}}>
              <p>auteur: {item.nom}</p>
              <p>title: {item.title}</p>
              <p>content: {item.content}</p>
              <Link to={`/article/${item.id}`} ><button>Plus d'info</button></Link>
              {state.user.isAdmin && 
              <Fragment>
                <button onClick={() => deleteArticle(item.id)}> X </button>
                <Link to={`/editArticle/${item.id}`}><button>EDITER</button></Link>
              </Fragment>
            }
            </div>
          )
        })}
        <div>
          <button>
            <NavLink to="/AddArticle">
              AJOUTER UN ARTICLE
              <img src="../img/back_biblio.jpg" alt="Ajouter un article" width="163" height="100"/>
            </NavLink>
          </button>
        </div>
    </div>
  )
}

export default AllArticles

                