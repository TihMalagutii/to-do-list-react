import { useState } from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();

    if(email !== '' && password !== ''){
      alert('funcionando')
    } else {
      alert('Incorrect Email/Password')
    }
    
  }

  return (
    <div className={styles.container}>

      <h1>TO-DO List</h1>

      <form onSubmit={handleLogin}>

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

        <button type='submit'>LOG IN</button>

      </form>

      <Link className={styles.registerLink} to="/register">
        Don't have an account? <strong>Register</strong>
      </Link>

      <Link className={styles.fPassLink}>
        FORGOT YOUR PASSWORD?
      </Link>

    </div>
  )
}
