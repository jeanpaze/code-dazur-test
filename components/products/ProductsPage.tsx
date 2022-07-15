import { useState, useEffect, useContext } from 'react';
import { DUMMY_DATA } from '../../constants/data';
import AppContext from '../../store/AppContext';
import ProductsList from './ProductsList';

const ProductsPage = () => {
	const appCtx = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(true);
	const [loadedProducts, setLoadedProducts] = useState([]);

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
		setLoadedProducts(DUMMY_DATA.map((eachData) => ({ ...eachData })));
		// });
	}, []);

	useEffect(() => {
		appCtx.products.length == 0 && appCtx.setProducts(loadedProducts);
	}, [appCtx, loadedProducts]);

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

export default ProductsPage;
