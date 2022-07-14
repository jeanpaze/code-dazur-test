import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AppContext from '../../store/AppContext';
import Card from '../ui/Card';

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

const ContentContainer = styled.div`
	text-align: center;
	padding: 0 1.5rem;

	& h3 {
		font-size: 1.25rem;
		color: #2c292b;
		line-height: 1.3em;
	}

	& div {
		padding: 3px 0;
	}
`;

const ActionsContainer = styled.div`
	padding: 1rem 1.5rem 1.5rem;
	text-align: center;

	& button {
		font: inherit;
		cursor: pointer;
		color: #063970;
		border: 1px solid #063970;
		background-color: transparent;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
	}

	& button:hover,
	& button:active {
		background-color: #abdbe3;
	}
`;

function ProductItem(props) {
	const appCtx = useContext(AppContext);
	const inCart = appCtx.inCart(props.id);
	const product = appCtx.products.find((productItem) => productItem.id === props.id);

	function toggleCartHandler() {
		if (inCart) {
			appCtx.removeCart(props.id);
		} else {
			appCtx.addCart(product);
		}
	}

	return (
		<ListItemContainer>
			<Card>
				<ImageContainer>
					<img src={product.image} alt={product.title} />
				</ImageContainer>
				<ContentContainer>
					<h3>{product.name}</h3>
					<div>
						<strong>Quality: </strong>
						<span>{product.quality}</span>
					</div>
					<div>
						<strong>Due date: </strong>
						<span>{product.sellIn}</span>
					</div>
				</ContentContainer>
				<ActionsContainer>
					<button onClick={toggleCartHandler}>{inCart ? 'Remove from Cart' : 'Add to cart'}</button>
				</ActionsContainer>
			</Card>
		</ListItemContainer>
	);
}

export default ProductItem;
