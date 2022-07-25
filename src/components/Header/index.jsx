import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header({openDrawer}) {
  return (
    <header className={styles.header}>
        <Link to='/'>
            <div className={styles.logoBox}>
                <img width={40} height={40} src="/assets/logo.png" alt="logo" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>Самые лютые тапки тут</p>
                </div>
            </div>
        </Link>
        <div className={styles.menu}>
            <div onClick={openDrawer}>
                <img src="/assets/cart-icon.svg" alt="Корзина" />
                <span>27 990 руб.</span>
            </div>
            <Link to='/favorites'>
                <img src="/assets/favorites-icon.svg" alt="Закладки" />
            </Link>
            <img src="/assets/account-icon.svg" alt="Аккаунт" />
        </div>
    </header>
  )
}
