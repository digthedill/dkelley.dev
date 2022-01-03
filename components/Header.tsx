import type { NextComponentType } from 'next'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'
const Header: NextComponentType = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>
        <Link href="/">dkelley.dev</Link>
      </h2>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/work">work</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
