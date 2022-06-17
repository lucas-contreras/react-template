import React from "react";
import classNames from "classnames";

import "./ControlPanel.scss";

const css = {
	container: "control-panel",
};

export default function ControlPanel({
	isOpen,
}) {
	const panelClass = classNames(css.container, {
		[`${css.container}-open`]: isOpen,
	});

	return (
		<div className={panelClass}>
			here you will find funny things
		</div>
	);
}
