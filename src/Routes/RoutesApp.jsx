import React from "react";
import { Route } from "react-router";
import Controls from "../Controls/Controls";
import Header from "../Header/Header";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";

export default function RoutesApp() {
	return (
		<>
			<Controls />
			<Header />
			<main className="main">
				<Route exact path={["/", "/home"]}>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact-us">
					<ContactUs />
				</Route>
			</main>
		</>
	);
}
