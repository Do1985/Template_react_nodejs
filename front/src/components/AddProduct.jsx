import { Fragment, useState } from 'react';
import { BASE_URL } from "../tools/constante.js";
import axios from 'axios';

const AddProduct = () => {
  const [filesData, setFilesData] = useState({
    nom: "Livre",
    description: "",
    prix: "",
    stock: "",
    files: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilesData({ ...filesData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFilesData({ ...filesData, files: files[0] });
  };

  const submit = (e) => {
    e.preventDefault();
    const dataFile = new FormData();
    dataFile.append('nom', filesData.nom);
    dataFile.append('description', filesData.description);
    dataFile.append('prix', filesData.prix);
    dataFile.append('stock', filesData.stock);
    dataFile.append('files', filesData.files);
    axios.post(`${BASE_URL}/addProduct`, dataFile)
      .then((res) => {
        console.log(res);
        res.data.response && console.log('téléchargé avec succès');
      })
      .catch((err) => {
        console.log(err + " Houston, on a un problème");
      });
  };

  return (
    <Fragment>
      <h1>Ajouter/Modifier image</h1>
      <p></p>
      <form onSubmit={submit} encType="multipart/form-data">
        <label>
          <input type='file' name='files' onChange={handleFileChange} />
          <input type="text" placeholder="nom" name="nom" onChange={handleChange} value={filesData.nom} />
          <input type="text" placeholder="description" name="description" onChange={handleChange} value={filesData.description} />
          <input type="text" placeholder="prix" name="prix" onChange={handleChange} value={filesData.prix} />
          <input type="text" placeholder="stock" name="stock" onChange={handleChange} value={filesData.stock} />
        </label>
        <button type="button" onClick={() => console.log("Bouton cliqué!")}>
  SOUMETTRE
</button>
      </form>
    </Fragment>
  );
};

export default AddProduct;


