import React, { useCallback } from "react";
import { useAppContext } from "../Providers/AppProvider";
import ControlPanel from "./ControlPanel";

import "./Controls.scss";

const css = {
	container: "controls",
	section: 'controls-section'
};

export default function Controls() {
	const { panelOpen, events } = useAppContext();

	const onHandleOpen = useCallback(() => {
		events.setPanelOpen((prev) => !prev);
	}, [events]);

	return (
		<div className={css.container}>
			<section className={css.section}>
				<button onClick={onHandleOpen}>Toggle menu</button>
				<button onClick={() => {
					alert('nothing has implemented yet');
				}}>Option 3</button>
			</section>
			<ControlPanel isOpen={panelOpen} />
		</div>
	);
}
