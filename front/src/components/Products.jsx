import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Products = () => {
    const { formation } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // requete SQL (formation)
        if(true){
            /// on affiche la page 
        } else {
            navigate("/success?message=Alan", { replace: true });
        }
    }, []);
    
    return (
        <div>{formation}</div>
    )
}

export default Products