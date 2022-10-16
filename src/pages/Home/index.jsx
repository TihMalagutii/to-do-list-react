import { useState } from 'react'
import { CgLogOff } from 'react-icons/cg'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import styles from './home.module.css'

export default function Admin() {

  const [taskInput, setTaskInput] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    alert()
  }

  const handleLogOut = () => {
    signOut(auth);
  }

  return (
    <>
      <header>

        <h2 className={styles.logo}>TO-DO List</h2>
        <h1>Your tasks</h1>
        <button onClick={handleLogOut} className={styles.logoffBtn}>
          <span><CgLogOff /></span>
        </button>

      </header>

      <section className={styles.container}>

        <form onSubmit={handleRegister}>
          <input 
            placeholder='type your task...' 
            value={taskInput} 
            onChange={e => setTaskInput(e.target.value)} 
          />

          <button type='submit'>
            <span><AiOutlinePlus /></span>
          </button>
        </form>

        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <button className={styles.editBtn}>
              <BsPencilSquare />
            </button>
            <button className={styles.concludeBtn}>
              <AiOutlineCheck />
            </button>
          </div>
        </article>

      </section>

    </>
  )
}
