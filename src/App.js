import React from 'react';

import axios from 'axios'

import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer'

import styles from './App.module.scss';

function App() {

	const [sneakersData, setSneakersData] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')
	
	React.useEffect(() => {
		axios.get('https://62d6d77451e6e8f06f145d02.mockapi.io/sneakers')
		.then(res => setSneakersData(res.data))

		axios.get('https://62d6d77451e6e8f06f145d02.mockapi.io/cart')
		.then(res => setCartItems(res.data))
	}, [])

	function addToCart(obj) {
		axios.post('https://62d6d77451e6e8f06f145d02.mockapi.io/cart', obj)
		setCartItems(prevState => [...prevState, obj])
	}

	function removeFromCart(id) {
		axios.delete(`https://62d6d77451e6e8f06f145d02.mockapi.io/cart/${id}`)
		setCartItems(prevState => prevState.filter(item => item.id !== id))
	}

	function changeInputValue(e) {
		console.log(e.target.value)
		setSearchValue(e.target.value)
	}

	return (
		<div className={styles.App}>
			{isDrawerOpen && <Drawer closeDrawer={() => setIsDrawerOpen(false)} cartItems={cartItems} removeFromCart={removeFromCart}/>}
			<div className='wrapper'>
				<Header openDrawer={() => setIsDrawerOpen(true)} />
				<main>
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
								onChange={changeInputValue} 
								value={searchValue} 
								placeholder='Поиск...'
							/>
						</div>
					</div>
					<div className={styles.sneakers}>
						{sneakersData.filter(item => item.name.toLowerCase().includes(searchValue))
						.map((item, index) => {
							return (
								<Card 
									key={index}
									img={item.img}
									name={item.name}
									price={item.price}
									onPlus={(obj) => addToCart(item)}
								/>
							)
						})}
					</div>
				</main>
			</div>
		</div>
	)
}

export default App;
