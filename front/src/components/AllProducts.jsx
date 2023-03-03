import axios from "axios"
import { NavLink } from "react-router-dom"
import { useState, useEffect, Fragment } from "react"
import { BASE_URL } from "../tools/constante.js"

const AllProducts = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/AllProducts`)
      .then(res => setProducts(res.data.result))
  }, [])

  const deletedProduct = (id) => {
    console.log(id)
    axios.post(`${BASE_URL}/deleteProduct`,{id})
    .then(res => {
      console.log(res)
      const data = products.filter(e => e.id !== id)
      setProducts(data)
    })
  }

  return (
    <Fragment>
    
    
    <div>
      {products && products.map((product, i) => {
        return (
      
          <div key={i}>
            <button class="allproducts" onClick={() => deletedProduct(product.id)}>  X SUPPRIMER X  </button>
            <button class="allproducts"> <NavLink to={`/editProduct/${product.id}`}> MODIFIER </NavLink> </button>
            <p>Référence: {product.id}</p>
            { product.url && <img src={`${BASE_URL}/img/${product.url}`} alt="Livre_Visuel" width="300" height="470" margin="3em" padding="3em"/> }
            <p><NavLink to={`/addProduct/${product.id}`}>  {product.nom}</NavLink></p>
            <p>Description: {product.description}</p>
          </div>
        )
      })}
    </div>
   
     <div>
                 <button><NavLink to="/AllProducts/AddProduct">AJOUTER UN LIVRE
                    <img src="../img/back_biblio_3.jpg" alt="Ajouter un LIVRE" width="163" height="100"/>
                    
                    </NavLink>
                    </button>
                    </div>
                    
                    </Fragment>
  )
}

export default AllProducts



                 
























