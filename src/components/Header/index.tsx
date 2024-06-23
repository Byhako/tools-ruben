'use client'
import { useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ModalLogin from '../ModalLogin'
import styles from './styles.module.css'
import { UserContext } from 'app/context/user'


export default function Header() {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showCreate, setShowCreate] = useState<boolean>(false)
  const { name } = useContext(UserContext)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && !name) {
      router.push('/')
    }
    if (pathname === '/' && name) {
      router.push('/home')
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <button
          onClick={() => router.push('/')}
          className={styles.buttonPrimary}
          >
          Tools
        </button>

        {name && (
          <h3>Hola {name}</h3>
        )}

        <div>
          <button
            className={styles.buttonLogin}
            onClick={() => {setShowCreate(!showCreate); setShowLogin(false)}}
            >Crear cuenta
          </button>
          <button
            className={styles.buttonLogin}
            onClick={() => {setShowLogin(!showLogin); setShowCreate(false)}}
          >
            {name ? (
              <>Logout</>  //TODO: funcion logout
            ) : (
              <>Login</>
            )}
          </button>
        </div>
      </div>
      <ModalLogin show={showLogin} setShow={setShowLogin} rol='login' />
      <ModalLogin show={showCreate} setShow={setShowCreate} rol='create' />
    </header>
  )
}
