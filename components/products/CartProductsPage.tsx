import { useContext } from 'react';
import AppContext from '../../store/AppContext';
import ProductsList from './ProductsList';

const CartProductsPage = () => {
	const appCtx = useContext(AppContext);

	let content;

	if (appCtx.totalCart === 0) {
		content = <p>Your cart is empty.</p>;
	} else {
		content = <ProductsList products={appCtx.cartProducts} />;
	}

	return (
		<section>
			<h1>My Cart</h1>
			{content}
		</section>
	);
};

export default CartProductsPage;
