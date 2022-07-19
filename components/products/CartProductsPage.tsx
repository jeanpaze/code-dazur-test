import { useContext } from 'react';

import AppContext from '../../store/AppContext';
import ProductsList from './ProductsList';

const CartProductsPage = () => {
	const appCtx = useContext(AppContext);

	const content = appCtx.totalCart === 0 ? <p>Your cart is empty.</p> : <ProductsList products={appCtx.cartProducts} />;

	return (
		<section>
			<h1>My Cart</h1>
			{content}
		</section>
	);
};

export default CartProductsPage;
