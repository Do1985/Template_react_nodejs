import { BrowserRouter, Routes, Route } from "react-router-dom";


import Register from "./components/Register";
import AddUser from "./components/AddUser";
import Deconnexion from "./components/Deconnexion";
import EditArticle from "./components/EditArticle";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import AllProducts from "./components/AllProducts";
import Profil from "./components/Profil";
import ShowRole from "./components/ShowRole";
import AddProduct from "./components/AddProduct";
import Users from "./components/Users";
import AddArticle from "./components/AddArticle";
import Formu from "./components/Formu";

import EditProduct from "./components/EditProduct";
import Logout from "./components/Logout";

import AddCommentary from "./components/AddCommentary";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";
import Proclus from "./components/Proclus";
import Plotin from "./components/Plotin";
import Pico from "./components/Pico";
import Auteurs from "./components/Auteurs";


function App() {
    return(
        <BrowserRouter> 
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/AddProduct" element={<AddProduct />} />
                <Route path="/AddUser" element={<AddUser />} />
                <Route path="/Deconnexion" element={<Deconnexion />} />
             { /*  <Route path="/Proclus" element={<Proclus />} /> 
                <Route path="/Plotin" element={<Plotin />} />*/}
                <Route path="/Pico" element={<Pico />} />
                
                <Route path="/Auteurs" element={<Auteurs />} />
                <Route path="/Auteurs/Proclus" element={<Proclus />} />
                <Route path="/Auteurs/Plotin" element={<Plotin />} />
                
                
                <Route path="/AddCommentary" element={<AddCommentary />} /> {/* DEPLACER LE COMPONENTES SUR ALLARTICLES */}
                
                <Route path="/AllArticles" element={<AllArticles />} />
                <Route path="/AllArticles/AddArticle" element={<AddArticle />} />
                
                <Route path="/editArticle/:id" element={<EditArticle />} />
                <Route path="/AddArticle" element={<AddArticle />} />
                <Route path="/editProduct/:id" element={<EditProduct />} />
                
                <Route path="/AllProducts" element={<AllProducts />} />
                <Route path="/AllProducts/AddProduct" element={<AddProduct />} />
                
                <Route path="/Profil" element={<Profil />} />
                <Route path="/Profil/Logout" element={<Logout />} />
                
                <Route path="/ShowRole" element={<ShowRole />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/ShowRole" element={<ShowRole />} />
                <Route path="/Formu" element={<Formu />} />
                <Route path="/Article/:id" element={<Article />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
    
}
   

export default App;