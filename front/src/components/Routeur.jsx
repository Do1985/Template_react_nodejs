import { Route } from "react-router-dom";
import Middleware from "../components/Middleware";

const Router = ({path, children}) => {
    return(
        <Route path={path} element={<Middleware>{children}</Middleware>} />
    )
}

export default Router