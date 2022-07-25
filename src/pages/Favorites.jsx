import React from 'react'
import { AppContext } from '../App'
import Card from '../components/Card'

import styles from '../App.module.scss';

export default function Favorites() {

    const {favoritesData, cartData, addToCart, addToFavorites} = React.useContext(AppContext)

    return (
        <>
            <div className={styles.bar}>
                <h1>Закладки</h1>
            </div>
            <div className={styles.sneakers}>
                {favoritesData.map(item => {
                    return (
                        <Card 
                            key={item.hash}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            onPlus={(obj) => addToCart(item)}
                            onLike={(obj) => addToFavorites(item)}
                            added={cartData.some(obj => obj.id == item.id) ? true : false}
                            favorited={favoritesData.some(obj => obj.id == item.id) ? true : false}
                        />
                    )
                })}
            </div>
        </>
    )
}
