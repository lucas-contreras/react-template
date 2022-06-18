import LayoutProvider from "./Providers/LayoutProvider";
import RoutesApp from "./Routes/RoutesApp";

import "./App.scss";

function App() {
	return (
		<LayoutProvider>
			<RoutesApp></RoutesApp>
		</LayoutProvider>
	);
}

export default App;
