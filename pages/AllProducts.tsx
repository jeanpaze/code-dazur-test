import { useState, useEffect, useContext } from 'react';
import { DUMMY_DATA } from '../constants/data';
import AppContext from '../store/AppContext';
import ProductsList from '../components/products/ProductsList';

const AllProductsPage = () => {
	const appCtx = useContext(AppContext);
	const { setProducts } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		// fetch(
		//   '.firebaseio.com/products.json'
		// )
		//   .then((response) => {
		//     return response.json();
		//   })
		//   .then((data) => {
		//     const products = [];

		//     for (const key in data) {
		//       const product = {
		//         id: key,
		//         ...data[key]
		//       };

		//       products.push(product);
		//     }

		setIsLoading(false);
		setProducts(DUMMY_DATA.map((eachData) => ({ ...eachData })));
		// });
	}, [setProducts]);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<ProductsList products={appCtx.products} />
		</section>
	);
};

export default AllProductsPage;
