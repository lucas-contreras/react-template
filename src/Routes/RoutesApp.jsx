import React from "react";
import { Route } from "react-router";
import Controls from "../Controls/Controls";
import Header from "../Header/Header";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Home2 from "../Pages/Home2";
import ContactUs from "../Pages/ContactUs";
import Navigation from "../Navigation/Navigation";

// export default function RoutesApp() {
// 	return (
// 		<>
// 			<Controls />
// 			<Header />
// 			<Navigation />
// 			<main className="main">
// 				<Route exact path={["/", "/home"]}>
// 					<Home />
// 				</Route>
// 				<Route path="/about">
// 					<About />
// 				</Route>
// 				<Route path="/contact-us">
// 					<ContactUs />
// 				</Route>
// 			</main>
// 		</>
// 	);
// }

export default function RoutesApp() {
	return (
		<>
			<Route exact path={["/", "/home"]}>
				<Home2 />
			</Route>
			{/* <Route exact path={"/about"}>
				<Home3 />
			</Route> */}
		</>
	);
}
