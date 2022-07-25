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

			setSneakersData(sneakersData.data)
		}

		fetchData()
	}, [])

	function addToCart(obj) {
		if (cartData.find(item => item.id == obj.id)) {
			removeFromCart(obj)
			
		} else {
			setCartData(prevState => [...prevState, obj])
		}
	}
	function removeFromCart(obj) {
		setCartData(prevState => prevState.filter(item => item.id != obj.id))
	}

	function addToFavorites(obj) {
		if (favoritesData.find(item => item.id == obj.id)) {
			removeFromFavorites(obj)
			
		} else {
			setFavoritesData(prevState => [...prevState, obj])
		}
	}
	function removeFromFavorites(obj) {
		setFavoritesData(prevState => prevState.filter(item => item.id != obj.id))
	}

	const totalPrice = cartData.reduce((sum, obj) => obj.price + sum, 0)

	return (
		<AppContext.Provider value={{sneakersData, favoritesData, cartData, setCartData, addToCart, addToFavorites, totalPrice}}>
			<div className={styles.App}>
				{isDrawerOpen && <Drawer closeDrawer={() => setIsDrawerOpen(false)} removeFromCart={removeFromCart}/>}
				<div className='wrapper'>
					<Header openDrawer={() => setIsDrawerOpen(true)}/>
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
