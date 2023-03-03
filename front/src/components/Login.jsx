import { useState, useContext } from "react";
import { StoreContext } from "../tools/context.js";
import axios from "axios";
import { BASE_URL } from "../tools/constante.js";

const Login = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    
    console.log(state)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/login`, {
                mail: login.email,
                password: login.password
            })
            .then(res => {
                // message
                alert((res.data.response) ? "Vous êtes connecté" : "Identifiants incorrects");
                // sauvegarde du token dans le localStorage et ajout du token dans Axios
                localStorage.setItem('jwtToken', res.data.response.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.response.token;
                // Ajout des infos dans le Reducer
                dispatch({
                    type: 'LOGIN',
                    payload: res.data.response.response
                });
            })
            .catch(e =>{
                alert("Identifiants incorrects")
                console.log(e)
            });
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Email" value={login.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={login.password} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;

/*import { useState, useContext } from "react";
import { StoreContext } from "../tools/context.js";
import axios from "axios";
import { BASE_URL } from "../tools/constante.js";

const Login = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    
    console.log(state)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/login`, {
                mail: login.mail,
                password: login.password
            })
            .then(res => {
                // message
                alert((res.data.response) ? "Vous êtes connecté" : "Identifiants incorrects");
                // sauvegarde du token dans le localStorage et ajout du token dans le header de Axios
                localStorage.setItem('jwtToken', res.data.response.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.response.token;
                // Ajout des info dans le Reducer
                dispatch({
                    type: 'LOGIN',
                    payload: res.data.response.response
                });

            })
            .catch(e =>{
                alert("Identifiants incorrects")
                console.log(e)
            });
    };

    return (
        <div class="login">
        <form onSubmit={submit}>
            <input type="text" name="mail" placeholder="mail" onChange={handleChange} value={login.mail} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={login.password} />
            <input type='submit'/>
            
        </form>
        </div>
    )
}

export default Login;*/