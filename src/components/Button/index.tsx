'use client'
import { ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps {
  children: ReactNode
  handleClick?: () => void
  type?: 'button' | 'submit' | undefined
  color?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'big'
  style?: Record<string | number, string & {}>
}

export default function Button(props: ButtonProps) {
  const {
    children,
    handleClick,
    type='button',
    color='primary',
    size='normal',
    style
  } = props

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
      style={style}
    >{children}
    </button>
  )
}
