import { createContext, useState } from 'react';

const AppContext = createContext({
	cartProducts: [],
	totalCart: 0,
	addCart: (productItem) => {},
	removeCart: (productId) => {},
	inCart: (productId) => {},
	products: [],
	setProducts: (productsList) => {},
	productsClass: {},
});

export function AppContextProvider(props) {
	const [userCart, setUserCart] = useState([]);
	const [productsList, setProductsList] = useState([]);

	function addCartHandler(productItem) {
		setUserCart((prevUserCart) => {
			return prevUserCart.concat(productItem);
		});
	}

	function removeCartHandler(productId) {
		setUserCart((prevUserCart) => {
			return prevUserCart.filter((productItem) => productItem.id !== productId);
		});
	}

	function inCartHandler(productId) {
		return userCart.some((productItem) => productItem.id === productId);
	}

	function setProductsHandler(productsList) {
		setProductsList(productsList);
	}

	const context = {
		cartProducts: userCart,
		totalCart: userCart.length,
		addCart: addCartHandler,
		removeCart: removeCartHandler,
		inCart: inCartHandler,
		products: productsList,
		setProducts: setProductsHandler,
	};

	return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>;
}

export default AppContext;
