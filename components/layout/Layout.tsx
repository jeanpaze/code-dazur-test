import styled from '@emotion/styled';
// @ts-expect-error TS(6142): Module './MainNavigation' was resolved to '/Users/... Remove this comment to see the full error message
import MainNavigation from './MainNavigation';

const LayoutContainer = styled.main`
	margin: 7rem auto 3rem;
	width: 90%;
	max-width: 59rem;
`;

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function Layout(props) {
	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<MainNavigation />
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<LayoutContainer>{props.children}</LayoutContainer>
		</div>
	);
}

export default Layout;
