import { useRef } from 'react';
import styled from '@emotion/styled';
import Card from '../ui/Card';
import Colors from '../layout/Theme';

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
		color: ${Colors.fullContrast};
		border: 1px solid ${Colors.fullContrast};
		background-color: transparent;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
	}

	& button:hover,
	& button:active {
		background-color: ${Colors.midContrast};
	}
`;

function NewProductForm(props) {
	const nameInputRef = useRef();
	const sellInInputRef = useRef();
	const qualityInputRef = useRef();
	const typeInputRef = useRef();
	const imageInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredSellIn = sellInInputRef.current.value;
		const enteredQuality = qualityInputRef.current.value;
		const enteredType = typeInputRef.current.value;
		const enteredImage = imageInputRef.current.value;

		const productData = {
			name: enteredName,
			sellIn: enteredSellIn,
			quality: enteredQuality,
			type: enteredType,
			image: enteredImage,
		};

		console.log(productData);

		props.onAddProduct(productData);
	}

	return (
		<Card>
			<FormContainer onSubmit={submitHandler}>
				<ControlContainer>
					<label htmlFor="name">Product Name</label>
					<input type="text" required id="name" ref={nameInputRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="sellIn">Sell In</label>
					<input type="text" required id="sellIn" ref={sellInInputRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="quality">Quality</label>
					<input type="text" required id="quality" ref={qualityInputRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="type">Type</label>
					<input type="text" required id="type" ref={typeInputRef} />
				</ControlContainer>
				<ControlContainer>
					<label htmlFor="image">Product Image</label>
					<input type="text" required id="image" ref={imageInputRef} />
				</ControlContainer>
				<ActionsContainer>
					<button>Add Product</button>
				</ActionsContainer>
			</FormContainer>
		</Card>
	);
}

export default NewProductForm;
