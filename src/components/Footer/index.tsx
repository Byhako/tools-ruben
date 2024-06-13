import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Tools of Ruben 😉 {new Date().getFullYear()}</p>
    </footer>
  )
}
