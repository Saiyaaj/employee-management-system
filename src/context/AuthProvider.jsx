import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const storage = getLocalStorage()
        if (!Array.isArray(storage.employees) || storage.employees.length === 0) {
            setLocalStorage()
        }
        const { employees } = getLocalStorage()
        setUserData(Array.isArray(employees) ? employees : [])
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider