//react
import { createContext, useReducer } from "react";


//creating auth context
export const AuthContext = createContext()


//auth reducer function
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        default:
            return state
    }
}


export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {user: null})

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
