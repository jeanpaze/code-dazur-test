import { Global, css } from '@emotion/react';

import Layout from '../components/layout/Layout';
import { AppContextProvider } from '../store/AppContext';

const GlobalStyles = css`
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Open+Sans:wght@400;700&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		font-family: 'Open Sans', 'Lato', sans-serif;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Lato', sans-serif;
	}

	.hide {
		visibility: hidden;
	}
`;

const MyApp = ({ Component, pageProps }) => {
	return (
		<AppContextProvider>
			<Global styles={GlobalStyles} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
};

export default MyApp;
