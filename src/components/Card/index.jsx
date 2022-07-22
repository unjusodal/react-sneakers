import { useState } from 'react'

import styles from './Card.module.scss'

export default function Card({img, name, price, onPlus}) {

    const [isChecked, setIsChecked] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    function addToCart() {
        setIsChecked(prevState => !prevState)
        onPlus()
    }

    return (
        <div className={styles.card}>
            <button className={styles.favorite} onClick={() => setIsFavorite(!isFavorite)}>
                <img src={isFavorite ? "/assets/is-favorite-icon.png" : "/assets/add-favorite-icon.png"} alt="add to favorites" />
            </button>
            <div className={styles.image}>
                <img src={img} alt="Sneakers" />
            </div>
            <p>{name}</p>
            <div className={styles.price}>
                <div>
                    <span>Цена:</span>
                    <h5>
                        {price.toLocaleString('ru', {
                            style: 'currency',
                            currency: 'rub',
                            minimumFractionDigits: 0
                        })}
                    </h5>
                </div>
                <button className={isChecked ? styles.active : ''} onClick={addToCart}>
                    <img src={isChecked ? "/assets/check-icon.svg" : "/assets/plus-icon.svg"} alt="add to cart" />
                </button>
            </div>
        </div>
    )
}
