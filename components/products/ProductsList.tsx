import styled from '@emotion/styled';
import { Fragment } from 'react';
// @ts-expect-error TS(6142): Module './ProductItem' was resolved to '/Users/jea... Remove this comment to see the full error message
import ProductItem from './ProductItem';

const ListContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: grid;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	column-gap: 20px;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function ProductsList(props) {
	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<Fragment>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<ListContainer>
{/* @ts-expect-error TS(7006): Parameter 'product' implicitly has an 'any' type. */}
				{props.products.map((product) => (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<ProductItem key={product.id} id={product.id} />
				))}
			</ListContainer>
		</Fragment>
	);
}

export default ProductsList;
