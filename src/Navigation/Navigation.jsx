import React from "react";

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
					<a href="#to-nowhere" className={css.link}>
						Element 1
					</a>
				</li>
				<li className={css.element}>
					<a href="#to-nowhere" className={css.link}>
						Element 2
					</a>
				</li>
				<li className={css.element}>
					<a href="#to-nowhere" className={css.link}>
						Element 3
					</a>
				</li>
			</ul>
		</nav>
	);
}
