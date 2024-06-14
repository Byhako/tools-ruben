'use client'
import { use, useState } from 'react'
import ModalLogin from '../ModalLogin'
import styles from './styles.module.css'
import { UserContext } from 'app/context/user'


export default function Header() {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showCreate, setShowCreate] = useState<boolean>(false)
  const { name, token, updateUser } = use(UserContext)


  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Tools</h1>
        <button
          onClick={() => {setShowCreate(!showCreate); setShowLogin(false)}}
          style={{margin: '0 0 0 auto'}}
          >Crear cuenta
        </button>
        <button
          onClick={() => {setShowLogin(!showLogin); setShowCreate(false)}}
          style={{margin: '0 0 0 auto'}}
        >Login
        </button>
      </div>
      <ModalLogin show={showLogin} setShow={setShowLogin} rol='login' />
      <ModalLogin show={showCreate} setShow={setShowCreate} rol='create' />
    </header>
  )
}
