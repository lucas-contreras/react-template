import React, { useContext, useMemo, useState } from "react";

const layoutInitialValue = {
	panelOpen: false,
	events: {},
};

const LayoutContext = React.createContext(layoutInitialValue);

export default function LayoutProvider({ children }) {
	const [panelOpen, setPanelOpen] = useState(false);

	const value = useMemo(
		() => ({
			panelOpen,
			events: {
				setPanelOpen,
			},
		}),
		[panelOpen]
	);

	return (
		<LayoutContext.Provider value={value}>
			{children}
		</LayoutContext.Provider>
	);
}

export function useLayoutContext() {
	const ctx = useContext(LayoutContext);
	if (!ctx) {
		throw new Error("context has not been setted");
	}

	return ctx;
}
