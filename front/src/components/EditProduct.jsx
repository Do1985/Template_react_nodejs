import { Fragment, useState, useEffect } from 'react';
import { BASE_URL } from "../tools/constante.js";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const {id} = useParams()
    
  const [filesData, setFilesData] = useState({
    nom: "",
    description: "",
    prix: "",
    stock: ""
  });
  
  console.log(id)
  
  useEffect(() => {
    axios.post(`${BASE_URL}/getProductById`,{id})
    .then(res => {
        console.log(res.data.result[0])
        setFilesData(res.data.result[0])
    })
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilesData({ ...filesData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    
    axios.post(`${BASE_URL}/editProduct`, filesData)
      .then((res) => {
        console.log(res);
        res.data.response && console.log('modifié avec succès');
      })
      .catch((err) => {
        console.log(err + " Houston, on a un problème");
      });
  };

  return (
    <Fragment>
      <h1>Modifier le produit</h1>
      <p></p>
      <form onSubmit={submit}>
        <label>
          <input type="text" placeholder="nom" name="nom" onChange={handleChange} value={filesData.nom} />
          <input type="text" placeholder="description" name="description" onChange={handleChange} value={filesData.description} />
          <input type="text" placeholder="prix" name="prix" onChange={handleChange} value={filesData.prix} />
          <input type="text" placeholder="stock" name="stock" onChange={handleChange} value={filesData.stock} />
        </label>
        <input type="submit" />
      </form>
    </Fragment>
  );
}

export default EditProduct