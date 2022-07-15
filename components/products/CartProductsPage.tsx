import { useContext } from 'react';
// @ts-expect-error TS(6142): Module '../../store/AppContext' was resolved to '/... Remove this comment to see the full error message
import AppContext from '../../store/AppContext';
// @ts-expect-error TS(6142): Module './ProductsList' was resolved to '/Users/je... Remove this comment to see the full error message
import ProductsList from './ProductsList';

const CartProductsPage = () => {
	const appCtx = useContext(AppContext);

	let content;

	if ((appCtx as any).totalCart === 0) {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		content = <p>Your cart is empty.</p>;
	} else {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		content = <ProductsList products={(appCtx as any).cartProducts}/>;
	}

	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<section>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<h1>My Cart</h1>
			{content}
		</section>
	);
};

export default CartProductsPage;
