import * as React from "react";
import { PureComponent } from "react";

import css from "./additional-info.module.css";

export default class AdditionalInfo extends PureComponent {
	render() {
		return (
			<section className={css.container} id="additional-info">
				Additional Info
			</section>
		);
	}
}
