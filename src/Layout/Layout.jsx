import React from 'react'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
      <div>
        <header className={styles.header}>
        <h1>Crypto App</h1>
        </header>
        {children}
        <footer className={styles.footer}>
        <h4>Developed by me ❤️</h4>
        </footer>
    </div>
  )
}

export default Layout