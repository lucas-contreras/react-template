import React from "react";
import Controls from "../Controls/Controls";
import Header from "../Header/Header";

import "./Layout.scss";

export default function Layout() {
	return (
		<>
			<Header />
			<Controls />
			<main className="main">hello</main>
		</>
	);
}
