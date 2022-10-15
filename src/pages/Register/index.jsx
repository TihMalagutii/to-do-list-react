import { useState } from 'react'
import styles from '../Home/home.module.css'
import { Link } from 'react-router-dom'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();

    if(name !== '' && email !== '' && password !== ''){
      alert('funcionando')
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
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

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
