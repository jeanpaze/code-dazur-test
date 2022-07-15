// our-domain.com/add-product
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewProductForm from '../../components/products/NewProductForm';

function NewProductPage() {
	const router = useRouter();

	async function addProductHandler(enteredProductData) {
		const response = await fetch('/api/add-product', {
			method: 'POST',
			body: JSON.stringify(enteredProductData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);

		router.push('/');
	}

	return (
		<Fragment>
			<Head>
				<title>Add a New Product</title>
				<meta name="description" content="Add products." />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<NewProductForm onAddProduct={addProductHandler} />
		</Fragment>
	);
}

export default NewProductPage;
