import { createContext, useState } from 'react';

import { ItemExtra } from '../components/products/UpdateProducts';
export interface AppContextType {
	cartProducts: string[];
	totalCart: number;
	addCart: (productItem: ItemExtra) => void;
	removeCart: (productId: string) => void;
	inCart: (productId: string) => boolean;
	products: ItemExtra[];
	setProducts: (productsList: ItemExtra[]) => void;
}

const AppContext = createContext<AppContextType>({
	cartProducts: [],
	totalCart: 0,
	addCart: (productItem) => {},
	removeCart: (productId) => {},
	inCart: (productId) => false,
	products: [],
	setProducts: (productsList) => {},
});

export const AppContextProvider = (props) => {
	const [userCart, setUserCart] = useState([]);
	const [productsList, setProductsList] = useState([]);

	const addCartHandler = (productItem) => {
		setUserCart((prevUserCart) => {
			return prevUserCart.concat(productItem);
		});
	};

	const removeCartHandler = (productId) => {
		setUserCart((prevUserCart) => {
			return prevUserCart.filter((productItem) => productItem.id !== productId);
		});
	};

	const inCartHandler = (productId) => {
		return userCart.some((productItem) => productItem.id === productId);
	};

	const setProductsHandler = (productsList) => {
		setProductsList(productsList);
	};

	const context: AppContextType = {
		cartProducts: userCart,
		totalCart: userCart.length,
		addCart: addCartHandler,
		removeCart: removeCartHandler,
		inCart: inCartHandler,
		products: productsList,
		setProducts: setProductsHandler,
	};

	return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>;
};

export default AppContext;
