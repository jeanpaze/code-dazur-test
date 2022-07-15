import Head from 'next/head';
import { Fragment } from 'react';

import ProductsPage from '../components/products/ProductsPage';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Shop</title>
				<meta name="description" content="We buy and sell only the finest goods." />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<ProductsPage />
		</Fragment>
	);
}

export default HomePage;
