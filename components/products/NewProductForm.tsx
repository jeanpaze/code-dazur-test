import { useState } from 'react';
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
	const [nameInput, setNameInput] = useState('');
	const [sellInInput, setSellInInput] = useState('');
	const [qualityInput, setQualityInput] = useState('');
	const [typeInput, setTypeInput] = useState('');
	const [imageInput, setImageInput] = useState('');

	function submitHandler(event) {
		event.preventDefault();

		const productData = {
			name: nameInput,
			sellIn: sellInInput,
			quality: qualityInput,
			type: typeInput,
			image: imageInput,
		};

		props.onAddProduct(productData);
	}

	return (
		<Card>
			<FormContainer onSubmit={submitHandler}>
				<ControlContainer>
					<label htmlFor="name">Product Name</label>
					<input type="text" required id="name" onChange={(event) => setNameInput(event.target.value)} value={nameInput} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="sellIn">Sell In</label>
					<input type="text" required id="sellIn" onChange={(event) => setSellInInput(event.target.value)} value={sellInInput} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="quality">Quality</label>
					<input type="text" required id="quality" onChange={(event) => setQualityInput(event.target.value)} value={qualityInput} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="type">Type</label>
					<input type="text" required id="type" onChange={(event) => setTypeInput(event.target.value)} value={typeInput} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="image">Product Image</label>
					<input type="text" required id="image" onChange={(event) => setImageInput(event.target.value)} value={imageInput} />
				</ControlContainer>
				<ActionsContainer>
					<button>Add Product</button>
				</ActionsContainer>
			</FormContainer>
		</Card>
	);
}

export default NewProductForm;
