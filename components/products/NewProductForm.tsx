import { useRef } from 'react';

import styled from '@emotion/styled';

import Card from '../ui/Card';
import THEME from '../../constants/theme';

const FormContainer = styled.form`
	padding: 1rem;
`;

const ControlContainer = styled.div`
	margin-bottom: 0.5rem;

	& label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	& input,
	& textarea {
		display: block;
		font: inherit;
		border-radius: 4px;
		border: 1px solid #ccc;
		padding: 0.25rem;
		width: 100%;
	}
`;

const ActionsContainer = styled.div`
	margin-top: 1rem;
	text-align: right;

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

function NewProductForm(props) {
	const nameRef = useRef(null);
	const sellInRef = useRef(null);
	const qualityRef = useRef(null);
	const typeRef = useRef(null);
	const imageRef = useRef(null);

	function submitHandler(event) {
		event.preventDefault();

		const productData = {
			name: nameRef.current.value,
			sellIn: sellInRef.current.value,
			quality: qualityRef.current.value,
			type: typeRef.current.value,
			image: imageRef.current.value,
		};

		props.onAddProduct(productData);
	}

	return (
		<Card>
			<FormContainer onSubmit={submitHandler}>
				<ControlContainer>
					<label htmlFor="name">Product Name</label>
					<input type="text" required id="name" ref={nameRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="sellIn">Sell In</label>
					<input type="text" required id="sellIn" ref={sellInRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="quality">Quality</label>
					<input type="text" required id="quality" ref={qualityRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="type">Type</label>
					<input type="text" required id="type" ref={typeRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="image">Product Image</label>
					<input type="text" required id="image" ref={imageRef} />
				</ControlContainer>
				<ActionsContainer>
					<button>Add Product</button>
				</ActionsContainer>
			</FormContainer>
		</Card>
	);
}

export default NewProductForm;
