import React from 'react'
import { AppContext } from '../App'
import Card from '../components/Card'

import styles from '../App.module.scss';

export default function Home({searchValue, setSearchValue}) {

    const {sneakersData, cartData, favoritesData, addToCart, addToFavorites, isItemAdded} = React.useContext(AppContext)
    

    return (
        <>
            <div className={styles.bar}>
                <h1>Все кроссовки{searchValue ? `: ${searchValue}` : ''}</h1>
                <div>
                    <img className={styles.searchIcon} src="/assets/search-icon.svg" alt="Поиск" />
                    {searchValue && (
                        <img 
                            className={styles.clearIcon} 
                            onClick={() => setSearchValue('')} 
                            src="/assets/close-icon.svg" 
                            alt="Очистить" 
                        />
                    )}
                    <input 
                        type='text' 
                        onChange={(e) => setSearchValue(e.target.value)} 
                        value={searchValue} 
                        placeholder='Поиск...'
                    />
                </div>
            </div>
            <div className={styles.sneakers}>
                {sneakersData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(item => {
                    return (
                        <Card 
                            key={item.hash}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            onPlus={(obj) => addToCart(item)}
                            onLike={(obj) => addToFavorites(item)}
                            favorited={favoritesData.find(obj => obj.hash == item.hash) ? true : false}
                        />
                    )
                })}
            </div>
        </>
    )
}
