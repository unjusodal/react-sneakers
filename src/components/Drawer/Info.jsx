import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Drawer.module.scss'

export default function Info({img, message, additional, closeDrawer, smallImg, toHome}) {
  return (
    <div className={styles.emptyCart}>
        <img width={smallImg ? 50 : 120} height={smallImg ? 50 : 120} src={img} alt="" />
        <h3>{message}</h3>
        <p>{additional}</p>
        {toHome ? (
          <Link to='/'>
            <button>Вернуться назад</button>
          </Link>
        ) : <button onClick={closeDrawer}>Вернуться назад</button>}
    </div>
  )
}
