import React from 'react'
import Info from './Info'
import { AppContext } from '../../App'
import styles from './Drawer.module.scss'

export default function Drawer({closeDrawer, removeFromCart}) {

    const {cartData, setCartData, totalPrice} = React.useContext(AppContext)

    const [isOrderComplete, setIsOrderComplete] = React.useState(false)

    function handleOrder() {
        setIsOrderComplete(true)
        setCartData([])
    }

    const taxes = (5 * totalPrice) / 100

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
                            <b>{taxes.toLocaleString('ru', {
                                style: 'currency',
                                currency: 'rub',
                                minimumFractionDigits: 0
                            })}</b>
                        </li>
                    </ul>
                    <button onClick={handleOrder}>Оформить заказ</button>
                </div>
            </>
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
                {cartData.length > 0 ? (totalBlock()) : (<Info
                                                            img={isOrderComplete ? '/assets/order-complete.jpg' : '/assets/empty-box.png'}
                                                            smallImg={false}
                                                            message={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                                                            additional={isOrderComplete ? 'Ваш заказ скоро будет передан курьерской доставке' : 'Добавьте хотя бы один товар, чтобы сделать заказ'}
                                                            closeDrawer={closeDrawer}
                                                            toHome={false}
                                                        />)}
            </div>
        </div>
    )
}
