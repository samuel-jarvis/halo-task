import '../styles/pages/register.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'


import {projectAuth} from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const [cancel, setCancel] = useState(false)
  
  // Handle login event
  const {dispatch} = useAuthContext()

  const login = async (email, password, name) => {
    setLoading(true)
    setError(null)

    try {
      const logUser = await projectAuth.signInWithEmailAndPassword(email, password)

      dispatch({type: 'LOGIN', payload: logUser.user})
      
      if(!cancel) {
        console.log('this is me the baddest')
        setLoading(false)
        setError(null)
      }
    } 
    catch (error) {
      if (!cancel) {
        console.log(error)
        setLoading(false)
        setError(error.message)
      }
    }
  }

  useEffect(() => {
    return () => setCancel(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)

    login(email, password)
  }

  return (
    <div className='form-wrapper'>
      <div className='form'>
      <Link to='/' className='logo'><h1>Halo Task</h1></Link>
        <p className='form-type'>Login</p>

        {error && <p className='error'>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Password</span>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>

          {!loading && <input type="submit" value="Submit" />}
          {loading && <input type="submit" disabled value="Loading..." />}

          <p className='prompt'>Not a user? <Link to='/signup'>Sign Up</Link> </p>
        </form>
      </div>
    </div>
  )
}
