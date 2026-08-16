import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [loginError, setLoginError] = useState('')
  const [userData] = useContext(AuthContext)

  useEffect(()=>{
    // Clear any persisted login so app always asks for credentials on startup
    localStorage.removeItem('loggedInUser')
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    setLoginError('')

    const storedAdmin = JSON.parse(localStorage.getItem('admin') || '[]')
    const adminUser = Array.isArray(storedAdmin) ? storedAdmin.find((admin) => admin.email === email && admin.password === password) : null

    if (adminUser) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (Array.isArray(userData) && userData.length > 0) {
      const employee = userData.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        setLoginError('Invalid email or password')
      }
    } else {
      setLoginError('Invalid email or password')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} error={loginError} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} setLoggedInUserData={setLoggedInUserData} /> : null) }
    </>
  )
}

export default App