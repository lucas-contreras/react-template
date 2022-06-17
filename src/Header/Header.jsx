import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Header.scss";

const css = {
	container: 'header',
	title: 'header-title',
};

export default function Header() {
	return (
		<header className={css.container}>
			<h1 className={css.title}>This is a test</h1>
			<Navigation />
		</header>
	);
}
