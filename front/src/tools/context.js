/*import React from "react"
const StoreContext = React.createContext([]);

const initialState = {
    count : 0,
    data : []
}

export {StoreContext, initialState}




*/
import React from "react"
const StoreContext = React.createContext([]);

const initialState = {
    user:{
        isAdmin : false,
        isLogged: false,
        id:null
    }
}

export {StoreContext, initialState}