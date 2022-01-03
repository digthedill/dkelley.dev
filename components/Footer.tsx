import type { NextComponentType } from 'next'
import styles from '../styles/Footer.module.scss'
const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <h4>The Footer</h4>
    </footer>
  )
}

export default Footer
