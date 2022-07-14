import styled from '@emotion/styled';
import { Fragment } from 'react';
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

function ProductsList(props) {
	return (
		<Fragment>
			<ListContainer>
				{props.products.map((product) => (
					<ProductItem key={product.id} id={product.id} />
				))}
			</ListContainer>
		</Fragment>
	);
}

export default ProductsList;
