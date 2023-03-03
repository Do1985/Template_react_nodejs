import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddUser = () => {
    const [userData, setUserData] = useState({
        nom:'',
        prenom:'',
        mail:'',
        password:'',
    })
    
    const handleChange = (e) => {
        const {nom, value} = e.target
        setUserData({...userData,[nom]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/addUser`,{
           nom : userData.nom,
           prenom: userData.prenom,
           mail: userData.mail,
           password:userData.password
       })
    }
    
    
    return(
        <form onSubmit={submit}>
            <input type='text' placeholder='nom' name='nom' onChange={handleChange} value={userData.nom} />
            <input type='text' placeholder='prenom' name='prenom' onChange={handleChange} value={userData.prenom} />
            <input type='text' placeholder='mail' name='mail' onChange={handleChange} value={userData.mail} />
            <input type='password' placeholder='Mot de passe' name='password' onChange={handleChange} value={userData.password} />
            <input type='submit' />
        </form>    
    )
}

export default AddUser