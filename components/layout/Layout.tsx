import styled from '@emotion/styled';
import MainNavigation from './MainNavigation';

const LayoutContainer = styled.main`
	margin: 7rem auto 3rem;
	width: 90%;
	max-width: 59rem;
`;

const Layout = (props: any) => {
	return (
		<div>
			<MainNavigation />
			<LayoutContainer>{props.children}</LayoutContainer>
		</div>
	);
};

export default Layout;
