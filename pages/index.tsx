import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { GetStaticProps } from 'next';

import { MongoClient } from 'mongodb';

import AppContext from '../store/AppContext';
import ProductsPage from '../components/products/ProductsPage';

const HomePage = (props) => {
	const appCtx = useContext(AppContext);

	useEffect(() => {
		appCtx.products.length == 0 && appCtx.setProducts(props.products);
	}, [appCtx, props.products]);

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
};

export const getStaticProps: GetStaticProps = async () => {
	// fetch data from an API
	const client = await MongoClient.connect(process.env.MONGOLAB_URI);
	const db = client.db();

	const productsCollection = db.collection('products');

	const products = await productsCollection.find().toArray();

	client.close();

	return {
		props: {
			products: products.map((product) => ({
				id: product._id.toString(),
				name: product.name,
				sellIn: +product.sellIn,
				quality: +product.quality,
				type: product.type,
				image: product.image,
			})),
		},
		revalidate: 1,
	};
};

export default HomePage;
