import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useEffect, useState, Fragment} from "react"
import {NavLink} from 'react-router-dom'

const Users = () => {
    const [usersList, setUsersList] = useState([])
    
    useEffect(() => {
        if(usersList.length === 0){
            axios.get(`${BASE_URL}/getUsers`)
                .then(res => setUsersList(res.data.result))
                .catch(err => console.log(err))
        }
    },[usersList])
    
    const deleteUser = (id) => {
        axios.post(`${BASE_URL}/deleteUserById`,{id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
    <div>
        {usersList.map((user,i) => {
            return(
                <Fragment key={i}>
                    <ul>
                        <li>Nom:<NavLink to={`/user/${user.id}`}>{user.nom}</NavLink></li>
                        <li>Prénom: {user.prenom}</li>
                        <button onClick={() => deleteUser(user.id)}>X</button>
                    </ul>
                </Fragment>
            )
        })}
        <div>
            <button>
                <NavLink to="/Logout">
                    DECONNEXION
                    <img className="deco" src="../img/logout.jpg" alt="Se déconnecter" width="163" height="100"/>
                </NavLink>
            </button> 
        </div>
    </div>   
);

                  
    
}

export default Users