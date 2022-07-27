import React from 'react'
import { AppContext } from '../../App'
import styles from './Card.module.scss'

export default function Card({id, img, name, price, onPlus, onLike, added, favorited}) {

    const {isItemAdded} = React.useContext(AppContext)

    const [isFavorite, setIsFavorite] = React.useState(favorited)

    function addToCart() {
        
        onPlus()
    }

    function addToFavorites() {
        setIsFavorite(prevState => !prevState)
        onLike()
    }

    // console.log(isItemAdded(id))

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
                <button className={isItemAdded(id) ? styles.active : ''} onClick={addToCart}>
                    <img src={isItemAdded(id) ? "/assets/check-icon.svg" : "/assets/plus-icon.svg"} alt="add to cart" />
                </button>
            </div>
        </div>
    )
}
