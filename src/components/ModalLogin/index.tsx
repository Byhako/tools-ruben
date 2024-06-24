'use client'
import styles from './styles.module.css'
import Button from '../Button'
import { useContext, useEffect, useState } from 'react'
import loginUser from 'app/server/api/loginUser'
import { useRouter } from 'next/navigation'
import { UserContext } from 'app/context/user'
import createUser from 'app/server/api/createUser'

interface Props {
  show: boolean
  setShow: (b: boolean) => void, rol: string
}

export default function ModalLogin({ show, setShow, rol }: Props) {
  const [top, setTop] = useState<string>('-180px')
  const [error, setError] = useState<string>('')
  const [data, setData] = useState({ user: '', password: '' })
  const { updateUser } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (show) {
      setTop('68px')
    } else {
      setTop('-180px')
    }
  }, [show])

  const handleUser = rol === 'login' ? loginUser : createUser

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')

    const keys = Object.values(data)
    if (!keys.some((text) => text === '')) {
      const { isValid, token, error } = handleUser({
        user: data.user,
        password: data.password
      })

      if (isValid) {
        updateUser({ name: data.user, token })
        router.push('/home')
        setShow(false)
        setData({ user: '', password: ''})
      } else {
        setError(error)
      }
    }
  }

  const handleCancel = () => {
    setShow(false)
    setError('')
    setData({ user: '', password: ''})
  }

  return (
    <form className={styles.modal} onSubmit={handleSubmit} style={{ top }}>
      <h1>{rol === 'login' ? 'Login': 'Crea tu cuenta'}</h1>
      <input
        required
        type="text"
        name="user"
        placeholder="Usuario"
        value={data.user}
        onChange={(e) => setData({ ...data, user: e.target.value })}
      />
      <input
        required
        type="password"
        name="password"
        placeholder="Contraseña"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <div>
        <Button
          type='button'
          color='secondary'
          handleClick={handleCancel}
        >Cancelar</Button>
        <Button type='submit'>Enviar</Button>
      </div>
      <small className={styles.error}>
        {Boolean(error) && <>{error}</>}
      </small>
    </form>
  )
}
