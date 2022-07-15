import styled from '@emotion/styled';

const CardContainer = styled.div`
	display: grid;
	height: 100%;
	align-content: space-between;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Card = (props) => {
	return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
