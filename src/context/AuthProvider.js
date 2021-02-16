import React, { useContext, useState, useEffect } from "react"
import app, {provider} from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function login() {
      return app.auth().signInWithPopup(provider)
  }

  function logout() {
    return app.auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}