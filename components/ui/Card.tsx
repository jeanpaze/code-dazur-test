import styled from '@emotion/styled';
import Colors from '../layout/Theme';

const CardContainer = styled.div`
	display: grid;
	height: 100%;
	align-content: space-between;
	background-color: ${Colors.highlight};
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Card = (props) => {
	return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
