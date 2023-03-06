import Error404 from "../components/Error404.jsx";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import Profil from "../components/Profil.jsx";
import AddProduct from "../components/AddProduct";

import Auteurs from "../components/Auteurs";
import Pico from "../components/Pico";

import Article from "../components/Article";
import Proclus from "../components/Proclus";
import Plotin from "../components/Plotin";

import AddCommentary from "../components/AddCommentary";
import AllArticles from "../components/AllArticles";

import EditProduct from "../components/EditProduct";
import Logout from "../components/Logout";

import AddArticle from "../components/AddArticle";
import Formu from "../components/Formu";

import Users from "../components/Users";

import AllProducts from "../components/AllProducts";
import ShowRole from "../components/ShowRole";

import Nav from "../components/Nav";

import Deconnexion from "../components/Deconnexion";

import Register from "../components/Register";
import EditArticle from "../components/EditArticle";


const routes = [
    {path:"/", component:<Home />},
    {path:"/login", component:<Login />},
    {path:"/register", component:<Register />},
    
    
    {path:"/profil", component:<Profil />, auth:"user"},
    {path:"/AddProduct", component:<AddProduct />, auth:"user"},
    {path:"*", component:<Error404 />},
    
    {path:"/Auteurs", component:<Auteurs />},
    {path:"/Pico", component:<Pico />},
    
    {path:"/Article", component:<Article />},
    {path:"/Proclus", component:<Proclus />},
    {path:"/Plotin", component:<Plotin />},
    
    {path:"/AddCommentary", component:<AddCommentary />, auth:"user"},
    {path:"/AllArticles", component:<AllArticles />},
    
    {path:"/EditProduct", component:<EditProduct />, auth:"user"},
    {path:"/Logout", component:<Logout />, auth:"user"},
    
    {path:"/AddArticle", component:<AddArticle />, auth:"user"},
    {path:"/Formu", component:<Formu />},
    
    {path:"/Users", component:<Users />, auth:"user"},
    
    {path:"/AllProducts", component:<AllProducts />},
    {path:"/ShowRole", component:<ShowRole />, auth:"user"},
    
    {path:"/Error404", component:<Error404 />},
    {path:"/Login", component:<Login />},
    {path:"/Nav", component:<Nav />},
    
    {path:"/Deconnexion", component:<Deconnexion />, auth:"user"},
    
    {path:"/Register", component:<Register />},
    {path:"/EditArticle", component:<EditArticle />, auth:"user"},
];

export default routes;













