import React from "react";
import Layout from "../Layout/Layout";
import LayoutProvider from "../Providers/LayoutProvider";

export default function Main() {
	return (
		<LayoutProvider>
			<Layout />
		</LayoutProvider>
	);
}
