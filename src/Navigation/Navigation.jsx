import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

const css = {
	container: "navigation",
	nav: "navigation-nav",
	element: "navigation-nav__element",
	link: "navigation-nav__link",
};

export default function Navigation() {
	return (
		<nav className={css.container}>
			<ul className={css.nav}>
				<li className={css.element}>
					<Link className={css.link} to="/home">
						Home
					</Link>
				</li>
				<li className={css.element}>
					<Link className={css.link} to="/about">
						About
					</Link>
				</li>
				<li className={css.element}>
					<Link className={css.link} to="/contact-us">
						Contact us
					</Link>
				</li>
			</ul>
		</nav>
	);
}
