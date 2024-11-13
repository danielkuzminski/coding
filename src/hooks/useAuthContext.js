import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthCOntext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('not inside or missing context')
    }

    return context
}