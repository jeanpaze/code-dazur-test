import styled from '@emotion/styled';

const CardContainer = styled.div`
	display: grid;
	height: 100%;
	align-content: space-between;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function Card(props) {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
	return <CardContainer>{props.children}</CardContainer>;
}

export default Card;
