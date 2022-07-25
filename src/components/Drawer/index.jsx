import React from 'react'

import styles from './Drawer.module.scss'

export default function Drawer({closeDrawer, cartData, removeFromCart}) {

    const totalPrice = 0

    const totalBlock = () => {
        return (
            <>
                <div className={styles.items}>
                    {
                        cartData.map((item, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <img className={styles.image} width={70} height={70} src={item.img} alt="Кроссовки" />
                                    <div>
                                        <p>{item.name}</p>
                                        <h4>
                                            {item.price.toLocaleString('ru', {
                                                style: 'currency',
                                                currency: 'rub',
                                                minimumFractionDigits: 0
                                            })}
                                        </h4>
                                    </div>
                                    <div className={styles.buttonBox}>
                                        <button>
                                            <img onClick={() => removeFromCart(item)} width={11} height={11} src="/assets/close-icon.svg" alt="Удалить" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.total}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice.toLocaleString('ru', {
                                style: 'currency',
                                currency: 'rub',
                                minimumFractionDigits: 0
                            })}</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>0 руб.</b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </>
        )
    }

    const emptyCartBlock = () => {
        return (
            <div className={styles.emptyCart}>
                <img width={120} height={120} src="/assets/empty-box.png" alt="" />
                <h3>Корзина пустая</h3>
                <p>Добавьте хотя бы одну пару кросовок, чтобы сделать заказ</p>
                <button onClick={closeDrawer}>Вернуться назад</button>
            </div>
        )
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.bar}>
                    <h2>Корзина</h2>
                    <button onClick={closeDrawer}>
                        <img width={11} height={11} src="/assets/close-icon.svg" alt="Закрыть" />
                    </button>
                </div>
                {cartData.length > 0 ? (totalBlock()) : (emptyCartBlock())}
            </div>
        </div>
    )
}
