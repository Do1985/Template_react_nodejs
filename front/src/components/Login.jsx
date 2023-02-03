import {useEffect} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"

const Login = () => {
    useEffect(() => {
        axios.post(`${BASE_URL}/login`,{password:"bobb", email:'bob'})
            .then(res => alert(res.data.result ? "vous etes connecté" : "identifiant incorrect"))
    },[])
    
    return(
        <div>
        
        
        
        
        </div>    
    )
}

export default Login