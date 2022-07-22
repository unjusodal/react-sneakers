import React from 'react'

import styles from './Drawer.module.scss'

export default function DrawerCard({img, name, price, removeFromCart}) {
    return (
        <div className={styles.item}>
            <img className={styles.image} width={70} height={70} src={img} alt="Кроссовки" />
            <div>
                <p>{name}</p>
                <h4>
                    {price.toLocaleString('ru', {
                        style: 'currency',
                        currency: 'rub',
                        minimumFractionDigits: 0
                    })}
                </h4>
            </div>
            <div className={styles.buttonBox}>
                <button>
                    <img onClick={removeFromCart} width={11} height={11} src="/assets/close-icon.svg" alt="Удалить" />
                </button>
            </div>
        </div> 
    )
}
