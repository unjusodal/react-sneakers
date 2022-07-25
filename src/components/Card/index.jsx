import { useState } from 'react'

import styles from './Card.module.scss'

export default function Card({img, name, price, onPlus, onLike, added, favorited}) {

    const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorited)

    function addToCart() {
        setIsAdded(prevState => !prevState)
        onPlus()
    }

    function addToFavorites() {
        setIsFavorite(prevState => !prevState)
        onLike()
    }

    return (
        <div className={styles.card}>
            <button className={styles.favorite} onClick={addToFavorites}>
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
                <button className={isAdded ? styles.active : ''} onClick={addToCart}>
                    <img src={isAdded ? "/assets/check-icon.svg" : "/assets/plus-icon.svg"} alt="add to cart" />
                </button>
            </div>
        </div>
    )
}
