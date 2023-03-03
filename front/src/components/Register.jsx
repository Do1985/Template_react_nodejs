import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../tools/constante.js';

const Register = () => {
  const initialState = {
    nom: '',
    prenom: '',
    mail: '',
    password: '',
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/register`, { ...inputs })
      .then(() => {
        setInputs(initialState);
      })
      .catch((err) => {
        console.log(err);
        alert("On dirait bien qu'il y a un cheveux dans la soupe.");
      });
  };

  return (
    <div className='register'>
      <form onSubmit={submit}>
      <p> INSCRIPTION </p>
        <ul>
          <li>
            <input
              type='text'
              name='nom'
              placeholder='Nom'
              value={inputs.nom}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type='text'
              name='prenom'
              placeholder='Prénom'
              value={inputs.prenom}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type='email'
              name='mail'
              placeholder='courriel'
              value={inputs.mail}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type='password'
              name='password'
              placeholder='Mot de passe'
              value={inputs.password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input type='submit' />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;



/*import {useState} from 'react'
import axios from 'axios'
import {BASE_URL} from "../tools/constante.js"

const Register = () => {
    const initialState = {
        nom:"",
        prenom:"",
        mail:"",
        password:""
    
    }
    const [inputs, setInputs] = useState(initialState)
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setInputs({...inputs, [name]:value})
    }
    
    
    const submit = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/register`,{...inputs})
    .then(() => {
        setInputs(initialState)
    })
    .catch(err => {
        console.log(err)
        alert("On dirait bien qu'il y a un cheveux dans la soupe.")
    })
}

    
    return(
        
        <div class="register">
        <form onSubmit={submit}>
        <ul>
            <li><input type='text' name='nom' placeholder='Nom' value={inputs.nom} onChange={handleChange} /></li>
           <li><input type='text' name='prenom' placeholder='Prénom' value={inputs.prenom} onChange={handleChange} /></li>
            <li><input type='email' name='mail' placeholder='courriel' value={inputs.mail} onChange={handleChange} /></li>
           <li> <input type='password' name='password' placeholder='Mot de passe' value={inputs.password} onChange={handleChange} /></li>
            <li><input type='submit' />
            </ul>
        </form>
        </div>
    )
}

export default Register*/