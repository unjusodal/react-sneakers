import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import styles from './App.module.scss';

export const AppContext = React.createContext({})

function App() {

	const [sneakersData, setSneakersData] = React.useState([])
	const [cartData, setCartData] = React.useState([])
	const [favoritesData, setFavoritesData] = React.useState([])
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')
	
	React.useEffect(() => {
		async function fetchData() {
			const sneakersData = await axios.get('https://62d6d77451e6e8f06f145d02.mockapi.io/sneakers')
			const cartData = await axios.get('https://62d6d77451e6e8f06f145d02.mockapi.io/cart')
			const favoritesData = await axios.get('https://62d6d77451e6e8f06f145d02.mockapi.io/favorites')

			setSneakersData(sneakersData.data)
			setCartData(cartData.data)
			setFavoritesData(favoritesData.data)
		}

		fetchData()
	}, [])

	function addToCart(obj) {
		if (cartData.find(item => item.id == obj.id)) {
			removeFromCart(obj)
			
		} else {
			axios.post('https://62d6d77451e6e8f06f145d02.mockapi.io/cart', obj)
			setCartData(prevState => [...prevState, obj])
			console.log(obj)
		}
	}
	function removeFromCart(obj) {
		axios.delete(`https://62d6d77451e6e8f06f145d02.mockapi.io/cart/${obj.id}`)
		setCartData(prevState => prevState.filter(item => item.id != obj.id))
	}

	function addToFavorites(obj) {
		if (favoritesData.find(item => item.id == obj.id)) {
			removeFromFavorites(obj)
			
		} else {
			axios.post('https://62d6d77451e6e8f06f145d02.mockapi.io/favorites', obj)
			setFavoritesData(prevState => [...prevState, obj])
			console.log(obj)
		}
	}
	function removeFromFavorites(obj) {
		axios.delete(`https://62d6d77451e6e8f06f145d02.mockapi.io/favorites/${obj.id}`)
		setFavoritesData(prevState => prevState.filter(item => item.id != obj.id))
	}

	return (
		<AppContext.Provider value={{sneakersData, favoritesData, cartData, addToCart, addToFavorites}}>
			<div className={styles.App}>
				{isDrawerOpen && <Drawer closeDrawer={() => setIsDrawerOpen(false)} cartData={cartData} removeFromCart={removeFromCart}/>}
				<div className='wrapper'>
					<Header openDrawer={() => setIsDrawerOpen(true)} />
					<main>
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>} />
							<Route path='/favorites' element={<Favorites />} />
						</Routes>
					</main>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App;
