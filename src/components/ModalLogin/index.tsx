'use client'
import styles from './styles.module.css'
import Button from '../Button'
import { useEffect, useState } from 'react'

export default function ModalLogin(
  { show, setShow, rol }: { show: boolean, setShow: (b: boolean) => void, rol: string }
) {
  const [top, setTop] = useState<string>('-171px')

  useEffect(() => {
    if (show) {
      setTop('68px')
    } else {
      setTop('-171px')
    }
  }, [show])

  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.values(Object.fromEntries(formData))
    if (!data.some((text) => text === '')) {
      console.log(data)
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
