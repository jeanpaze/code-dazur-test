import Layout from '../components/layout/Layout';
import { AppContextProvider } from '../store/AppContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
}

export default MyApp;
