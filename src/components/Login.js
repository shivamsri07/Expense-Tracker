import React from "react"
import { useAuth } from "../context/AuthProvider"
import { useHistory } from "react-router-dom"
import GoogleButton from 'react-google-button'


export default function Login() {
  const { login } = useAuth()
  // const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit() {
    try {
      // setError("")
      // setLoading(true)
      await login()
      history.push("/expense")
    } catch {
      console.log("Failed to log in")
    }
    //setLoading(false)
  }
  return (
    <GoogleButton onClick={handleSubmit} />
  )

}