import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';
// @ts-expect-error TS(6142): Module '../../store/AppContext' was resolved to '/... Remove this comment to see the full error message
import AppContext from '../../store/AppContext';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/jean/D... Remove this comment to see the full error message
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

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function ProductItem(props) {
	const appCtx = useContext(AppContext);
	const inCart = (appCtx as any).inCart(props.id);
// @ts-expect-error TS(7006): Parameter 'productItem' implicitly has an 'any' ty... Remove this comment to see the full error message
	const product = (appCtx as any).products.find((productItem) => productItem.id === props.id);

	function toggleCartHandler() {
		if (inCart) {
			(appCtx as any).removeCart(props.id);
		} else {
			(appCtx as any).addCart(product);
		}
	}

	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<ListItemContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<Card>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<ImageContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<img src={product.image} alt={product.title} />
				</ImageContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<ContentContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<h3>{product.name}</h3>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<strong>Quality </strong>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<span>{product.quality}</span>
					</div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<strong>Days left </strong>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<span>{product.sellIn}</span>
					</div>
				</ContentContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<ActionsContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<button onClick={toggleCartHandler}>{inCart ? 'Remove from Cart' : 'Add to cart'}</button>
				</ActionsContainer>
			</Card>
		</ListItemContainer>
	);
}

export default ProductItem;
