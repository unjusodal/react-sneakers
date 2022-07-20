import React from 'react'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logoBox}>
            <img width={40} height={40} src="/assets/logo.png" alt="logo" />
            <div>
                <h3>React Sneakers</h3>
                <p>Самые лютые тапки тут</p>
            </div>
        </div>
        <div className={styles.menu}>
            <div>
                <img src="/assets/cart-icon.svg" alt="Корзина" />
                <span>27 990 руб.</span>
            </div>
            <img src="/assets/favorites-icon.svg" alt="Закладки" />
            <img src="/assets/account-icon.svg" alt="Аккаунт" />
        </div>
    </header>
  )
}
