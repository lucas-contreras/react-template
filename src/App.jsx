import AppProvider from "./Providers/AppProvider";
import RoutesApp from "./Routes/RoutesApp";

import "./App.scss";

function App() {
	return (
		<AppProvider>
			<RoutesApp></RoutesApp>
		</AppProvider>
	);
}

export default App;
