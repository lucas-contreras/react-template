/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home2.scss";
import React from "react";

export default function Home2() {
	return (
		<div className="wrap">
			<nav className="wrap-nav">
				<ol className="wrap-list">
					<li>
						<a className="wrap-list__link" href="#">
							Home
						</a>
					</li>
					<li>
						<a className="wrap-list__link" href="#">
							Product
						</a>
					</li>
					<li>
						<a className="wrap-list__link" href="#">
							Pricing
						</a>
					</li>
					<li>
						<a className="wrap-list__link" href="#">
							Contact
						</a>
					</li>
					<li>
						<a className="wrap-list__link" href="#">
							Login
						</a>
					</li>
					<li></li>
					<li>
						<a className="wrap-list__link button" href="#" role="button">
							Ligar agora
						</a>
					</li>
				</ol>
			</nav>
			<main className="home2-main">
				{/* <div>Hello2 this is home</div> */}
			</main>
		</div>
	);
}
