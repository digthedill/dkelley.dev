import { NextPage } from 'next/types'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
