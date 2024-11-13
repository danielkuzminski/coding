//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

//react
import { useState, useEffect } from "react"

//auth firebase config
import { auth } from '../../firebase/config'

//custom hook to get context values
import { useAuthContext } from '../hooks/useAuthContext'


export const useSignup = () => {

    //clean up functionality
    const [cancelled, setCancelled] = useState(false)

    //creating state to handle pending and erorr values
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    //hook destructuring to get dispatch func from context
    const {dispatch} = useAuthContext()

    //creating signup func
    const signup = async (email, password, displayName) => {

        if(!cancelled){
            setError(null)
            setPending(true)
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            if(!cancelled){
                setPending(false)
            }

            await updateProfile(res.user, {'displayName': displayName})

            dispatch({type: 'LOGIN', payload: res.user})
        } catch (error) {
            console.log(error.message);
            if(!cancelled){
                setError(error.message)
                setPending(false)
            }
        }
    }

    //clean up func call
    useEffect(() => {
        return () => {
            setCancelled(true)
        }
    },[])

    return {signup, pending, error}
}