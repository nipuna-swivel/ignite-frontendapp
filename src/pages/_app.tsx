import type { AppProps } from "next/app";
import AppLayout from "../layouts/appLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../store";
import AlertMessage from "../shared/alertMessage";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<Provider store={store}>
				<AlertMessage />
				<Component {...pageProps} />
			</Provider>
		</AppLayout>
	);
};
export default App;
