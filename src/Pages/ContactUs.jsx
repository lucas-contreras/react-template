import React, { useCallback, useRef, useState } from "react";

import "./ContactUs.scss";

const css = {
	container: "contact-us",
	form: "contact-us__form",
	formFoot: "contact-us__form-foot",
	submit: "contact-us__submit",
};

export default function ContactUs() {
	const inputNameRef = useRef(null);
	const [innerState, setInnerState] = useState({
		name: "",
		lastname: "",
	});

	const onHandlerSubmit = useCallback(
		(event) => {
			event.preventDefault();

			alert(
				`${innerState.name} ${innerState.lastname} are being uploaded`
			);
		},
		[innerState]
	);

	const onChangeHandler = useCallback(({ target }) => {
		const { value, name } = target;

		setInnerState((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const onResetHandler = useCallback(() => {
		if (inputNameRef.current) {
			inputNameRef.current.focus();
		}

		setInnerState({
			name: "",
			lastname: "",
		});
	}, []);

	return (
		<div className={css.container}>
			<form className={css.form} onSubmit={onHandlerSubmit}>
				<fieldset>
					<legend>data</legend>
					<input
						ref={inputNameRef}
						type="text"
						name="name"
						placeholder="name"
						value={innerState.name}
						onChange={onChangeHandler}
					/>
					<input
						type="text"
						name="lastname"
						placeholder="lastname"
						value={innerState.lastname}
						onChange={onChangeHandler}
					/>
				</fieldset>
				<div className={css.formFoot}>
					<button type="button" onClick={onResetHandler}>
						reset
					</button>
					<button className={css.submit} type="submit">
						submit
					</button>
				</div>
			</form>
		</div>
	);
}
