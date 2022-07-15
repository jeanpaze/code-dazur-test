import { useState, useEffect, useContext } from 'react';
// @ts-expect-error TS(6142): Module '../../constants/data' was resolved to '/Us... Remove this comment to see the full error message
import { DUMMY_DATA } from '../../constants/data';
// @ts-expect-error TS(6142): Module '../../store/AppContext' was resolved to '/... Remove this comment to see the full error message
import AppContext from '../../store/AppContext';
// @ts-expect-error TS(6142): Module './ProductsList' was resolved to '/Users/je... Remove this comment to see the full error message
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
// @ts-expect-error TS(7006): Parameter 'eachData' implicitly has an 'any' type.
		setLoadedProducts(DUMMY_DATA.map((eachData) => ({ ...eachData })));
		// });
	}, []);

	useEffect(() => {
		(appCtx as any).products.length == 0 && (appCtx as any).setProducts(loadedProducts);
	}, [appCtx, loadedProducts]);

	if (isLoading) {
		return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<section>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<p>Loading...</p>
			</section>
		);
	}

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
	return (<section>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<ProductsList products={(appCtx as any).products}/>
		</section>);
};

export default ProductsPage;
