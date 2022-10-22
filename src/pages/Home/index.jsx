import { useEffect, useState } from 'react'
import { CgLogOff } from 'react-icons/cg'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import styles from './home.module.css'

export default function Admin() {

  const [taskInput, setTaskInput] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    const loadTask = () => {
      const userDetail = localStorage.getItem("@dataUser")
      setUser(JSON.parse(userDetail))
    }

    loadTask()
  }, [])

  const handleRegister = (e) => {
    e.preventDefault()

    if(taskInput === '') {
      alert("Enter your task...")
      return
    }

    addDoc(collection(db, "tasks"), {
      task: taskInput,
      created: new Date(),
      userUid: user?.uid
    })
    .then(() => {
      console.log("SUCCESS")
      setTaskInput('')
    })
    .catch(e => console.log(e))

  }

  const handleLogOut = () => {
    signOut(auth);
  }

  return (
    <>
      <header>

        <h2 className={styles.logo}>TO-DO List</h2>
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
