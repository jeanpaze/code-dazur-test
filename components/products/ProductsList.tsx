import { Fragment, useContext } from 'react';

import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';

import ProductItem from './ProductItem';
import AppContext from '../../store/AppContext';

const ListContainer = styled(motion.ul)`
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

const listVariants: Variants = {
	hidden: { y: 5, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 0.5,
		},
	},
};

const ProductsList = (props) => {
	const appCtx = useContext(AppContext);
	const productsList = props.isCart ? appCtx.cartProducts : appCtx.products;

	return (
		<Fragment>
			<ListContainer variants={listVariants} initial="hidden" animate="show">
				{productsList.map((product) => (
					<ProductItem key={product.id} id={product.id} />
				))}
			</ListContainer>
		</Fragment>
	);
};

export default ProductsList;
