const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENTER':
            return {
                ...state,
                count:state.count + action.payload,
            }
                
        case 'ADD_DATA':
            return {
                ...state,
                data : [...state.data, action.payload]
            }
        
        case 'LOGIN':
            return {
                ...state, 
                user:{
                    isLogged:true,
                    isAdmin:action.payload.admin,
                    ...action.payload
                }
            }
            
        case 'LOGOUT' : 
            return{
                ...state,
                user:{
                    isLogged:false,
                    isAdmin:false
                }
            }

        default:
            return state;
    }
}

export {reducer}