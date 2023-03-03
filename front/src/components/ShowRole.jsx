import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react"

const ShowRole = () => {
    const [role, setRole] = useState("")
    
    console.log(role)
    
    useEffect(() => {
        axios.post(`${BASE_URL}/test`,{
            id: 1,
            nom:"user"
        })
        .then(res => setRole(res.data.result[0].nom))
        .catch(err => console.log(err))
    },[])
    
    return(
        <h1>Salut l ami!</h1>    
    )    
}

export default ShowRole