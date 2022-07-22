import React from 'react'

import DrawerCard from './DrawerCard'

import styles from './Drawer.module.scss'

export default function Drawer({closeDrawer, cartItems, removeFromCart}) {

    const totalPrice = 0

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.bar}>
                    <h2>Корзина</h2>
                    <button onClick={closeDrawer}>
                        <img width={11} height={11} src="/assets/close-icon.svg" alt="Закрыть" />
                    </button>
                </div>

                {
                    cartItems.length > 0 ? (
                        <>
                            <div className={styles.items}>
                                {
                                    cartItems.map((item, index) => {
                                        return (
                                            <DrawerCard 
                                                key={index} 
                                                img={item.img} 
                                                name={item.name} 
                                                price={item.price}
                                                removeFromCart={() => removeFromCart(item.id)}
                                            />
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
                    ) : (
                        <div className={styles.emptyCart}>
                            <img width={120} height={120} src="/assets/empty-box.png" alt="" />
                            <h3>Корзина пустая</h3>
                            <p>Добавьте хотя бы одну пару кросовок, чтобы сделать заказ</p>
                            <button onClick={closeDrawer}>Вернуться назад</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
