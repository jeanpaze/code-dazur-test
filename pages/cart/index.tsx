import Head from 'next/head';
import { Fragment } from 'react';

import CartProductsPage from '../../components/products/CartProductsPage';

function CartPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Shop - Cart</title>
				<meta name="description" content="Cart" />
			</Head>
			<CartProductsPage />
		</Fragment>
	);
}

export default CartPage;
