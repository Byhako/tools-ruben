'use client'
import { useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useCookies } from 'react-cookie'

import ModalLogin from '../ModalLogin'
import styles from './styles.module.css'
import { UserContext } from 'app/context/user'
import capitalize from 'app/utils/capitalize'


export default function Header() {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showCreate, setShowCreate] = useState<boolean>(false)
  const { name, updateUser } = useContext(UserContext)
  const [removeCookie] = useCookies(['rubenTools'])

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && !name) {
      router.push('/')
    }
    if (pathname === '/' && name) {
      router.push('/home')
    }
  }, [name, pathname, router])

  const handleLogin = () => {
    if (name) {
      updateUser({ name: '', token: '' })
      removeCookie
      router.push('/')
    } else {
      setShowLogin(!showLogin)
      setShowCreate(false)
    }
  }

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
          <h3 className={styles.userName}>Hola {capitalize(name.split('@')[0])}</h3>
        )}

        <div>
          {!name && (
            <button
              className={styles.buttonLogin}
              onClick={() => {setShowCreate(!showCreate); setShowLogin(false)}}
              >Crear cuenta
            </button>
          )}
          <button
            className={styles.buttonLogin}
            onClick={handleLogin}
          >
            {name ? (
              <>Logout</>
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
