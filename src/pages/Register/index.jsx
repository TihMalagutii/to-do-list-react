import styles from '../Home/home.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true })
      })
      .catch((e) => {
        console.log('Error ---- ' + e)
      })

    } else {
      alert('Incorrect Email/Password')
    }
    
  }

  return (
    <div className={styles.container}>

      <h1>TO-DO List</h1>

      <form onSubmit={handleRegister}>
        
        <input 
          type="text"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>REGISTER</button>

      </form>

      <Link className={styles.registerLink} to="/">
        Have an account? <strong>Log In</strong>
      </Link>

    </div>
  )
}
