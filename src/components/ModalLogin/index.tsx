'use client'
import styles from './styles.module.css'
import Button from '../Button'
import { useContext, useEffect, useState } from 'react'
import loginUser from 'app/server/api/loginUser'
import { useRouter } from 'next/navigation'
import { UserContext } from 'app/context/user'

export default function ModalLogin(
  { show, setShow, rol }: { show: boolean, setShow: (b: boolean) => void, rol: string }
) {
  const [top, setTop] = useState<string>('-171px')
  const [showError, setShowError] = useState(false)
  const { updateUser } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (show) {
      setTop('68px')
    } else {
      setTop('-171px')
    }
  }, [show])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setShowError(false)

    const formData = new FormData(e.target)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    const keys = Object.values(data)
    if (!keys.some((text) => text === '')) {
      const { isValid, token } = loginUser({
        email: data.email,
        password: data.password
      })

      if (isValid) {
        updateUser({ name: data.email, token })
        router.push('/home')
        setTop('-171px')
        //TODO:  clean inputs
      } else {
        setShowError(true)
      }
    }
  }

  return (
    <form className={styles.modal} onSubmit={handleSubmit} style={{ top }}>
      <h1>{rol === 'login' ? 'Login': 'Crea tu cuenta'}</h1>
      <input required type="text" name="email" placeholder="Correo" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
      <input required type="password" name="password" placeholder="Contraseña" />
      <div>
        <Button
          type='button'
          color='secondary'
          handleClick={() => {setShow(false); document.querySelector('form')?.reset()}}
        >Cancelar</Button>
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  )
}
