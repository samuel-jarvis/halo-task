import '../../styles/pages/register.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import {projectAuth} from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const [cancel, setCancel] = useState(false)

  const navigate = useNavigate();
  
  // Handle login event
  const {dispatch} = useAuthContext()

  const signup = async (email, password, name) => {
    setLoading(true)
    setError(null)

    try {
      const newUser = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(newUser.user)

      if (!newUser) {
        throw new Error('Error creating user')
      }

      await newUser.user.updateProfile({displayName: name})
      dispatch({type: 'SIGNUP', payload: newUser.user})

      navigate("/dashboard")
      
      if(!cancel) {
        setLoading(false)
        setError(null)
      }
    } 
    catch (error) {
      console.log(error)
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    return () => setCancel(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, name)

    signup(email, password, name)
  }


  return (
    <div className='auth-form-wrapper'>
      <div className='form'>
        <Link to='/' className='logo'><h1>Halo Task</h1></Link>
        <p className='form-type'>Register</p>

        {error && <p className='error'>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input 
              type="text"
              onChange={(e) => setName(e.target.value)} 
              value={name}
            />
          </label>

          <label>
            <span>Email</span>
            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label>
            <span>Password</span>
            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          {!loading && <input type="submit" value="Submit" />}
          {loading && <input type="submit" disabled value="Loading..." />}

          <p className='prompt'>Already a user? <Link to='/login'>Login</Link> </p>
        </form>

        {loading && <p className='loading'>Loading...</p>}
      </div>

    </div>
  )
}
