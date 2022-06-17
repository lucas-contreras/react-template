import React, { useCallback } from "react";
import { useLayoutContext } from "../Providers/LayoutProvider";
import ControlPanel from "./ControlPanel";

import "./Controls.scss";

const css = {
	container: "controls",
};

export default function Controls() {
	const ctx = useLayoutContext();

	const onHandleOpen = useCallback(() => {
		ctx.events.setPanelOpen((prev) => !prev);
	}, [ctx]);

	return (
		<section className={css.container}>
			<button onClick={onHandleOpen}>Toggle menu</button>
			<button>Option 3</button>
			<ControlPanel isOpen={ctx.panelOpen} />
		</section>
	);
}
