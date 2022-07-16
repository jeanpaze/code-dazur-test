import styled from '@emotion/styled';
import { useContext } from 'react';
import AppContext from '../../store/AppContext';
import Card from '../ui/Card';
import { ItemExtra } from './UpdateProducts';
import { motion, Variants } from 'framer-motion';
import THEME from '../../constants/theme';

const ListItemContainer = styled.li`
	margin: 0.55rem 0;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 20rem;
	overflow: hidden;
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ContentContainer = styled(motion.div)`
	text-align: center;
	padding: 0 1.5rem;

	& h3 {
		font-size: 1.25rem;
		color: ${THEME.textContent};
		line-height: 1.3em;
	}

	& div {
		padding: 3px 0;
	}
`;

const ActionsContainer = styled(motion.div)`
	padding: 1rem 1.5rem 1.5rem;
	text-align: center;

	& button {
		font: inherit;
		cursor: pointer;
		color: ${THEME.fullContrast};
		border: 1px solid ${THEME.fullContrast};
		background-color: transparent;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
	}

	& button:hover,
	& button:active {
		background-color: ${THEME.midContrast};
	}
`;

const ProductItem = (props) => {
	const appCtx = useContext(AppContext);
	const inCart = appCtx.inCart(props.id);
	const product: ItemExtra = appCtx.products.find((productItem) => productItem.id === props.id);

	const toggleCartHandler = () => {
		if (inCart) {
			appCtx.removeCart(props.id);
		} else {
			appCtx.addCart(product);
		}
	};

	const contentVariants: Variants = {
		hidden: { y: 3, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'easeOut',
				staggerChildren: 0.15,
			},
		},
	};

	const contentItemVariants: Variants = {
		hidden: { y: 3, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	const actionsVariants: Variants = {
		hidden: { y: 3, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.3,
			},
		},
	};

	return (
		<ListItemContainer>
			<Card>
				<ImageContainer>
					<motion.img src={product.image} alt={product.name} />
				</ImageContainer>
				<ContentContainer variants={contentVariants} initial="hidden" animate="show">
					<motion.h3 variants={contentItemVariants}>{product.name}</motion.h3>
					<motion.div variants={contentItemVariants}>
						<strong>Quality </strong>
						<span>{product.quality}</span>
					</motion.div>
					<motion.div variants={contentItemVariants}>
						<strong>Days left </strong>
						<span>{product.sellIn}</span>
					</motion.div>
				</ContentContainer>
				<ActionsContainer variants={actionsVariants} initial="hidden" animate="show">
					<button onClick={toggleCartHandler}>{inCart ? 'Remove from Cart' : 'Add to cart'}</button>
				</ActionsContainer>
			</Card>
		</ListItemContainer>
	);
};

export default ProductItem;
