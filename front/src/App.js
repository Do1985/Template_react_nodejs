import Router from "./components/Router.jsx"
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Router />
        </BrowserRouter>
    );
}

export default App;


